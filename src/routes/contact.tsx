import { A } from "solid-start";
import HeaderImage from "~/components/Headerimage";
import ContactUs from "~/components/ContactUs";
import Footer from "~/components/Footer"

export default function Contact() {
  return (
   <div>
    <HeaderImage heading="Contact" page="contact" />
<ContactUs />
<Footer/>
   </div>
  );
}
