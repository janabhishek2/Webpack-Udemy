import "./heading.css";

export default class Heading {
  render() {
    const body = document.querySelector("body");
    const h1 = document.createElement("h1");
    h1.classList.add("heading-class");
    h1.innerHTML = "Hello World - Heading";
    body.appendChild(h1);
  }
}
