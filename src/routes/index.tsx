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
  ), url('/picture.jpg');
  background-size: cover;
`;

const overlayBeforeStyle = `
  content: "";
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const textStyles = `
  position: relative;
  z-index: 2;
  -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
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

  const headerClass = `header `;
  const overlayBeforeClass = `overlay-before`;
  const h1Class = `text-6xl font-bold text-white`
  const h1Special = `text-6xl font-bold text-green`
  const pClass = `pt-10`;

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
        <div class="frostedglasshead"> <h1 class={h1Class}>
Got a problem? We'll help you solve it. 
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
      </div>
      <Picture/>
      <div class="slideboxwrap">
      <div class="custom-shape-divider-top-1689460367">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
    </svg>
</div>

      <div class="slideboxcontainer">
      <Slidebox  title="Mediation"/>
      <Slidebox   title="Conflict Resolution"galleryPosition="right"/>
      <div class="custom-shape-divider-bottom-1689460589">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
    </svg>
</div>
      </div>
   
   
    </div>
    <Footer/>
    </div>
  );
}
