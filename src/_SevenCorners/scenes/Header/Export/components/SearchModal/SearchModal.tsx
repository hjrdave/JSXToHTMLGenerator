import React from 'react';
import styles from "../../Header.module.scss";

interface Props {
    children?: JSX.Element;
}
export default function SearchModal({ children }: Props) {

    return (
        <>
            <div className="modal fade" id="headerSearchModal" data-bs-focus="true" tabIndex={-1} aria-labelledby="headerSearchModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className={`modal-body ${styles.searchModal}`}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}