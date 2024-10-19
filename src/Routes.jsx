import Home from "./Screens/Index";
import About from "./Screens/About"
import Portfolio from "./Screens/Portfolio"
import Services from "./Screens/Services";

export const routes = [
    {
        screen: <Home/>,
        path: "/",
        label: "Home",
    },
    {
        screen: <About/>,
        path: "/about",
        label: "About",
    },
    {
        screen: <Portfolio/>,
        path: "/portfolio",
        label: "Portfolio",
    },
    {
        screen: <Services/>,
        path: "/services",
        label: "Services",
    },
] 