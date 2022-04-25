import sib from "./sib.jpg";
import txt from "./text.txt";

export default function addImage() {
  const img = document.createElement("img");
  img.src = sib;
  img.width = 300;
  img.height = 300;
  img.alt = txt;
  const body = document.querySelector("body");
  body.appendChild(img);
}
