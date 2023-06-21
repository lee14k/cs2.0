import { createSignal } from "solid-js";
import { useLocation } from "solid-start";
import { A } from "solid-start";
import Slidebox from "~/components/Slidebox";
import Footer from "~/components/Footer";
import Picture from "~/components/Picture";
const gradientOverlayStyle = `
  position: relative;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(90, 173, 39, 0.5) 45%,
    rgba(51, 121, 9, 0.5) 91%
  ), url('/unbw.jpg');
  background-size: cover;
`;

const overlayBeforeStyle = `
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const textStyles = `
  position: relative;
  z-index: 2;
`;

const buttonStyles = `
  background-color: #B2BB91;
  color: #fff;
  padding: 10px 20px;
  border: solid #99A66D;
  border-radius: 4px;
  cursor: pointer;
`;

export default function Home() {
  const location = useLocation();

  const active = (path: string) =>
    path === location.pathname ? "text-blue-600 mx-1.5 sm:mx-6" : "text-black mx-1.5 sm:mx-6";

  const headerClass = `header`;
  const overlayBeforeClass = `overlay-before`;
  const h1Class = `text-4xl ${textStyles}`;
  const pClass = active("/contact");

  return (
    <div>
      <div class={headerClass}>
        <style>
          {`
            .${headerClass} {
              ${gradientOverlayStyle}
            }

            .${overlayBeforeClass}::before {
              ${overlayBeforeStyle}
            }
            .contact-button {
              ${buttonStyles}
            }
          `}
        </style>
        <div class={overlayBeforeClass}></div>
        <h1 class={h1Class}>
          Got a problem? We'll solve it.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nihil
          quas eius est quia laudantium facere natus
        </p>
        <p class={pClass}>
          <A class="contact-button" href="/contact">
            Contact Us
          </A>
        </p>
      </div>
      <Picture/>
      <Slidebox  title="Mediation"/>
      <Slidebox   title="Conflict Resolution"galleryPosition="right"/>

      <Footer/>
    </div>
  );
}
