import { Component } from "../../scripts/component";
import template from "../welcome/welcome.component.html";
import "./welcome.component.css";
  /* class WelcomeComponent constructor  */
  export class WelcomeComponent extends Component {
    constructor() {
      super(template)
    this.template = template;
    }
    /* method WelcomeComponent.init */
  init() {
    let form = document.querySelector("form.form-signin");

    form.addEventListener(
      "submit",
       (event) =>{
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
          form.classList.add("was-validated");
        } else {
          let name = event.srcElement.querySelector("#nickname").value;
          let size = parseInt(event.srcElement.querySelector("#size").value);

          new _startGame(name, size);
        }
      },
      false
    );

    return this;
  };
  }

  class _startGame {
    constructor(name, size) {
    let gamePage = "./#game";
    window.location = `${gamePage}?name=${name}&size=${size}`;
    }
  }

