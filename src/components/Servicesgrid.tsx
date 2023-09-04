import { A } from "solid-start";

export default function Servicesgrid() {
  return (
    <div>
      <div class="gridwrapper">
        <div class="griditem">
          <h2 class="gridhead">Workplace Mediation</h2>
          <A href="/workplacemediation">
            <button class="gridbutton">Read more</button>
          </A>
        </div>
        <div class="griditem">
          <h2 class="gridhead">Culture Assessment</h2>
          <A href="/orgculture">
            <button class="gridbutton">Read more</button>
          </A>
        </div>
        <div class="griditem">
          <h2 class="gridhead">Bankruptcy Mediation</h2>
          <A href="/bankruptcy">
            <button class="gridbutton">Read more</button>
          </A>
        </div>
        <div class="griditem">
          <h2 class="gridhead">Contract Ombuds</h2>
          <A href="/contract">
            <button class="gridbutton">Read more</button>
          </A>
        </div>
        <div class="griditem">
          <h2 class="gridhead">Commercial Mediation</h2>
          <A href="/commercial">
            <button class="gridbutton">Read more</button>
          </A>
        </div>
      </div>
    </div>
  );
}
