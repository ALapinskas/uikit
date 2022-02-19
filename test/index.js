console.log('im test script');
document.onreadystatechange = function () {
    console.log('set doc state');
    console.log(document.readyState);
    if (document.readyState == "interactive") {
        console.log('doc ready, script starts');
        //Popup
        let popup = window.uikit.Popup;
        let popupContents = function() {
            let contents = document.createElement('p'),
                oneMoreLevel = document.createElement('p');
            contents.innerText = "Hello, i'm a simple popup";
            oneMoreLevel.innerText = "this is one more nested level";
            contents.appendChild(oneMoreLevel);
            return contents;
        }
        let simplePopup = new Popup("default", popupContents(), true);

        //Form, FormInput, FormSwitchers
        let formPopup = new Popup("formOptions", createFormPopup(), false);
        function createFormPopup() {
            let optionsForm = document.createElement("form"),
                nameInput = new window.uikit.FormInput("nameInput", "Enter your name: "),
                radioButtonsWrap = new window.uikit.FormSwitchers("characters", "Choose your radio: ", "radio", "characters", ["FM", "Moscow", "GaGa"]),
                checkboxesWrap = new window.uikit.FormSwitchers("checkboxesWrap", "Choose your checkboxes: ", "checkbox", "checkboxesWrap", ["One", "Two"]),
                formValidationError = document.createElement('p'),
                submitButton = document.createElement('button');
            
            nameInput.wrapper.style.paddingBottom = '1rem';

            optionsForm.appendChild(nameInput.wrapper);

            formValidationError.id = 'error';
            formValidationError.innerText = "Please enter all game options!";
            formValidationError.style.display = "none";

            radioButtonsWrap.wrapper.style.paddingBottom = '1rem';
            optionsForm.appendChild(radioButtonsWrap.wrapper);

            optionsForm.appendChild(checkboxesWrap.wrapper);
            
            submitButton.type = "submit";
            submitButton.innerText = "Submit options";
            optionsForm.style.padding = '1rem';
            optionsForm.appendChild(submitButton);

            optionsForm.appendChild(formValidationError);
            
            optionsForm.addEventListener('submit', function(event) {
                event.preventDefault();
                let formData = event.target,
                    errorContainer = formData.querySelector('#error');
                    
                if (
                    formData.nameInput.value.trim().length === 0 || 
                    formData.characters.value.length === 0
                ) {
                    errorContainer.style.color = 'red';
                    errorContainer.style.display = 'block';
                } else {
                    let controls = {};
                    if (formData.checkboxesWrap.type) {
                        controls[formData.checkboxesWrap.value] = formData.checkboxesWrap.checked;
                    } else {
                        formData.checkboxesWrap.forEach(item => {controls[item.value] = item.checked;});
                    }
                    errorContainer.style.display = 'none';
                    
                    console.log('room name: ', nameInput.value);
                    console.log('characters:', radioButtonsWrap.values);
                    console.log('controls: ', checkboxesWrap.values);
                    formPopup.close();
                }
            });
            return optionsForm;
        }

        let btn = document.createElement('button');
        btn.addEventListener('click', () => {
            console.log('clicked');
            formPopup.open();
        });
        btn.innerText = "open form popup";
        document.body.appendChild(btn);
    }
};