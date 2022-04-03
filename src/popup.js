/**
 * @author Arturas-Alfredas Lapinskas
 * Popup class, for creating popups
 */
export class Popup {
    /**
     * @param {string} id - id for the popup 
     * @param {HTMLElement} html - popup html contents
     * @param {boolean} show - Show we open popup on initialization
     * @param {boolean} [closeButton = true] - Show the close button on the top right conner
     */
    constructor(id, html, show, closeButton = true) {
        /** @type {HTMLElement} */
        this.popupWindow = document.createElement('div');
        /** @type {HTMLElement} */
        this.backgroundMask = document.createElement('div');
        /** @type {boolean} */
        this.opened = !!show ? !!show : false;
        /** @type {Array<Listener>} */
        this.listeners = [];
        this.#mountComponent(id, html, closeButton);
    }
    /**
     * @param {string} id - uniq popup id
     * @param {HTMLElement} html - popup html contents
     * @param {boolean} [closeButton = true] - Show the close button on the top right conner
     * @returns {void}
     */
    #mountComponent (id, html, closeButton) {
        let closeOnClickOutside = (/** @type {MouseEvent} */ e) => {
            if (e.target === this.backgroundMask) {
                this.close();
            }
        };
        this.backgroundMask.style.position = 'absolute';
        this.backgroundMask.style.zIndex = '1';
        this.backgroundMask.style.width = '100%';
        this.backgroundMask.style.height = '100%';
        this.backgroundMask.style.opacity = '0.5';
        this.backgroundMask.style.backgroundColor = 'black';
        this.backgroundMask.style.left = "0px";
        this.backgroundMask.style.top = "0px";
        this.backgroundMask.style.display = this.opened ? "block" : "none";

        this.popupWindow.setAttribute("id", id ? id : "popup");
        this.popupWindow.style.position = "absolute";
        this.popupWindow.style.left =  "30%";
        this.popupWindow.style.top = "20%";
        this.popupWindow.style.width = "40%";
        this.popupWindow.style.border = "1px solid black";
        this.popupWindow.style.display = this.opened ? "block" : "none";
        this.popupWindow.style.background = "white";
        this.popupWindow.style.zIndex = '2';
        if (closeButton) {
            let closeButton = document.createElement("span"),
                closePopup = () => this.close(),
                hoverPopup = () => {
                    closeButton.style.cursor = "pointer";
                };
            closeButton.innerText = "x";
            closeButton.style.position = "absolute";
            closeButton.style.right = "10px";
            closeButton.style.top = "10px";
            this.popupWindow.appendChild(closeButton);
            closeButton.addEventListener("mouseover", hoverPopup);
            closeButton.addEventListener("click", closePopup);
            this.listeners.push({ selector: closeButton, type: "mouseover", method: hoverPopup });
            this.listeners.push({ selector: closeButton, type: "click", method: closePopup });
        }
        
        this.popupWindow.appendChild(html);
        document.body.appendChild(this.backgroundMask);
        document.body.appendChild(this.popupWindow);
        
        document.addEventListener("click", closeOnClickOutside);
        this.listeners.push({ selector: document, type: "click", method: closeOnClickOutside });
    }

    unmountComponent() {
        console.log('unmount component');
        this.listeners.forEach((listener) => {
            listener.selector.removeEventListener(listener.type, listener.method);
        })
    }

    /**
     * close popup method
     * @returns {void}
     */
    close () {
        this.opened = false;
        this.popupWindow.style.display = "none";
        this.backgroundMask.style.display = "none";
    }
    
    /**
     * open popup method
     * @returns {void}
     */
    open () {
        this.opened = true;
        this.popupWindow.style.display = "block";
        this.backgroundMask.style.display = " block";
    }
}
/** @interface */
class Listener {
    /**@type {HTMLElement | Document} */
    selector;
    /**@type {string} */
    type;
    /** @type {EventListenerOrEventListenerObject} */
    method;
}