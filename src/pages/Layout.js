import { useState, useEffect } from 'react';

import { Outlet } from "react-router-dom";

import Loading from '../components/Loading/loading';
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

// If you use CSS/SCSS vs. styled components
import "../index.css";

function Layout() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <Header />

            {/* An <Outlet> renders whatever child route is currently active in App.js */}
            <Outlet className="scrollbar max-w-[100vw] overflow-hidden" />

            <Footer />
        </div>
    );
}

export default Layout;