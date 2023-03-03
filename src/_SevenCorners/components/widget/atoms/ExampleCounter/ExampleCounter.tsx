import React from 'react';
import styles from './ExampleCounter.module.scss';

interface Props {
    message?: string;
}
export default function ExampleCounter({ message }: Props) {

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
        }, 1000);
    }, [count]);

    return (
        <>
            <div className={`p-3 d-flex flex-column align-items-center`}>
                <h4>Example Counter</h4>
                <p><strong>Message:</strong> {message}</p>
                <p className={styles.count}>{count}</p>
            </div>
        </>
    )
}