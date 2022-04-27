import Kiwi from "./kiwi.png";
import "./kiwi-image.scss";
export default class KiwiImage {
  render() {
    const body = document.querySelector("body");
    const img = document.createElement("img");
    img.src = Kiwi;
    img.width = 200;
    img.height = 200;
    img.classList.add("kiwi-img");
    body.appendChild(img);
  }
}
