export class FormInput {
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

    get wrapper() {
        return this.inputWrap;
    }

    get value() {
        return this.inputComponent.value;
    }

    set value(newVal) {
        this.inputComponent.value = newVal;
    }
}