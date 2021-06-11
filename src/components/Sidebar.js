import React from 'react'
import { CreateRoomBtnModal } from './dashboard/CreateRoomBtnModal';
import DashboardToggle from './dashboard/DashboardToggle';

const Sidebar = () => {
    return (
        <div className="h-100 pt-2">
            <div>
                <DashboardToggle />
                <CreateRoomBtnModal />
            </div>
            bottom
            
        </div>
    )
}

export default Sidebar;
