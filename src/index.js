import { Popup } from "./popup.js";
import { FormInput } from "./formInput.js";
import { FormSwitchers } from "./formSwitchers.js";
if(window) {
    // @ts-ignore
    window.uikit = { Popup, FormInput, FormSwitchers };
}
export { Popup, FormInput, FormSwitchers };
