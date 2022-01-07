# ui-lib
UI components, vanilla-js based

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
- Version 0.3.0: add flow support
- Version 0.4.0: add a jsdocs