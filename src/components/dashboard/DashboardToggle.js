import React, { useCallback } from 'react'
import { Alert, Button, Drawer, Icon} from 'rsuite';
import Dasboard from '.';
import { useModalState } from '../../misc/custom-hooks';
import { auth } from '../../misc/firebase';
import {useMediaQuery} from '../../misc/custom-hooks';
 

const DashboardToggle = () => {
    const {isOpen,close,open} = useModalState();
    const isMobile = useMediaQuery('(max-width:992px)');

    const onSignOut = useCallback(()=> {
        auth.signOut();

        Alert.info('Signed out', 4000);

        close();
    }, [close])

    return (
        <>
         <Button block color="blue" onClick={open}>
             <Icon icon ="dashboard" /> Dashboard
         </Button>
         <Drawer full={isMobile} show={isOpen} onHide={close} placement="left">
         <Dasboard onSignOut={onSignOut}/>
         </Drawer>
        </>
    );
};

export default DashboardToggle;
