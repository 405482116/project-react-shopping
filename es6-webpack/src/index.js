
import '@babel/register';
// class CustomElment {
//     constructor(element) {
//         this._element = element;
//         debugger;
//         this._copyElement = this._element.cloneNode(true);
//         const fragment = document.createDocumentFragment();
//         fragment.appendChild(this._copyElement);
//         this._element.after(fragment);
//     }
//     get getText() {
//         return this._copyElement.innerText || this._copyElement.textContent;
//     }
//     setText(ele, value) {
//         ele.innerText ? (ele.innerText = value || '') : (this.ele.textContent = value || '');
//     }
//     get lineHeight() {
//         //获取行高
//         const fontSize = this.finalStyle('fontSize');
//         let lineHeight = /msie/i.test(navigator.userAgent) ?
//             this.finalStyle('lineHeight', fontSize)
//             : this.finalStyle('lineHeight');

//         //IE normal 和其它游览器不同
//         if (lineHeight === 'normal') {
//             lineHeight = Number(fontSize * 1.5);
//             this._copyElement.setAttribute('style', `line-height:${lineHeight}px`);
//         }
//         lineHeight = Number(lineHeight)

//         return lineHeight;
//     }
//     finalStyle(property, fontSize) {
//         const style = window.getComputedStyle(this._copyElement, null)[property] || this._copyElement.currentStyle[property];
//         const size = fontSize ? `${style * fontSize}px` : style;
//         return size.substring(0, size.toString().length - 2);
//     }
//     textOverflowByRow(row) {
//         // const _this = this.cloneNode(true);
//         // const fragment = document.createDocumentFragment();
//         // fragment.appendChild(_this);
//         // this.after(fragment);

//         //获取行高
//         const lineHeight = this.lineHeight;
//         const height = Math.floor(row * lineHeight);

//         //获取内容高度
//         const clientHeight = this._copyElement.clientHeight;
//         let str = this.getText;

//         if (clientHeight >= height) {

//             //二分优化
//             while (height * 3 < this._copyElement.clientHeight) {
//                 this.setText(this._copyElement, str.substring(0, str.length / 2));
//                 str = this.getText;
//             }
//             //省略号替换末尾文字
//             while (height < this._copyElement.clientHeight) {
//                 str = this.getText;
//                 this.setText(this._copyElement, str.replace(/(\s)*([a-zA-Z0-9_]+|\W)(\.\.\.)?$/, "..."));
//             }
//             this._copyElement.remove();
//             this.setText(this._element, str.replace(/(\s)*([a-zA-Z0-9_]+|\W)(\.\.\.)?$/, "..."));
//         }
//     }
// };

/*weqwe
 * @author:tqtan
 * @date:13/10/10
 * @name:实现多行省略
 * 
*/


/*
 *	@method:node.mlellipsis(row)
 *  @node:dom节点
 *  @row:行数
 *	
*/
Element.prototype.getText = function () {
    if (this.innerText == undefined) { return this.textContent; }
    else { return this.innerText; }
}

Element.prototype.setText = function (str) {
    if (this.innerText == undefined) { this.textContent = str || ""; }
    else { this.innerText = str || ""; }
}

Element.prototype.getFinalStyle = function (property, fontSize) {
    var s;
    if (window.getComputedStyle) {
        s = window.getComputedStyle(this, null)[property];
    }
    else {
        s = this.currentStyle[property];
    }

    //兼容IEbug:IE解析getComputedStyle或currentStyle,然而若line-height=1.5，它会获取计算后是1.5，而其他浏览器获得1.5*line-height
    if (fontSize !== undefined) {
        s = s * fontSize + "px";
    }
    return s.substring(0, s.toString().length - 2);

}
Element.prototype.mlellipsis = function (row) {
    //省略后加上title
    var str = this.getText();
    var title = this.getAttribute("title");
    if (title == null) { this.setAttribute("title", str); }
    else { this.setText(title); }

    //获取计算后的样式
    var fontSize = this.getFinalStyle("fontSize");
    if (/msie/i.test(navigator.userAgent)) {
        debugger;
        var lineHeight = this.getFinalStyle("lineHeight", fontSize);
    }
    else {
        var lineHeight = this.getFinalStyle("lineHeight");
    }
    var height = this.clientHeight;

    if (lineHeight == "norm") {
        lineHeight = Number(fontSize * 1.5);
        this.setAttribute("style", "line-height:" + lineHeight + "px");
    }
    else { lineHeight = Number(lineHeight); }


    //若高度足够，则不用省略
    var dheight = Math.floor(row * lineHeight);
    str = this.getText();

    if (height >= dheight) {
        str = this.getText();

        while (dheight * 3 < this.clientHeight) {
            this.setText(str.substring(0, str.length / 2));
            str = this.getText();
        }
        //减去末尾文字
        while (dheight < this.clientHeight) {
            debugger;
            str = this.getText();
            this.setText(str.replace(/(\s)*([a-zA-Z0-9_]+|\W)(\.\.\.)?$/, "..."));
        }
    }
}
const resolveLineHeight = dom => {
    //获取行高
    const fontSize = dom.getFinalStyle("fontSize");
    let lineHeight = /msie/i.test(navigator.userAgent) ?
        dom.getFinalStyle("lineHeight", fontSize)
        : dom.getFinalStyle("lineHeight");

    //IE normal 和其它游览器不同
    if (lineHeight === 'normal') {
        lineHeight = Number(fontSize * 1.5);
        this.setAttribute("style", `line-height:${lineHeight}px`);
    }
    lineHeight = Number(lineHeight)

    return lineHeight;
}
const resolveTextOverflowByRow = function (row, dom) {
    const fragment = document.createDocumentFragment();
    const copyThisDom = dom.cloneNode(true);
    fragment.appendChild(copyThisDom);
    dom.after(fragment);

    //获取行高
    const lineHeight = resolveLineHeight(copyThisDom)
    const height = Math.floor(row * lineHeight);

    //获取内容高度
    const clientHeight = copyThisDom.clientHeight;
    let str = copyThisDom.getText();

    if (clientHeight > height) {

        //二分优化
        while (height * 3 < copyThisDom.clientHeight) {
            copyThisDom.setText(str.substring(0, str.length / 2));
            str = copyThisDom.getText();
        }
        //省略号替换末尾文字
        while (height < copyThisDom.clientHeight) {
            str = copyThisDom.getText();
            copyThisDom.setText(str.replace(/(\s)*([a-zA-Z0-9_]+|\W)(\.\.\.)?$/, "..."));
        }
        dom.setText(str.replace(/(\s)*([a-zA-Z0-9_]+|\W)(\.\.\.)?$/, "..."));
        copyThisDom.remove();
        dom.remove(fragment);
    } else {
        copyThisDom.remove();
        dom.remove(fragment);
        return;
    }
}



/*
 *	/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/ 正则:
 *	(\s)* 0或多个空白
 *	([a-zA-Z0-9]+|\W) 一个或多个字母数字 或 任意不是字母，数字，汉字的字符
 *	(\.\.\.)? 零个或一个...
 */

// window.onload = function () {
window.action = () => {
    debugger;
    var row = document.getElementById("row").value;
    const dom = document.getElementById("example");
    // dom.mlellipsis(row)
    // const customElment = new CustomElment(dom);
    // customElment.textOverflowByRow(row);
    // const dom = document.querySelector('.example');
    resolveTextOverflowByRow(row, dom);
}
// };

