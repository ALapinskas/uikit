/**
 * @author Arturas-Alfredas Lapinskas
 * Input element with label, and basic controls
 */
export class FormInput {
    /**
     * 
     * @param {string} id - form switchers wrapper id 
     * @param {string} labelText 
     * @param {string} type - input type
     */
    constructor(id, labelText, type) {
        this.inputWrap = document.createElement('div');
        this.inputLabel = document.createElement('label');
        this.inputComponent = document.createElement('input');
        this.inputComponent.id = id;
        this.inputLabel.setAttribute('for', this.inputComponent.id);
        this.inputLabel.innerText = labelText;
        if(type) {
            this.inputComponent.type = type;
        }
        this.inputWrap.appendChild(this.inputLabel);
        this.inputWrap.appendChild(this.inputComponent);
    }

    /**
     * @returns {HTMLElement}
     */
    get wrapper() {
        return this.inputWrap;
    }

    /**
     * @returns {*}
     */
    get value() {
        return this.inputComponent.value;
    }

    /**
     * @param {*} newVal
     */
    set value(newVal) {
        this.inputComponent.value = newVal;
    }
}