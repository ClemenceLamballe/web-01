import "./card.component.css"
import CARD_TEMPLATE from "./card.component.html"
import { Component } from "../../../scripts/component";

import back from "./card.component/back.png"
import card0 from "./card.component/card-0.png"
import card1 from "./card.component/card-1.png"
import card2 from "./card.component/card-2.png"
import card3 from "./card.component/card-3.png"
import card4 from "./card.component/card-4.png"
import card5 from "./card.component/card-5.png"
import card6 from "./card.component/card-6.png"
import card7 from "./card.component/card-7.png"
import card8 from "./card.component/card-8.png"
import card9 from "./card.component/card-9.png"
export let CARDS_IMAGE = [
    back,
    card0,
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
];


/* class CardComponent constructor */
export class CardComponent extends Component {
    constructor(id) {
        super(CARD_TEMPLATE)

        this._flipped = false;
        this.template = CARD_TEMPLATE;
        this.matched = false;

        this._elt = document.createElement("div");
        this._elt.innerHTML = this.template;
        this._elt = this._elt.firstElementChild;
        this._id = id;

        this._imageElt = this.getElement().querySelector(".card-wrapper");
        this._imageElt.querySelector("img.front-face").src =
            CARDS_IMAGE[this._id + 1];
        this._imageElt.querySelector("img.back-face").src = CARDS_IMAGE[0];
    }


    /* method CardComponent.getElement */
    getElement() {
        return this._elt;
    };

    /* method CardComponent.flip */
    flip() {
        this._imageElt.classList.toggle("flip");
        this._flipped = !this._flipped;
    };

    /* method CardComponent.equals */
    equals(card) {
        return card._id === this._id;
    };

    /* CardComponent.get flipped() */

    get flipped() {
        return this._flipped;
    }

    set flipped(value) {
        this._flipped = value;
    }
}