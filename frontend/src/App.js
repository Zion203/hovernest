import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Programs from "./pages/Programs";
import Research from "./pages/Research";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Internships from "./pages/Internships";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Admin from "./pages/Admin";

// Analytics initialization
const initializeAnalytics = () => {
  // Google Analytics 4
  const GA4_ID = process.env.REACT_APP_GA4_ID;
  if (GA4_ID && GA4_ID !== 'G-XXXXXXXXXX') {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA4_ID);
  }

  // Meta Pixel
  const META_PIXEL_ID = process.env.REACT_APP_META_PIXEL_ID;
  if (META_PIXEL_ID && META_PIXEL_ID !== 'XXXXXXXXXX') {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }
};

function App() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/research" element={<Research />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
