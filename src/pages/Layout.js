import { Outlet } from "react-router-dom";

import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

// If you use CSS/SCSS vs. styled components
import "../index.css";

function Layout() {

    return (
        <div>
            <Header />

            {/* An <Outlet> renders whatever child route is currently active in App.js */}
            <Outlet className="scrollbar" />

            <Footer />
        </div>
    );
}

export default Layout;