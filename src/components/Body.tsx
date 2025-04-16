import { Outlet } from 'react-router';
import { SideBar } from '.';

const Body = () => {
    return (
        <div className="flex">
            <SideBar />
            {/* <MainContainer /> */}
            <Outlet />
        </div>
    );
};

export default Body;
