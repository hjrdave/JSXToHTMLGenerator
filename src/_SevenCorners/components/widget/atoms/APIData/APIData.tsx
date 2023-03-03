import React from 'react';
import useFetch from 'react-cork/use-fetch';

interface Props {
    forwardRef: React.Ref<HTMLDivElement>;
    url: string;
    dataAttr: string;
};

export default function APIData({ forwardRef, url, dataAttr }: Props) {

    const { response } = useFetch(url, {
        fetchOnMount: true
    });
    const [data, setData] = React.useState('[]');

    React.useEffect(() => {
        setData(JSON.stringify(response));
    }, [response]);

    return (
        <>
            <div
                ref={forwardRef}
                id={dataAttr}
                className={'d-none'}
                {...{ [dataAttr]: data }}
            >
            </div>
        </>
    )
}    
