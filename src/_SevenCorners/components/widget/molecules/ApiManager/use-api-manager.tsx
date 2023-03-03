import React from 'react';
import APIData from '../../atoms/APIData';

const useApiManager = () => {

    const accountRoute = 'https://jsonplaceholder.typicode.com/users';
    const accountAttr = 'data-sc-account';
    const accountRef = React.useRef(null);
    const setAccountData = (value: any) => {
        if (value !== undefined && value !== null) {
            const data = (typeof value === 'string') ? value : JSON.stringify(value);
            (accountRef?.current as any)?.setAttribute(accountAttr, data);
        }
    };
    const getAccountData = () => {
        const data = (accountRef?.current as any)?.getAttribute(accountAttr);
        return (typeof data === 'string') ? JSON.parse(data) : data;
    };

    const AccountData = () => (
        <APIData
            forwardRef={accountRef}
            url={accountRoute}
            dataAttr={accountAttr}
        />
    );

    const Account = {
        dataAttr: accountAttr,
        DataComp: AccountData,
        set: setAccountData,
        get: getAccountData
    }

    return {
        Account
    }

};

export default useApiManager;