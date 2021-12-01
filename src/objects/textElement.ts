import Frame from "../frame";
import Bounds from "../types/bounds";
enum HorizontalAlignment  {
	"left", 
	"middle", 
	"right"
}

interface TextProperties {
	textContent: string,
	fontSize: number,
	horizontalAlign: HorizontalAlignment, 
}

export default class TextElement extends Frame {
	properties: TextProperties;
	constructor (bounds:Bounds, content:string, fontSize?:number) {
		super (bounds);
		this.properties = {
			textContent: content,
			fontSize: fontSize ? fontSize : 20,
			horizontalAlign: HorizontalAlignment.left
		}
		this.setColor("#000000");
	}

	draw():ImageData {
		this.ctx.clearRect(0,0, this.bounds.width, this.bounds.height);
		this.ctx.fillStyle = this.color;
		this.ctx.font = `${this.properties.fontSize}px sans-serif`;
		this.ctx.fillText(this.properties.textContent, 0, this.properties.fontSize);
		this.children.forEach(child => {
			let childData = child.draw()
			this.ctx.putImageData(childData, child.bounds.left, child.bounds.top)
		});
		return this.ctx.getImageData(0, 0, this.bounds.width, this.bounds.height);
	}
}