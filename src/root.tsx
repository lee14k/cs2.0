import { Suspense, Show, createEffect, createSignal} from "solid-js";
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
} from "solid-start";
import "./root.css";


export default function Root() {
  const location = useLocation();
  const active = (path: string) => (path === location.pathname ? 'border-sky-600' : 'border-transparent');

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

  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <nav class="bg-emerald-800">
              <ul class="container flex items-center p-3 text-gray-200">
                <li class={`border-b-2 mx-1.5 sm:mx-6 logo`} onClick={toggleHamburger}>
                  <A href="/">
                    <img src="/cslogotransparent.png" />
                  </A>
                </li>
                {isMobile() && (
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
                )}
                <Show when={showMobile() || !isMobile()}>
                  <li class={`border-b-2 ${active('/')} mx-1.5 sm:mx-6`}>
                    <A href="/">Home</A>
                  </li>
                  <li class={`border-b-2 ${active('/about')} mx-1.5 sm:mx-6`}>
                    <A href="/about">About</A>
                  </li>
                  <li class={`border-b-2 ${active('/about')} mx-1.5 sm:mx-6`}>
                    <A href="/about">Services</A>
                  </li>
                  <li class={`border-b-2 ${active('/contact')} mx-1.5 sm:mx-6`}>
                    <A href="/contact">Contact Us</A>
                  </li>
                </Show>
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