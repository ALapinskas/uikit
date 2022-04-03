# uikit
UI components

# Use directly:
    <script src="node_modules/uikit"></script>
    <script>
        let popup = window.uikit.Popup;
        let popupContents = function() {
            let contents = document.createElement('p');
            contents.innerText = "Hello, i'm a popup";
            return contents;
        }
        new popup("default", popupContents(), true);
    </script>
# Or with webpack:
    import { Popup } from 'uikit';
    let popupContents = function() {
        let contents = document.createElement('p');
        contents.innerText = "Hello, i'm a popup";
        return contents;
    }
    new Popup("default", popupContents(), true);

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
