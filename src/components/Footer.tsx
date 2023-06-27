import { createSignal } from "solid-js";
import { useLocation } from "solid-start";
import { A } from "solid-start";
import { Motion } from "@motionone/solid";
export default function Footer () {
    return (
        <div class="footer">
    <div>
            <h4>Office Name</h4>
                <ul>
                    <li>Address line 1</li>
                    <li>Address line 2</li>
                    <li>Address line 3</li>


                </ul>
    </div>

    <div>
        <ul>
            <li>Legal Disclaimer</li>
            <li>Privacy Policy</li>

        </ul>
  
    </div>
        </div>
    )
}