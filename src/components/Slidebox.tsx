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
  display: flex;
  flex-direction: column;
`;

const boxWrapStyles = `
  display: flex;
`;

const galleryStyles = `
  flex: 1;
  margin-right: 20px;
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
          }
          .gallery {
            ${galleryStyles}
          }
        `}
      </style>

      <div class="slidebox-with-gallery">
        {galleryOnRight && (
          <div class="gallery">
<img src="/services.jpeg"/>
<img src="/gal2.jpeg"/>
<img src="/gal3.jpeg"/>
<img src="/gal4.jpeg"/>

  
  
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
          <div class="gallery">
            <h1>hi</h1>
          </div>
        )}
      </div>
    </div>
  );
}
