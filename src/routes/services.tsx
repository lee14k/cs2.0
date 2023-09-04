import HeaderImage from "~/components/Headerimage";
import Servicesgrid from "~/components/Servicesgrid";
import Footer from "~/components/Footer";

export default function Services () {
    return (
        <div>
      <HeaderImage heading="Services" page="services" />
      <Servicesgrid/>
      <Footer/>
        </div>
    )
}