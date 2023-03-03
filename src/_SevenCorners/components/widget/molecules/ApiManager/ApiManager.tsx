import React from 'react';
import useApiManager from './use-api-manager';

interface Props {
    enableAccount?: boolean;
    enableLookup?: boolean;
    enablePurchase?: boolean;
    enableQuickQuote?: boolean;
};

export default function ApiManager({ enableAccount, enableLookup, enablePurchase, enableQuickQuote }: Props) {

    const { Account } = useApiManager();

    return (
        <>
            {/**Each Data Comp should have the specific api fetching logic in it */}
            {
                (enableAccount) ? <Account.DataComp /> : null
            }
            {
                (enableLookup) ? <p className={'d-none'}>Call Lookup API</p> : null
            }
            {
                (enablePurchase) ? <p className={'d-none'}>Call Purchase API</p> : null
            }
            {
                (enableQuickQuote) ? <p className={'d-none'}>Call QuickQuote API</p> : null
            }
        </>
    )
}