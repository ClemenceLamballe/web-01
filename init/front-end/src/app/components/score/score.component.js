import { parseUrl } from "../../scripts/utils";
import { Component } from "../../scripts/component";

import template from "./score.component.html";
import "./score.component.css";
import "../navbar/navbar.component.css";
export class ScoreComponent extends Component{
    constructor() {

      // TODONE #extends: call super(template)
      super(template)
      let params = parseUrl();
      // TODONE #import-html: assign template to this.template
      this.template = template;
      this.name = params.name;
      this.size = parseInt(params.size);
      this.time = parseInt(params.time);

    }


  // TODONE #export-functions: remove this line
  // put component in global scope, to be runnable right from the HTML.
  //window.ScoreComponent = ScoreComponent;

  // TODONE #class: turn function into a method of ScoreComponent
  /* method ScoreComponent.init */
  init() {

    document.getElementById("name").innerText = this.name;
    document.getElementById("size").innerText = this.size;
    document.getElementById("time").innerText = this.time;
  };
  }
//})();
