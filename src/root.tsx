import { Suspense, Show, createEffect, createSignal, onCleanup} from "solid-js";
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  Link,
} from "solid-start";
import "./root.css";
import Navbar from "./components/Navbar";


export default function Root() {
    const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
    { path: '/Neutrals', label: 'Neutrals' },
    { path: '/Expertise', label: 'Expertise' },
  ];


  


  
  return (
    <Html lang="en">
      <Head>
        <Title>Conflict Solutions</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏛️</text></svg>"/>

      </Head>
      <Body>
  <Navbar/>

            <Routes>
              <FileRoutes />
            </Routes>
      </Body>
    </Html>
  );
}