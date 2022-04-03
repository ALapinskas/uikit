# ui-lib
UI components

# import:
    <script src="node_modules/uikit"></script>
# use directly:
    let popup = window.uikit.Popup;
    let popupContents = function() {
        let contents = document.createElement('p');
        contents.innerText = "Hello, i'm a popup";
        return contents;
    }
    new popup("default", popupContents(), true);

# use with webpack:
    import { Popup } from 'uikit';
    let popupContents = function() {
        let contents = document.createElement('p');
        contents.innerText = "Hello, i'm a popup";
        return contents;
    }
    new Popup("default", popupContents(), true);

# Roadmap:

* Version 0.2.0:
    - add popup mobile version

* Version 0.3.0: 
    - add flow/typescript support
    
* Version 0.4.0: 
    - add a jsdocs

# History:
* Version 0.0.6:
    + webpack dev server

* Version 0.0.5:
    + formSwitchers set/get values

* Version 0.0.4:
    - add popup close on click outside
    - add popup close optional button
* Version 0.0.3
    - fixed formSwitcher set id issue
