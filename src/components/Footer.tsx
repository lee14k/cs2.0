import { createSignal } from "solid-js";
import { useLocation } from "solid-start";
import { A } from "solid-start";
import { Motion } from "@motionone/solid";
export default function Footer () {
    return (
        <div class="footer">
   
            
    <div class="footcontent">
        <div class="officewrap text-2xl">
            <h4>Office</h4>
                <ul>
                    <li>Address line 1</li>
                    <li>Address line 2</li>
                    <li>Address line 3</li>


                </ul>
             </div>
             <div class="contactwrap">
<h4 class="pb-10 text-2xl">We're here for you</h4>
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
    )
}

