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


export default function Root() {

  function applyGlobalFont(fontUrl: string): void {
    const style = document.createElement('style');
    style.textContent = `@import url('${fontUrl}'); body { font-family: 'Montserrat', sans-serif; }`;
    document.head.appendChild(style);
  
    // Cleanup function to remove the style element when the component is unmounted
    onCleanup(() => {
      document.head.removeChild(style);
    });
  }
  
  const location = useLocation();
  const active = (path: string) => (path === location.pathname ? 'border-emerald-400' : 'border-transparent');

  const [isMobile, setIsMobile] = createSignal<boolean>(false);
  const [showMobile, setShowMobile] = createSignal<boolean>(false);

  createEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const toggleHamburger = () => {
    setShowMobile(!showMobile());
  };
  const fontUrl = 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap';
  applyGlobalFont(fontUrl);
  return (
    <Html lang="en">
      <Head>
        <Title>Conflict Solutions</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏛️</text></svg>"/>

      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
          <nav class="flex">
              <ul class="container flex justify-center text-2xl text-emerald-700">
                {isMobile() ? (
                  <>
                    <li class={`border-b-2 mx-1.5 sm:mx-6 logo`} onClick={toggleHamburger}>
                      <A href="/">
                        <img src="/newlogov2.png" />
                      </A>
                    </li>
                    <Show when={showMobile()}>
                      <li
                        class={`hamburger-icon ${showMobile() ? 'open' : ''}`}
                        onClick={toggleHamburger}
                      >
                        <div class="line" />
                        <div class="line" />
                        <div class="line" />
                      </li>
                    </Show>
                    <Show when={showMobile()}>
                      <li class={`border-b-2 ${active('/')} mx-1.5 sm:mx-6`}>
                        <A href="/">Home</A>
                      </li>
                      <li class={`border-b-2 ${active('/about')} mx-1.5 sm:mx-6`}>
                        <A href="/about">About</A>
                      </li>
                      <li class={`border-b-2 ${active('/services')} mx-1.5 sm:mx-6`}>
                        <A href="/services">Services</A>
                      </li>
                      <li class={`border-b-2 ${active('/contact')} mx-1.5 sm:mx-6`}>
                        <A href="/contact">Contact</A>
                      </li>
                    </Show>
                  </>
                ) : (
                  <>
                    <li class={`border-b-2 ${active('/')} mx-1.5 sm:mx-6`}>
                      <A href="/">Home</A>
                    </li>
                    <li class={`border-b-2 ${active('/about')} mx-1.5 sm:mx-6`}>
                      <A href="/about">About</A>
                    </li>
                    <li class={`border-b-2 mx-1.5 sm:mx-6 logo`} onClick={toggleHamburger}>
                      <A href="/">
                        <img src="/newlogov2.png" />
                      </A>
                    </li>
                    <li class={`border-b-2 ${active('/services')} mx-1.5 sm:mx-6`}>
                      <A href="/services">Services</A>
                    </li>
                    <li class={`border-b-2 ${active('/contact')} mx-1.5 sm:mx-6`}>
                      <A href="/contact">Contact</A>
                    </li>
                  </>
                )}
              </ul>
            </nav>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
      </Body>
    </Html>
  );
}