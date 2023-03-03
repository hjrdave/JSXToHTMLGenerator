import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

interface Props {
    onChange?: (screenSize: string) => void;
};

export default function BreakpointBtnGRoup({ onChange }: Props) {

    const [deviceType, setDeviceType] = React.useState<'mobile-xs' | 'mobile' | 'tablet' | 'desktop'>('desktop');

    React.useEffect(() => {
        // if (onChange) {
        //     onChange((deviceType === 'desktop') ? '' : (deviceType === 'tablet') ? '768px' : (deviceType === 'mobile') ? '576px' : (deviceType === 'mobile-xs') ? '600px' : '')
        // }
    }, [deviceType]);

    return (
        <>
            <ButtonGroup className="pe-2">
                <Button variant="secondary" active={(deviceType === 'mobile') ? true : false} onClick={() => setDeviceType('mobile')}>
                    <i className={`fa-solid fa-mobile-screen`}></i>
                </Button>
                <Button variant="secondary" active={(deviceType === 'tablet') ? true : false} onClick={() => setDeviceType('tablet')}>
                    <i className={`fa-solid fa-tablet-screen-button`}></i>
                </Button>
                <Button variant="secondary" active={(deviceType === 'desktop') ? true : false} onClick={() => setDeviceType('desktop')}>
                    <i className={`fa-solid fa-desktop`}></i>
                </Button>
            </ButtonGroup>
        </>
    )
}