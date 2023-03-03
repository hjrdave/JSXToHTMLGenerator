import React from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap';
import Link from '../../../../../components/atoms/Link';
// import styles from '../../Header.module.scss';

interface Props {

};

export default function Search({ }: Props) {

    const inputGroupID = 'header-search-container';
    const controlID = 'header-search-control';
    const buttonID = 'header-search-btn';

    return (
        <>
            <InputGroup id={inputGroupID} size="sm" className={'d-none'}>
                <Form.Control
                    id={controlID}
                    placeholder="Type to Search"
                    aria-label="Type to Search"
                    autoFocus
                    className={'py-2 py-lg-0'}
                />
                <Button
                    className={'styles.searchBtn'}
                    id={buttonID}
                >
                    <Link
                        path={'#'}
                    >
                        <i className="fa-solid fa-magnifying-glass text-white"></i>
                    </Link>
                </Button>
            </InputGroup>
        </>
    )
}