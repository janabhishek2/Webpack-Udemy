import "./hello-world.scss";

class HelloWorld {
  buttonClassName = "btn-primary";

  render() {
    const button = document.createElement("button");
    button.innerHTML = "Click Me";
    button.classList.add(this.buttonClassName);
    const body = document.querySelector("body");
    button.onclick = function () {
      const text = document.createElement("p");
      text.innerHTML = "Button was clicked !!<br/> ";

      text.classList.add("para");
      body.appendChild(text);
    };

    body.appendChild(button);
  }
}
export default HelloWorld;
