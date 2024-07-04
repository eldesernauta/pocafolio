
import { Helmet } from 'react-helmet';

const MetaTags = () => {
    return (
        <Helmet>
            {/* Meta tags comunes */}
            <meta name="description" content="Mi portafolio como diseñador UX/UI" />

            {/* Open Graph meta tags */}
            <meta property="og:title" content="Incrustes UX/UI Designer" />
            <meta property="og:description" content="Mi portafolio como diseñador UX/UI" />
            <meta property="og:image" content="../../img/foto-navbar.jpg" />
            <meta property="og:url" content="https://incrustesdesign.com" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Incrusted" />

            {/* Twitter meta tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Incrustes UX/UI Designer" />
            <meta name="twitter:description" content="Mi portafolio como diseñador UX/UI" />
            <meta name="twitter:image" content="../../img/foto-navbar.jpg" />

            {/* Meta tags para SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="author" content="eldesernauta" />
            <link rel="canonical" href="https://incrustesdesign.com" />

            {/* Favicon */}
            <link rel="icon" href='../../img/loader.gif' />

            {/* Apple Touch Icon */}
            <link rel="apple-touch-icon" sizes="180x180" href="../../img/separator.png" />

            {/* Android Chrome Icon */}
            <link rel="icon" type="image/png" sizes="192x192" href="../../img/separator.png" />
        </Helmet>
    );
};

export default MetaTags;
