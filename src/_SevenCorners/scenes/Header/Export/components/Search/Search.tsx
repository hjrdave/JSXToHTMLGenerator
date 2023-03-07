import React from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap';
import Link from '../../../../../components/atoms/Link';
import styles from "../../Header.module.scss";

interface Props {

};

export default function Search({ }: Props) {

    const controlID = 'header-search-control';
    const buttonID = 'header-search-btn';

    return (
        <>
            <InputGroup>
                <Form.Control
                    id={controlID}
                    placeholder="Type to Search"
                    aria-label="Type to Search"
                    autoFocus
                    className={'py-2'}
                />
                <Button
                    id={buttonID}
                    className={styles.searchBtn}
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