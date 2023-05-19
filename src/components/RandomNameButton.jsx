import { Button } from "./Button";
import { getRandomName } from "../library/random";

export function RandomNameButton(props) {
    function handleClick() {
        props.onRandomName(getRandomName());
    }

    return (
        <Button className="random-button" type="button" onClick={handleClick} label="GET RANDOM NAME" />
    );
}
