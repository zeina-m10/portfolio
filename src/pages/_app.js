// pages/_app.js
import '../components/Navbar.module.css'; // keep if you already import this (optional)
import '../styles/globals.css';
import { useEffect } from 'react';
import Head from 'next/head'; // ✅ import Head

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // enable smooth scrolling site-wide
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <>
      <Head>
        <title>Zeina Mohamed</title>
        <meta
          name="description"
          content="Portfolio of Zeina Mohamed - UI/UX Designer"
        />
        <link rel="icon" href="/icons/bubbles.svg" /> {/* ✅ your bubble icon */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
