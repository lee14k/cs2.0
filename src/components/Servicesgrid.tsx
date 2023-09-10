import { A } from "solid-start";

export default function Servicesgrid() {
  return (
    <div>
      <div class="gridwrapper">
        <div class="griditem">
          <h2 class="gridhead ">Mediation</h2>
          <A href="/mediation">
            <button class="gridbutton">Read more</button>
          </A>
        </div>
        <div class="griditem miditem">
          <h2 class="gridhead">Organizational Culture Assessment</h2>
          <A href="/organizationalculture">
            <button class="gridbutton">Read more</button>
          </A>
        </div>
        <div class="griditem">
          <h2 class="gridhead">Arbitration</h2>
          <A href="/arbitration">
            <button class="gridbutton">Read more</button>
          </A>
        </div>
    
   
      </div>
    </div>
  );
}
