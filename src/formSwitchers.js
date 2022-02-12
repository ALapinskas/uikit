export class FormSwitchers {
    constructor(id, labelText, type, name, values) {
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
            this.componentWrap.appendChild(switcher);
            this.componentWrap.appendChild(switcherLabel);
        });
    }

    get wrapper() {
        return this.componentWrap;
    }
}