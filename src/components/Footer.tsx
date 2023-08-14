import { createSignal } from "solid-js";
import { useLocation } from "solid-start";
import { A } from "solid-start";
import { Motion } from "@motionone/solid";
export default function Footer() {
  return (
    <div class="footer">
      <div class="footcontent">
        <div class="officewrap text-2xl">
          <h4>Office</h4>
          <ul>
            <li>755 Baywood Dr.</li>
            <li>Suite 185</li>
            <li>Petaluma, California 94954</li>
          </ul>
        </div>
        <div class="contactwrap">
          <A class="contact-button footerbutton" href="/contact">
            Contact Us
          </A>
          <p class="  text-2xl pt-10">email@email.com</p>
        </div>
        <div class="text-2xl">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Legal Disclaimer</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
