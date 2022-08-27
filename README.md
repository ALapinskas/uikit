# uikit
UI components

# Use directly:
    <script src="node_modules/dist/uikit.min.js"></script>
    <script>
        let popup = window.uikit.Popup,
                    formSwitcher = window.uikit.FormSwitchers,
                    formInput = window.uikit.FormInput;
        let popupContents = function() {
            let wrapper = document.createElement('div'),
                howManyPlayers = new formSwitcher(
                    "howManyPlayers", 
                    "How many players?",
                    "radio",
                    "howMany",
                    ["Single Player", "Two Players"]),
                roomName = new formInput("name", "Room Name"),
                submitButton = document.createElement("button");

            wrapper.appendChild(howManyPlayers.wrapper);
            
            howManyPlayers.on("change", e => {
                console.log("changed radio: ", e.target.value);
            });
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
* Version 0.0.8:
    + added disableButtons method for the formSwitcher component

* Version 0.0.7:
    + attached 'change' event listeners
    
* Version 0.0.6:
    + webpack dev server

* Version 0.0.5:
    + formSwitchers set/get values

* Version 0.0.4:
    - add popup close on click outside
    - add popup close optional button
* Version 0.0.3
    - fixed formSwitcher set id issue
