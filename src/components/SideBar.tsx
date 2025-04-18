import React from 'react';
import {
    HomeIcon,
    FlameIcon,
    FolderIcon,
    ClockIcon,
    ListVideoIcon,
    VideoIcon,
    BookIcon,
    ThumbsUpIcon,
    ChevronRightIcon,
} from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { Link } from 'react-router';

type SidebarItemProps = {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    hasDot?: boolean;
    isSidebarOpen: boolean;
};

type SubscriptionItemProps = {
    img: string;
    name: string;
    hasDot?: boolean;
};

const SideBar: React.FC = () => {
    const isSidebarOpen = useSelector((state: RootState) => state.app.isSidebarOpen);

    return (
        <div
            className={`fixed top-[60px] left-0  bg-white text-black p-4 overflow-y-auto text-sm shadow-sm z-50 ${
                isSidebarOpen ? 'w-[250px]' : 'w-20'
            }`}
        >
            {/* Top Section */}
            <div className="space-y-2">
                <Link to={'/'}>
                    <SidebarItem
                        icon={<HomeIcon />}
                        label="Home"
                        active
                        isSidebarOpen={isSidebarOpen}
                    />
                </Link>
                <SidebarItem icon={<FlameIcon />} label="Shorts" isSidebarOpen={isSidebarOpen} />
                <SidebarItem
                    icon={<FolderIcon />}
                    label="Subscriptions"
                    hasDot
                    isSidebarOpen={isSidebarOpen}
                />
            </div>

            <hr className="border-gray-300 my-3" />

            {/* You Section */}
            <div className="space-y-2">
                <SidebarItem
                    icon={<ChevronRightIcon />}
                    label="You"
                    active
                    isSidebarOpen={isSidebarOpen}
                />
                <SidebarItem icon={<ClockIcon />} label="History" isSidebarOpen={isSidebarOpen} />
                <SidebarItem
                    icon={<ListVideoIcon />}
                    label="Playlists"
                    isSidebarOpen={isSidebarOpen}
                />
                <SidebarItem
                    icon={<VideoIcon />}
                    label="Your videos"
                    isSidebarOpen={isSidebarOpen}
                />
                <SidebarItem
                    icon={<BookIcon />}
                    label="Your courses"
                    isSidebarOpen={isSidebarOpen}
                />
                <SidebarItem
                    icon={<ClockIcon />}
                    label="Watch later"
                    isSidebarOpen={isSidebarOpen}
                />
                <SidebarItem
                    icon={<ThumbsUpIcon />}
                    label="Liked videos"
                    isSidebarOpen={isSidebarOpen}
                />
            </div>

            {/* Subscriptions (Only show if sidebar is open) */}
            {isSidebarOpen && (
                <>
                    <hr className="border-gray-300 my-3" />
                    <div>
                        <h2 className="text-black font-semibold px-2 mb-2">Subscriptions</h2>
                        <SubscriptionItem
                            img="https://yt3.ggpht.com/ytc/AOPolaRzF0xWYfQ5GvmLt7J8Kn1n3GcA9ZTlZlD_Hli6TQ=s68-c-k-c0x00ffffff-no-rj"
                            name="Frontend Master"
                            hasDot
                        />
                        <SubscriptionItem
                            img="https://yt3.ggpht.com/yti/AGOGRCpnCDKXx2V_R4T7hv57MdDW6W7g1Zwz0GuLXtEbvQ=s88-c-k-c0x00ffffff-no-rj"
                            name="Hrithik Adhikary"
                        />
                        <SubscriptionItem
                            img="https://yt3.ggpht.com/ytc/AOPolaQzEfkeXuEKDEsZT-j8X4gWlMT57PBHcm0C6WeKXQ=s68-c-k-c0x00ffffff-no-rj"
                            name="BnfTV"
                            hasDot
                        />
                    </div>
                </>
            )}
        </div>
    );
};

const SidebarItem: React.FC<SidebarItemProps> = ({
    icon,
    label,
    active = false,
    hasDot = false,
    isSidebarOpen,
}) => (
    <div
        className={`flex items-center justify-between p-2 rounded-lg hover:bg-gray-200 cursor-pointer ${
            active ? 'bg-gray-300 font-medium' : ''
        }`}
    >
        <div className="flex items-center gap-4">
            <div className="text-black w-5">{icon}</div>
            {isSidebarOpen && <span>{label}</span>}
        </div>
        {hasDot && isSidebarOpen && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
    </div>
);

const SubscriptionItem: React.FC<SubscriptionItemProps> = ({ img, name, hasDot = false }) => (
    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
        <div className="flex items-center gap-4">
            <img src={img} alt={name} className="w-6 h-6 rounded-full" />
            <span>{name}</span>
        </div>
        {hasDot && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
    </div>
);

export default SideBar;
