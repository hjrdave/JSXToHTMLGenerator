import React from 'react';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import stringifyObject from 'stringify-object';
import MapToItem from '../../atoms/MapToItem';

interface Props {
    mapFrom: { [key: string]: any };
    mapToList: string[];
    onChange: (mappedObj: string) => void;
};

export default function ListMapper({ mapFrom, mapToList, onChange }: Props) {

    const [mappedObj, setMappedObj] = React.useState<{ [key: string]: string }>({});
    const [flattenedMapFrom, setFlattenedMapFrom] = React.useState<string[]>([]);

    //flatten multi level object to string array to describe properties in dot notation
    const flattenObj = (obj: { [key: string]: any }) => {
        const entryArr = Object.entries(obj);
        let listAll: string[] = [];
        entryArr.map((item1) => {
            if (typeof item1[1] !== 'object') {
                listAll = [...listAll, item1[0]]
            } else {
                const entryArr2 = Object.entries(item1[1]);
                entryArr2.map((item2) => {
                    if (typeof item2[1] !== 'object') {
                        listAll = [...listAll, `${item1[0]}.${item2[0]}`]
                    }
                    else {
                        const entryArr3 = Object.entries(item2[1] as [string, any]);
                        entryArr3.map((item3) => {
                            if (typeof item3[1] !== 'object') {
                                listAll = [...listAll, `${item2[0]}.${item3[0]}`]
                            }
                            else {
                                console.warn('Object Mapper does not support more then three levels');
                            }
                        });
                    }
                });
            }
        });
        return listAll;
    }

    //Set flattened obj
    React.useEffect(() => {
        setFlattenedMapFrom(flattenObj(mapFrom));
    }, [mapFrom]);

    //run onchange to pass mappedObj
    React.useEffect(() => {
        onChange(`const mappedObj = ${stringifyObject(mappedObj).replaceAll("'", "")}`);
    }, [mappedObj]);

    return (
        <>
            <div className={'w-100'}>
                <Col>
                    <Row>
                        <Col className={'pb-3'}>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="secondary">MapToList: {mapToList.length}</Button>
                                <Button variant="secondary">MapFromList: {flattenedMapFrom.length}</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    {
                        flattenedMapFrom.map((item, index) => (
                            <React.Fragment key={index}>
                                <Row>
                                    <Col>
                                        <MapToItem
                                            mapFromValue={item}
                                            mapToList={mapToList}
                                            selectedMapToItems={mappedObj}
                                            onChange={(obj) => {
                                                const newObj = Object.entries(obj);
                                                const noPropsWithSharedValues = Object.fromEntries(Object.entries(mappedObj).filter((item) => (newObj[0][1] !== item[1])));
                                                setMappedObj({ ...noPropsWithSharedValues, ...obj });
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </React.Fragment>
                        ))
                    }
                </Col>
            </div>
        </>
    )
}