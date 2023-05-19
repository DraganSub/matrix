import "../styles/RandomNameFormField.css";
import { RandomNameButton } from "./RandomNameButton";

export function RandomNameFormField(props) {
    return (
        <div className="random-name-form-field">
            <RandomNameButton onRandomName={props.onRandomName} />
        </div>
    );
}