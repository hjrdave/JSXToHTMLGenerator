import React from 'react';
import { Button } from 'react-bootstrap';
import DesignViewFrame from '../../atoms/DesignViewFrame';
import CodeOutput from '../../organisms/CodeOutput';
import useCSS from 'react-cork/use-css';
import useHTML from 'react-cork/use-html';
import useTemplate from '../../../../hooks/use-template';

interface Props {
    children?: JSX.Element | JSX.Element[];
    folderPath: string;
    name: string;
    compProps: { [key: string]: any };
    CompToStaticHTML: (props: any) => JSX.Element;
};

export default function CompBuilder({ children, compProps, CompToStaticHTML, name, folderPath }: Props) {
    const css = useCSS();
    const html = useHTML();

    const [rawCssString, setRawCssString] = React.useState('');
    const [cssNameSpaces, setCssNamespaces] = React.useState({});
    const [rawJsString, setRawJsString] = React.useState('');
    const htmlString = html.JSXToHTML(CompToStaticHTML, compProps);
    const nameSpacedCssString = css.nameSpaceClassNames((rawCssString) ? rawCssString : '', (cssNameSpaces) ? cssNameSpaces : {});
    const template = useTemplate({
        name: name,
        scripts: rawJsString,
        css: nameSpacedCssString,
        html: htmlString
    });

    //imports CSS and JSS files
    React.useEffect(() => {
        const getCssString = async () => {
            let cssString = await import(`!!raw-loader!sass-loader!postcss-loader!../../../../scenes/HtmlGenerators${folderPath}/${name}/Export/${name}.module.scss`);
            setRawCssString((typeof cssString.default === 'string') ? cssString.default as any : '');
        };
        const getCssClassNames = async () => {
            let cssString = await import(`../../../../scenes/HtmlGenerators${folderPath}/${name}/Export/${name}.module.scss`);
            setCssNamespaces((cssString?.default) ? cssString.default : {});
        };
        const getJsString = async () => {
            let jsString = await import(`!!raw-loader!ts-loader!../../../../scenes/HtmlGenerators${folderPath}/${name}/Export/scripts.ts`);
            setRawJsString((typeof jsString.default === 'string') ? jsString.default : '');
        };
        getCssString();
        getCssClassNames();
        getJsString();
    }, [name]);

    return (
        <>
            <div className='d-flex justify-content-between w-100 pb-3'>
                <Button size={'sm'} variant={'secondary'} href={`http://localhost:3000/previews/${name?.toLowerCase()}.html`}>Preview</Button>
                <CodeOutput
                    tabContent={[
                        {
                            type: 'html',
                            fileName: `${name.toLowerCase()}.html`,
                            codeString: htmlString
                        },
                        {
                            type: 'css',
                            fileName: `styles.css`,
                            codeString: nameSpacedCssString
                        },
                        {
                            type: 'js',
                            fileName: `scripts.js`,
                            codeString: rawJsString
                        }
                    ]}
                    previewHtml={template.buildCompPreviewPage()}
                />
            </div>

            {/* Design View */}
            <DesignViewFrame>
                {children}
            </DesignViewFrame>
        </>
    )
}