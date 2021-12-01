import { MouseEventType } from "./events/mouseEvent";
import Frame from "./frame";
import Bounds from "./types/bounds";

export class Context extends Frame {
	constructor() {
		super(new Bounds(0, 0, window.innerWidth, window.innerHeight));
		document.body.appendChild(this.canvas);
		window.addEventListener("resize", () => {
			this.setBounds(new Bounds(0, 0, window.innerWidth, window.innerHeight));
		})

		this.canvas.addEventListener("mousedown", (e) => {
			this.fireMouseEvent(MouseEventType.mouseDown, e, e.clientX, e.clientY);
		})

		this.canvas.addEventListener("mouseup", (e) => {
			this.fireMouseEvent(MouseEventType.mouseUp, e, e.clientX, e.clientY);
		})

		this.canvas.addEventListener("mousemove", (e) => {
			this.fireMouseEvent(MouseEventType.mouseMove, e, e.clientX, e.clientY);
		})
	}
}