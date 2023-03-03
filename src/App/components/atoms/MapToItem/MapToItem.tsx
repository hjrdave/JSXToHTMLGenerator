import React from 'react';
import { useNonInitialEffect, useInput } from 'react-cork';
import { InputGroup, Form, DropdownButton, Dropdown, Button, FormControl } from 'react-bootstrap';

interface Props {
    mapFromValue: string;
    mapToList: string[];
    selectedMapToItems: { [key: string]: string };
    onChange: (mapedObj: { [key: string]: string }) => void;
};

export default function MapToItem({ mapFromValue, mapToList, onChange, selectedMapToItems }: Props) {

    const [selectedMapTo, setSelectedMapTo] = React.useState('');
    const { value, bind } = useInput('');

    const searchList = (arr: string[], substr: string) => {
        const searchedArr = arr.filter((item) => ((substr.length === 0) ? true : item.toLowerCase().startsWith(substr.toLowerCase())));
        return searchedArr;
    };

    useNonInitialEffect(() => {
        if (selectedMapTo) {
            onChange({ [selectedMapTo]: mapFromValue });
        }
    }, [selectedMapTo]);

    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control disabled value={mapFromValue} onChange={() => null} />
                {
                    (selectedMapTo.length === 0) ? null :
                        <>
                            <Button variant={'secondary'}>
                                <i className="fa-solid fa-arrow-right"></i>
                            </Button>
                            <Form.Control disabled value={selectedMapTo} onChange={() => null} />
                        </>
                }
                <DropdownButton
                    variant="outline-secondary"
                    title={'Map To'}
                    align="end"
                >
                    <div className={'p-3'} style={{ borderBottom: '1px solid lightgrey' }}>
                        <FormControl type={'text'} size={"sm"} {...bind} />
                    </div>
                    <div style={{ maxHeight: '300px', minWidth: '400px', overflowX: 'hidden' }}>
                        {
                            searchList(mapToList, value).map((item, index) => (
                                <React.Fragment key={index}>
                                    <Dropdown.Item disabled={(Object.hasOwn(selectedMapToItems, item)) ? true : false} onClick={() => setSelectedMapTo(item)}>{item}</Dropdown.Item>
                                </React.Fragment>
                            ))
                        }
                    </div>
                </DropdownButton>

            </InputGroup>
        </>
    )
}