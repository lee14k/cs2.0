import { createSignal } from "solid-js";
import { useLocation } from "solid-start";
import { A } from "solid-start";
import { Motion } from "@motionone/solid";

const buttonStyles = `
  background-color: #B2BB91;
  color: #fff;
  padding: 10px 20px;
  border: solid #99A66D;
  border-radius: 4px;
  cursor: pointer;
`;

const boxStyles = `
grid-column: 1 / 2;
`;

const boxWrapStyles = `
`;

const galleryStyles = `
  margin-right: 20px;
  position: relative;
  grid-column: 2 / 3;
`;

const overlayStyles = `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), white);
  pointer-events: none;
`;

const headerStyles = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

const galleryWrap = `
display:flex;
`;

export default function Slidebox({ title, galleryPosition = "left" }: {title:string, galleryPosition?:string}) {
  const galleryOnRight = galleryPosition === "right";

  return (
    <div class="bodyslide">
      <style>
        {`
          .contact-button {
            ${buttonStyles}
          }
          .slidebox {
            ${boxStyles}
          }
          .slidebox-with-gallery {
            ${boxWrapStyles}
            ${galleryWrap}
          }
          .gallery {
            ${galleryStyles}
          }
          .gallery-overlay {
            ${overlayStyles}
          }
          .gallery-header {
            ${headerStyles}
          }
          .bodyslide {
            padding-bottom: 50px;
          }
        `}
      </style>

      <div class="slidebox-with-gallery">
        {galleryOnRight && (
          <div class="gallerywrap">
            <div class="gallery">
              <div class="gallery-overlay"></div>
              <h3 class="gallery-header">Contact us</h3>
              <img src="/services.jpeg"/>
              <img src="/gal2.jpeg"/>
              <img src="/gal3.jpeg"/>
              <img src="/gal4.jpeg"/>
            </div>
          </div>
        )}

        <div class={`slidebox ${galleryOnRight ? "order-2" : ""}`}>
          <h2 class="text-4xl">{title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            ipsam iste eos! Voluptas, possimus dolores? Repellendus, earum quam
            labore optio, debitis illo corrupti non animi explicabo ipsa, nulla
            dicta amet?
          </p>
          <A class="contact-button" href="/services">
            Learn More
          </A>
        </div>

        {!galleryOnRight && (
         <div class="gallerywrap">
         <div class="gallery">
           <div class="gallery-overlay"></div>
           <h3 class="gallery-header">Contact us</h3>
           <img src="/services.jpeg"/>
           <img src="/gal2.jpeg"/>
           <img src="/gal3.jpeg"/>
           <img src="/gal4.jpeg"/>
         </div>
       </div>
        )}
      </div>
    </div>
  );
}
