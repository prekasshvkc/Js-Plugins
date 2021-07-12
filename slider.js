//HTML Look Like
// <!Doctype HTML />
// <html>
// <body onLoad="load()">
// <div id="slider">  </div>
// <div id="newSlider"> </div>
// </body>
// </html>
class LoadData {

    constructor(selector, dataList, defaultIndex) {
        this.selector = document.getElementById(selector);
        this.dataList = dataList;
        this.defaultIndex = defaultIndex;
    }

    createElement(selector, attrs) {
        const element = document.createElement(selector);
        attrs.class.forEach(item => element.classList.add(item));
        element.setAttribute("id", attrs.id);
        return element
    }

    initSider() {

        const prev = this.createElement("span", {
            class: [],
            id: "prev"
        });
        prev.innerHTML = "<";
        const next = this.createElement("span", {
            class: [],
            id: "next"
        });
        next.innerHTML = ">";

        this.selector.prepend(prev);
        const p = document.createElement("p");
        this.selector.append(p);
        this.selector.append(next);
        let self = this;
        prev.addEventListener("click", function() {
            self.defaultIndex--;
            if ((self.defaultIndex) < 0) {
                self.defaultIndex = (self.dataList.length - 1);
            }
            self.changeSlider();
        });
        next.addEventListener("click", function() {
            self.defaultIndex++;
            if ((self.dataList.length - 1) < self.defaultIndex) {
                self.defaultIndex = 0;
            }
            self.changeSlider();
        });

        this.changeSlider();
    }
    changeSlider() {
        this.selector.querySelector("p").innerHTML = this.dataList[this.defaultIndex];
    }

}

function load() {
    const loadSlider = new LoadData("slider", ["1", "2", "3", "4"], 1);
    loadSlider.initSider();

    const newSLiders = new LoadData("newSlider", ["PREKASSH", "ABHIRAMI", "THISHYANTH", "SHANTHA KUMAR", "DHAANVI"], 0)
    newSLiders.initSider();
}
