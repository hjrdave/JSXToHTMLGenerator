import React from 'react';
import useHTML from 'react-cork/use-html';
import useDataAttributes from 'react-cork/use-data-attributes';
import useApiManager from '../../molecules/ApiManager/use-api-manager';

interface Props {
    content?: string;
    loading?: boolean;
    error?: null | string | { [key: string]: any };
    type?: 'html' | 'javascript' | 'text'
    fallBackBindData?: {
        [key: string]: string;
    };
    bindData?: {
        [key: string]: string;
    }
};

export default function ContentBlock({ content, bindData, fallBackBindData, type, error, loading }: Props) {

    const apiManager = useApiManager();
    //api data attributes
    const accountProfile = useDataAttributes(apiManager.Account.dataAttr);

    //content needs a loading and error state;
    const html = useHTML();

    return (
        <>
            {
                (loading) ?
                    html.placeHolderHTMLFrom((content) ? content : '', '<i class="fa-solid fa-spinner fa-spin-pulse"></i>') :
                    (error !== undefined && error !== null) ?
                        html.htmlFrom((content) ? content : '', { bindData: fallBackBindData }) :
                        (type === 'html') ?
                            html.htmlFrom((content) ? content : '', { bindData: accountProfile.data[0], fallBackBindData: fallBackBindData })
                            : null
            }
        </>
    )
}