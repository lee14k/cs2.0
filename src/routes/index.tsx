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
    rgba(51, 121, 9, 0.4) 0%,
    rgba(90, 173, 39, 0.4) 45%,
    rgba(255, 255, 255, 0.5) 91%
  ), url('/cstab1.jpg');
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
 
  margin-left:20px;
`;

export default function Home() {
  const location = useLocation();

  const active = (path: string) =>
    path === location.pathname
      ? "text-emerald-600 mx-1.5 sm:mx-6"
      : "text-black mx-1.5 sm:mx-6";

  const headerClass = `header `;
  const overlayBeforeClass = `overlay-before`;
  const h1Class = `text-6xl font-bold text-white problem`;
  const h1Special = `text-6xl font-bold text-green`;
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
        <div>
          <div class="frostedglasshead fade-in">
            {" "}
            <h1 class={h1Class}>
              Finding creative solutions to hard to solve problems{" "}
            </h1>
          </div>
          <p class={pClass}>
            <A class="contact-button" href="/contact">
              Contact Us
            </A>
          </p>
        </div>
      </div>
      <Mid />

      <Footer />
    </div>
  );
}
