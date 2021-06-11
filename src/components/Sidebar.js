import React, { useEffect, useRef, useState } from 'react'
import ChatRoomList from './rooms/ChatRoomList';
import { Divider } from 'rsuite';
import { CreateRoomBtnModal } from './dashboard/CreateRoomBtnModal';
import DashboardToggle from './dashboard/DashboardToggle';

const Sidebar = () => {
    const topSidebarRef = useRef();
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (topSidebarRef.current) {
            setHeight(topSidebarRef.current.scrollHeight);
        }
    }, [topSidebarRef]);


    return (
        <div className="h-100 pt-2">
            <div>
                <DashboardToggle />
                <CreateRoomBtnModal />
                <Divider>Join conversation</Divider>
            </div>

            <ChatRoomList aboveElHeight={height}/>
            
        </div>
    )
}

export default Sidebar;
