import React from 'react';
import { IExport } from '../../interfaces';
import MegaMenu from '../MegaMenu';
// import styles from '../../Header.module.scss';

interface Props {
    megaMenu: IExport.MegaMenu;
    items: {
        text: string;
        path?: string;
        subItems?: {
            text: string;
            path: string;
        }[]
    }[];
};
export default function NavItems({ items, megaMenu }: Props) {

    return (
        <>
            <div className="nav-item dropdown">
                <button className="btn dropdown-toggle text-white px-0 px-lg-2 pt-2" data-bs-toggle="dropdown" aria-expanded="false">
                    {megaMenu.text}
                </button>
                <ul className="dropdown-menu p-0">
                    <MegaMenu items={megaMenu} />
                </ul>
            </div>
            {
                items?.map((item, index) => (
                    <React.Fragment key={index}>
                        {
                            (item.subItems) ?
                                <div className="nav-item dropdown">
                                    <button className="btn dropdown-toggle text-white px-0 px-lg-2 pt-2" data-bs-toggle="dropdown" aria-expanded="false">
                                        {item.text}
                                    </button>
                                    <ul className={`${'styles.dropdownMenu'} dropdown-menu`}>
                                        {
                                            item.subItems?.map((item, index) => (
                                                <React.Fragment key={index}>
                                                    <li><a className="dropdown-item" href={item.path}>{item.text}</a></li>
                                                </React.Fragment>
                                            ))
                                        }
                                    </ul>
                                </div> :
                                <li className="nav-item px-0 px-lg-2">
                                    <a className="nav-link text-white" href={item.path}>{item.text}</a>
                                </li>
                        }
                    </React.Fragment>
                ))
            }
        </>
    )
}