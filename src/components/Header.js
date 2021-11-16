//import useState hook to create menu collapse state
import React, { useState } from "react";
import Logo from "../logo.svg"

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


const Header = () => {

    const WEB_URL = "http://localhost:3000/"


    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(true)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <>
            <div id="header" onMouseEnter={menuIconClick} onMouseLeave={menuIconClick}>
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="text-white">
                            {/* small and big change using menucollapse state */}
                            <img alt = "logo" src = {Logo}></img>
                        </div>
                        <br/>

                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome />}>
                                Home
                            </MenuItem>
                            <div onClick={()=>{
                                window.location = WEB_URL+"book"
                            }}>
                            <MenuItem icon={<FaList />}>Category</MenuItem>
                            </div>
                            <div>
                            <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
            </div>
                            <div>
                            <MenuItem icon={<RiPencilLine />}>Author</MenuItem></div>
                            <div>
                            <MenuItem icon={<BiCog />}>Settings</MenuItem></div>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default Header;