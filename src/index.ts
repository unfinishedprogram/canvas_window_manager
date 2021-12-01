import TitleBar from "./objects/titleBar";
import { Context } from "./context";
import Frame from "./frame";
import Bounds from "./types/bounds";
import { MouseEventType } from "./events/mouseEvent";

const myContext = new Context()
const myFrame = new Frame(new Bounds(20, 20, 500, 500))

myFrame.setColor("#0099aa")
myFrame.append(new TitleBar("This is a title"))
myFrame.children[0].setColor("#ff99aa");
myContext.append(myFrame)
myFrame.addEventListner(MouseEventType.mouseDown, () => {
	myFrame.setColor("#ff99aa");
})
myContext.draw();

setInterval(() => myContext.draw())