export class Popup {
    constructor(id, html, show, closeButton = true) {
        this.popupWindow = document.createElement('div');
        this.backgroundMask = document.createElement('div');
        this.opened = !!show ? !!show : false;
        this.initiatePopup(id, html, closeButton);
    }
    initiatePopup (id, html, closeButton) {
        this.backgroundMask.style.position = 'absolute';
        this.backgroundMask.style.zIndex = '1';
        this.backgroundMask.style.width = '100%';
        this.backgroundMask.style.height = '100%';
        this.backgroundMask.style.opacity = '0.5';
        this.backgroundMask.style.backgroundColor = 'black';
        this.backgroundMask.style.left = 0;
        this.backgroundMask.style.top = 0;
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
            let closeButton = document.createElement("span");
            closeButton.innerText = "x";
            closeButton.style.position = "absolute";
            closeButton.style.right = "10px";
            closeButton.style.top = "10px";
            this.popupWindow.appendChild(closeButton);
            closeButton.addEventListener("click", (e) => this.close());
        }
        
        this.popupWindow.appendChild(html);
        document.body.appendChild(this.backgroundMask);
        document.body.appendChild(this.popupWindow);
        
        document.addEventListener("click", (e) => {
            if (e.target === this.backgroundMask) {
                this.close();
            }
        });
    }

    close () {
        this.opened = false;
        this.popupWindow.style.display = "none";
        this.backgroundMask.style.display = "none";
    }
    
    open () {
        this.opened = true;
        this.popupWindow.style.display = "block";
        this.backgroundMask.style.display = " block";
    }
}