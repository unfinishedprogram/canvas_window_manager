import Frame from "../frame";
import Bounds from "../types/bounds";

export class Image extends Frame {
    image?:HTMLImageElement;
    constructor(src:string, bounds:Bounds){
        super(bounds);
        const imgElm = document.createElement("img");
        imgElm.src = src;
        imgElm.addEventListener("load", () => {
            this.image = imgElm;
        })
    }
}