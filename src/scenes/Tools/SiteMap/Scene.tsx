import React from 'react';
import uniqid from 'uniqid';
import { Col, Row, Button, Badge, Spinner } from 'react-bootstrap';
import useNonInitialEffect from 'react-cork/use-non-initial-effect';
import useExports from 'react-cork/use-exports';
import useFetch from 'react-cork/use-fetch';
import useJSON from 'react-cork/use-json';
import CodeEditor from '../../../App/components/molecules/CodeEditor';
import ButtonWithModel from '../../../App/components/atoms/ButtonWithModel';
import MultiSearch from '../../../App/components/molecules/MultiSearch';
import Counter from '../../../App/components/atoms/Counter';
import CardGrid from '../../../App/components/organisms/CardGrid';
import { ISiteMapItems } from './interfaces';
import CustomCard from './CustomCard';

export default function Scene() {

    const { request, loading } = useFetch('https://www.sevencorners.com/sitemap.xml');
    const json = useJSON();
    const exports = useExports();
    const [searchType, setSearchType] = React.useState<'Tags' | 'Title' | 'Url' | string>('Title');
    const [searchValue, setSearchValue] = React.useState('');
    const [rawSiteMapText, setRawSiteMapText] = React.useState('');
    const [siteMapItems, setSiteMapItems] = React.useState<ISiteMapItems[]>([]);
    const [filteredResults, setFilteredResults] = React.useState<ISiteMapItems[]>([]);
    const generateSitMapMeta: (urlArray: string[]) => ISiteMapItems[] = (urlArray: string[]) => (
        urlArray?.map((url) => {
            const tags = url.replace('https://www.sevencorners.com/', '').split('/')
            return {
                id: uniqid(),
                url: url,
                tags: tags.slice(0, tags.length - 1),
                page: tags[tags.length - 1].replaceAll('-', ' ').replace(/\b\w/g, function (l) { return l.toUpperCase() })
            }
        })
    )
    const createSiteMapItems = (input: string) => {
        const removeNewLineRegex = new RegExp('[\n\r]+', 'gm');
        const createArrayFromInput = input?.replaceAll(removeNewLineRegex, ',').split(',');
        const urlArray = createArrayFromInput?.filter((item) => item.startsWith('http'));
        const urlWithMetaArray = generateSitMapMeta(urlArray);
        return urlWithMetaArray
    };
    const filterResults = (items: ISiteMapItems[]) => {
        const queries = searchValue.toLowerCase().split(', ');
        const filteredItems = items.filter((item) => {
            const page = item.page.toLowerCase();
            const url = item.url.toLowerCase();
            const tags = item.tags.map((tag) => (tag.toLowerCase()));
            if (searchType === 'Title') {
                return page.startsWith(queries[0]);
            }
            else if (searchType === 'Url') {
                return url.startsWith(queries[0]);
            }
            else if (searchType === 'Tags') {
                return queries.some((query) => (tags.includes(query)));
            }
        });
        return filteredItems;
    }

    //gets sitemap from website and syncs
    const syncSiteMapData = async () => {
        const res = await request.get();
        const jsonData = JSON.parse(json.convertFromXML(res));
        const urlArray = jsonData.urlset[0].url.map((item: any) => (item.loc[0]._text));
        const items = generateSitMapMeta(urlArray);
        setSiteMapItems(items);
        setFilteredResults(items);
    }

    //set site map cards
    useNonInitialEffect(() => {
        const items = createSiteMapItems(rawSiteMapText);
        setSiteMapItems(items);
        setFilteredResults(items);
    }, [rawSiteMapText]);

    //set filtered results
    useNonInitialEffect(() => {
        if (searchValue.length > 0) {
            setFilteredResults(filterResults(siteMapItems));
        } else {
            setFilteredResults(siteMapItems);
        }
    }, [searchValue]);

    return (
        <>
            <Col className={'pt-4 w-100'}>
                <Row>
                    <Col sm={'12'} md={'4'}>
                        <MultiSearch
                            onChange={(value) => setSearchValue(value)}
                            onActiveSearch={(value) => setSearchType(value)}
                            searchBy={["Title", "Tags", "Url"]}
                        />
                    </Col>
                    <Col className={'d-flex'}>
                        <div className={'pe-3'}>
                            <Counter
                                total={siteMapItems.length}
                                filtered={filteredResults.length}
                                className={'pe-2'}
                            />
                            <Button variant="success" className={'me-2'} onClick={() => exports.exportToExcel(filteredResults, [{ field: 'url' }])}>
                                <i className="fa-solid fa-file-excel pe-2"></i>
                                Export Excel<Badge bg="light" className={'ms-2'}><span className={'text-dark'}>{filteredResults.length}</span></Badge>
                            </Button>
                        </div>
                        <p className={'mb-0 pe-3'}><a href={'https://www.sevencorners.com/sitemap.xml'} target={'_blank'}>sitemap.xml</a></p>
                        <p className={'mb-0'}><a href={'https://www.sevencorners.com/sitemap/sitemap-index.xml'} target={'_blank'}>sitemap.gzip</a></p>
                    </Col>
                    <Col className={'d-flex justify-content-end'}>
                        <div>
                            <Button variant="secondary" className={'me-2'} onClick={() => syncSiteMapData()}>
                                <i className="fa-solid fa-rotate pe-2"></i>
                                Sync
                            </Button>
                            <ButtonWithModel
                                icon={<i className="fa-solid fa-paste pe-2"></i>}
                                label={"Paste"}
                                title={<><i className="fa-solid fa-paste pe-2"></i>Paste Site Map</>}
                                size={'lg'}
                            >
                                <Col>
                                    <Row>
                                        <Col>
                                            <CodeEditor
                                                type={'html'}
                                                onChange={(value) => setRawSiteMapText((value) ? value : '')}
                                                defaultValue={rawSiteMapText}
                                                height={'60vh'}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </ButtonWithModel>
                        </div>
                    </Col>
                </Row>
                <Row className="pt-4">
                    {
                        (loading) ?
                            <Col className={'w-100 d-flex justify-content-center align-items-center'} style={{ height: '50vh' }}>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    role="status"
                                    aria-hidden="true"
                                    style={{ width: '150px', height: '150px', borderWidth: '10px', color: 'grey' }}
                                />
                            </Col>
                            :
                            <CardGrid
                                data={filteredResults}
                                as={CustomCard}
                            />
                    }

                </Row>
            </Col>
        </>
    )
}