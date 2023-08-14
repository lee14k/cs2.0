import { A } from "solid-start";
import HeaderImage from "~/components/Headerimage";
import Aboutme from "~/components/Aboutme";
import Footer from "~/components/Footer";
export default function About() {
  return (
    <div>
      <HeaderImage heading="About" page="about" />
      <Aboutme/>
      <Footer/>
    </div>   
  );
}
