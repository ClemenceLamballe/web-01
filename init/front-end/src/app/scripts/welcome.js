// TODO #import-html: use ES default imports to import welcome.html as template
import template from "../views/welcome.html";
import {Component} from "./component";

// TODO #export-functions: remove the IIFE
//(function () {
  // TODO #export-functions: export function WelcomeComponent
  // TODO #class: use the ES6 class keyword
  /* class WelcomeComponent constructor  */
  export class WelcomeComponent extends Component {
    constructor() {

    // TODO #extends: call super(template)
      super(template)
    // TODO #import-html: assign template to this.template
    this.template = template;
    }




  // TODO #export-functions: remove this line
  // put component in global scope, to be runnable right from the HTML.
  //window.WelcomeComponent = WelcomeComponent;
  // TODO #class: turn function into a method of WelcomeComponent
  /* method WelcomeComponent.init */
  init() {
    let form = document.querySelector("form.form-signin");

    form.addEventListener(
      "submit",
      // TODONE #arrow-function: use arrow function instead.
       (event) =>{
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
          form.classList.add("was-validated");
        } else {
          let name = event.srcElement.querySelector("#nickname").value;
          let size = parseInt(event.srcElement.querySelector("#size").value);

          new _startGame(name, size);
          //this.
        }
      },
      false
    );

    return this;
  };
  }

  // TODO #class: turn function into a method of WelcomeComponent
  class _startGame {
    constructor(name, size) {
    // TODO #spa: replace with './#game'
    let gamePage = "./#game";
    // TODONE #template-literals:  use template literals (backquotes)
    window.location = `${gamePage}?name=${name}&size=${size}`;
    }
  }
//})();
