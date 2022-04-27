import "./heading.css";
import _ from "lodash";

export default class Heading {
  render(heading) {
    const body = document.querySelector("body");
    const h1 = document.createElement("h1");
    h1.classList.add("heading-class");
    h1.innerHTML = _.upperFirst(heading);
    body.appendChild(h1);
  }
}
