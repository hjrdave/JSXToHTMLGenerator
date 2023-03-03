import React from 'react';
import { InputGroup, SplitButton, Dropdown, Form } from 'react-bootstrap';
import { useDebounce, useNonInitialEffect, useInput } from 'react-cork';

interface Props {
    onChange?: (value: string) => void;
    searchBy: string[];
    onActiveSearch: (value: string) => void;
};

export default function MultiSearch({ onChange: _onChange, searchBy, onActiveSearch }: Props) {

    const { bind, value } = useInput('');
    const [activeSearch, setActiveSearch] = React.useState(searchBy[0]);
    const onChange = useDebounce((value: string) => {
        if (_onChange) {
            _onChange(value);
        }
    }, 300);

    useNonInitialEffect(() => {
        onChange(value as any);
    }, [value]);

    useNonInitialEffect(() => {
        onActiveSearch(activeSearch);
    }, [activeSearch]);

    return (
        <>
            <InputGroup className="mb-3">
                <SplitButton
                    variant="secondary"
                    title={<i className="fa-solid fa-magnifying-glass"></i>}
                >
                    <Dropdown.Header>Search By</Dropdown.Header>
                    <Dropdown.Divider />
                    {
                        searchBy?.map((item, index) => (
                            <Dropdown.Item
                                key={index}
                                active={(item === activeSearch) ? true : false}
                                onClick={() => setActiveSearch(item)}
                            >
                                {item}
                            </Dropdown.Item>
                        ))
                    }
                </SplitButton>
                <Form.Control
                    {...bind}
                    placeholder={`Search By ${activeSearch}`}
                />
            </InputGroup>
        </>
    )
}