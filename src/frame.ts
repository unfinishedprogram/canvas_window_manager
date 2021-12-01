import { MouseEventType } from "events/mouseEvent";
import Bounds from "./types/bounds";

type eventCallback = (e:any) => void;

export default class Frame {
    canvas = document.createElement("canvas")
    ctx = this.canvas.getContext("2d")!

    color:string = "#ccc";
    bounds:Bounds;
    parent:Frame|null = null;
    children:Frame[] = [];
    listeners:{[key in MouseEventType]?: eventCallback[]} = {};
    removed = false;

    constructor(bounds:Bounds){
        this.bounds = bounds;
        this.setBounds(bounds);
    }

    onAppended(parent:Frame):void {};

    addEventListner(event:MouseEventType, callback:eventCallback) {
        if(!this.listeners[event]){
            this.listeners[event] = [];
        }
        this.listeners[event]!.push(callback.bind(this))
    }

    setColor(color:string){
        this.color = color;
    }

    append(frame:Frame) {
        frame.parent = this;
        this.children.push(frame);
        frame.onAppended(this);
    }

    update(){
        this.purgeChildren();
        this.children.forEach(child => child.update())
    }

    remove() {
        if(this.parent){
            this.parent.removeChild(this);
        }
        this.removed = true;
    }

    removeChild(child:Frame) {
        this.children = this.children.filter(_child => _child != child);
    }

    setBounds(bounds:Bounds){
        this.bounds = bounds;
        this.canvas.width = this.bounds.width;
        this.canvas.height = this.bounds.height;
    }

    updateBounds(bounds:Bounds){
        this.bounds.width = bounds.width;
        this.bounds.height = bounds.height;
        this.bounds.top = bounds.top;
        this.bounds.left = bounds.left;

        this.canvas.width = this.bounds.width;
        this.canvas.height = this.bounds.height;
    }

    setLeft(left:number){
        this.bounds.left = left;
    }
    
    setTop(top:number){
        this.bounds.top = top;
    }

    setWidth(width:number){
        this.bounds.width = width;
        this.canvas.width = width;
    }

    setHeight(height:number){
        this.bounds.height = height;
        this.canvas.height = height;
    }

    purgeChildren(){
        this.children = this.children.filter((child) => {
            const removed = child.removed;
            return !removed;
        });
    }

    draw():ImageData {
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = this.color;
        this.ctx.clearRect(0, 0, this.bounds.width, this.bounds.height);
        this.ctx.fillRect(0, 0, this.bounds.width, this.bounds.height);
        
        this.children.forEach(child => {
            this.ctx.shadowColor = '#0005';
            this.ctx.shadowBlur = 5;
            this.ctx.shadowOffsetY = 5;

            this.ctx.fillRect(child.bounds.left, child.bounds.top, child.bounds.width, child.bounds.height);
            this.ctx.putImageData(child.draw(), child.bounds.left, child.bounds.top);
        } )
        // this.ctx.strokeRect(0,0, this.bounds.width, this.bounds.height);
        return this.ctx.getImageData(0, 0, this.bounds.width, this.bounds.height);
    }

    fireMouseEvent(event:MouseEventType, data:MouseEvent, x:number, y:number){
        this.children.forEach(child => {
            if(child.bounds.top > y) return;
            if(child.bounds.top + child.bounds.height < y) return;
            if(child.bounds.left > x) return;
            if(child.bounds.left + child.bounds.width < x) return;
            console.log("Propigating to child")

            child.fireMouseEvent(event, data, x-child.bounds.left, y-child.bounds.top);
        });
        if(this.listeners[event]) {
            this.listeners[event]?.forEach(callback => callback(data))
        }
    }

    // setTitlebar(val:boolean){
    //     if(val) {
    //         if(this.titleBar != null){
    //             this.titleBar.remove();
    //         }
    //         this.titleBar = new TitleBar("Title test", this);
    //         this.titleBar.setColor("red");
    //         this.append(this.titleBar);
    //     } else {
    //         if(this.titleBar){
    //             this.titleBar.remove();
    //         }
    //     }
    // }
}