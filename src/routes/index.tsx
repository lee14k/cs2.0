import { createSignal } from "solid-js";
import { useLocation } from "solid-start";
import { A } from "solid-start";
import Slidebox from "~/components/Slidebox";
import Footer from "~/components/Footer";
import Picture from "~/components/Picture";
import Mid from "~/components/Mid";
const gradientOverlayStyle = `
  position: relative;
  background-image: linear-gradient(
    90deg,
    rgba(51, 121, 9, 0.7) 0%,
    rgba(90, 173, 39, 0.7) 45%,
    rgba(255, 255, 255, 0.7) 91%
  ), url('/conflict.jpeg');
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


const buttonStyles = `
  background-color: #B2BB91;
  color: #fff;
  padding: 10px;
  border: solid #99A66D;
  border-radius: 4px;
  cursor: pointer;
  -webkit-box-shadow: 10px 15px 20px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 15px 20px 0px rgba(0,0,0,0.75);
box-shadow: 10px 15px 20px 0px rgba(0,0,0,0.75);
  margin-left:20px;
`;



export default function Home() {
  const location = useLocation();

  const active = (path: string) =>
    path === location.pathname ? "text-blue-600 mx-1.5 sm:mx-6" : "text-black mx-1.5 sm:mx-6";

  const headerClass = `header `;
  const overlayBeforeClass = `overlay-before`;
  const h1Class = `text-6xl font-bold text-white problem`
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
Got a problem? Let's solve it. 
        </h1>
       
        <p class={pClass}>
          <A class="contact-button" href="/contact">
            Contact Us
          </A>
        </p>
        </div>
      </div>
      <Picture/>

     
   <Mid/>
   
    <Footer/>
    </div>
  );
}
