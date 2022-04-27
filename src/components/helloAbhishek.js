export default class HelloAbhishek {
  render() {
    const body = document.querySelector("body");
    const p = document.createElement("p");
    p.innerHTML = "Hello Abhishek";
    body.appendChild(p);
    return;
  }
}
