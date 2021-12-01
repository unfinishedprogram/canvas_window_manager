import { MouseEventType } from "../events/mouseEvent";
import Frame from "../frame";
import Bounds from "../types/bounds";
import TextElement from "./textElement";

export default class TitleBar extends Frame {
    title:string;
    titleElm:TextElement;
    mouseDown:boolean = false;
    constructor(title:string){
        super(new Bounds(0, 0, 1, 26));
        this.title = title;
        this.titleElm = new TextElement(this.bounds, title)
        this.append(this.titleElm);
        this.addEventListner(MouseEventType.mouseLeave, () => this.mouseDown = false);
        this.addEventListner(MouseEventType.mouseDown, () => this.mouseDown = true);
        this.addEventListner(MouseEventType.mouseUp, () => this.mouseDown = false);
        this.addEventListner(MouseEventType.mouseMove, (e:MouseEvent) => {
            if(this.mouseDown){
                this.parent?.setLeft(this.parent.bounds.left + e.movementX);
                this.parent?.setTop(this.parent.bounds.top + e.movementY);
            }
        })
    }

    onAppended(parent:Frame) {
        this.setWidth(parent.bounds.width)
        this.titleElm.setBounds(this.bounds)
    }
}
