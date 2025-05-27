import Home from "./Screens/Index";
import About from "./Screens/About"
import Portfolio from "./Screens/Portfolio"
import Services from "./Screens/Services";
import { FaAddressCard, FaHome } from "react-icons/fa";
import { IoBriefcaseSharp } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";

export const routes = [
    {
        screen: <Home/>,
        path: "/",
        label: "Home",
        icon : <FaHome size={30} className="text-primaryColor" />
    },
    {
        screen: <About/>,
        path: "/about",
        label: "About",
        icon: <FaAddressCard size={30} className="text-primaryColor" />

    },
    {
        screen: <Portfolio/>,
        path: "/portfolio",
        label: "Portfolio",
        icon: <IoBriefcaseSharp size={30} className="text-primaryColor"/>
    },
    {
        screen: <Services/>,
        path: "/services",
        label: "Services",
        icon: <MdMiscellaneousServices size={30} className="text-primaryColor"/>
    },
] 