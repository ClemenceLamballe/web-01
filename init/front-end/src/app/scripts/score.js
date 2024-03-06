// TODO #import-html: use ES default imports to import game.html as template
import template from "../views/score.html";

// TODO #export-functions: remove the IIFE
//(function () {
  // TODO #export-functions: export function ScoreComponent
  // TODO #class: use the ES6 class keyword
import { parseUrl } from "./utils";
import {Component} from "./component";
  /* class ScoreComponent constructor */


  export class ScoreComponent extends Component{
    constructor() {

      // TODO #extends: call super(template)
      super(template)
      let params = parseUrl();
      // TODO #import-html: assign template to this.template
      this.template = template;
      this.name = params.name;
      this.size = parseInt(params.size);
      this.time = parseInt(params.time);
    }


  // TODO #export-functions: remove this line
  // put component in global scope, to be runnable right from the HTML.
  //window.ScoreComponent = ScoreComponent;

  // TODO #class: turn function into a method of ScoreComponent
  /* method ScoreComponent.init */
  init() {
    document.getElementById("name").innerText = this.name;
    document.getElementById("size").innerText = this.size;
    document.getElementById("time").innerText = this.time;
  };
  }
//})();
