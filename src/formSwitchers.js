/**
 * @author Arturas-Alfredas Lapinskas
 * Form Switchers class, radio/checkbox buttons with basic controls
 */
import { EventEmitter } from "events";

 /** @enum {string} */
export const SwitcherType = {
    radio: "radio", 
    checkbox: "checkbox"
};
export class FormSwitchers extends EventEmitter {
    /**
     * 
     * @param {string} id - form switchers wrapper id 
     * @param {string} labelText 
     * @param {SwitcherType} type - radio/checkbox 
     * @param {string} name - group controls name 
     * @param {Array<string>} values
     */
    constructor(id, labelText, type, name, values) {
        super();
        this.componentWrap = document.createElement('div');
        this.componentLabel = document.createElement('span');
        if (id) {
            this.componentWrap.setAttribute('id', id);
        }
        this.componentLabel.innerText = labelText;
        this.componentWrap.appendChild(this.componentLabel);
        values.forEach(value => {
            let switcher = document.createElement('input'),
                switcherLabel = document.createElement('label');

            switcher.id = value;
            switcher.type = type;
            switcher.name = name;
            switcher.value = value;
            switcherLabel.setAttribute('for', value);
            switcherLabel.innerText = value;
            switcher.addEventListener('change', (event) => {
                this.emit("change", event);
            });
            this.componentWrap.appendChild(switcher);
            this.componentWrap.appendChild(switcherLabel);
        });
    }

    /**
     * @returns {HTMLElement}
     */
    get wrapper() {
        return this.componentWrap;
    }

    /**
     * get checked values
     * @returns {Array<string>}
     */
    get values() {
        /** @type {NodeListOf<HTMLInputElement>} */
        let buttons = this.componentWrap.querySelectorAll('input'),
        /** @type {Array<string>} */
            checked = [];
        buttons.forEach(btn => btn.checked ? checked.push(btn.value) : null);
        return checked;
    }

    /**
     * Set checked values
     * @param {Array<string>} selected
     * @returns {void}
     */
    set values(selected) {
        let buttons = this.componentWrap.querySelectorAll('input');
        buttons.forEach(btn => {
            selected.length === 0 ? btn.checked = false : null;
            selected.forEach((el) => {
                btn.value === el ? btn.checked = true : btn.checked = false; 
            });
        });
    }

    destroy() {
        this.removeAllListeners("change");
        this.componentWrap = undefined;
        this.componentLabel = undefined;
    }
}