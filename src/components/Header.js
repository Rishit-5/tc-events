//import useState hook to create menu collapse state
import React, { useState, useEffect} from "react";
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
import {BsBook} from "react-icons/all";
import {GrTicket} from "react-icons/all";
import {VscAccount} from "react-icons/all";
import {GoSearch} from "react-icons/all";


//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router";



const Header = () => {

    const location = useLocation();

    // useEffect(function() {
    //     const tempUrl = "http://localhost:3000"
    //     switch (window.URL) {
    //         case tempUrl+"/":
    //             document.getElementById("Home").style.backgroundColor = "red"
    //             break;
    //         case tempUrl+"/book":
    //             document.getElementById("Book").style.backgroundColor = "red"
    //             break;
    //         case tempUrl+"/tickets":
    //             break;
    //         case tempUrl+"/search":
    //             break;
    //         case tempUrl+"/account":
    //             break;
    //     }
    // })

    function resetColors() {
        document.getElementById("Home").style.backgroundColor = "#181818"
        document.getElementById("Book").style.backgroundColor = "#181818"
        document.getElementById("Ticket").style.backgroundColor = "#181818"
        document.getElementById("Search").style.backgroundColor = "#181818"
        document.getElementById("Account").style.backgroundColor = "#181818"

    }

    React.useEffect(() => {
        const tempUrl = "http://localhost:3000"
        resetColors()

        switch (window.location.href) {
            case tempUrl+"/":
                document.getElementById("Home").style.backgroundColor = "#4a4dff"
                console.log("home")
                break;
            case tempUrl+"/book":
                document.getElementById("Book").style.backgroundColor = "#4a4dff"
                break;
            case tempUrl+"/tickets":
                document.getElementById("Ticket").style.backgroundColor = "#4a4dff"
                break;
            case tempUrl+"/search":
                document.getElementById("Search").style.backgroundColor = "#4a4dff"
                break;
            case tempUrl+"/account":
                document.getElementById("Account").style.backgroundColor = "#4a4dff"
                break;
        }
        console.log('Location changed');
    }, [location]);
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(true)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <>
            <div id="header" >
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse} onMouseEnter={menuIconClick} onMouseLeave={menuIconClick}>
                    <SidebarHeader>
                        <div className="text-white">
                            {/* small and big change using menucollapse state */}
                            <img alt = "logo" src = {Logo}/>
                        </div>
                        <br/>

                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem id = "Home" active={false} icon={<FiHome />}>
                                <NavLink to ="/" activeClassName="is-active" exact ={true}/>Home
                            </MenuItem>
                            <MenuItem id = "Book" icon={<BsBook />}>
                                <NavLink to ="/book" activeClassName="is-active"/>Book Events
                            </MenuItem>

                            <MenuItem id = "Ticket" icon={<GrTicket />}>
                                <NavLink to ="/tickets" activeClassName="is-active"/>Get Tickets
                            </MenuItem>


                            <MenuItem id = "Search" icon={<GoSearch />}>
                                <NavLink to ="/search" activeClassName="is-active"/>Search

                            </MenuItem>
                            <MenuItem id = "Account" icon={<VscAccount />}>
                                <NavLink to ="/account" activeClassName="is-active"/>Account
                            </MenuItem>
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
