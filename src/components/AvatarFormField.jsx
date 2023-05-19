import { useEffect, useState } from "react";
import { FormField } from "./FormField";
import { avatarImages } from "../library/avatar";

export function AvatarFormField(props) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        props.onChange(index);
    }, [index, props]);
    

    function handlePreviousClick() {
        if (index <= 0) {
            setIndex(avatarImages.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    function handleNextClick() {
        if (index >= avatarImages.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    return (
        <FormField>
            <div className="avatar-option-choose">
            <button className="avatar-button-left" type="button" onClick={handlePreviousClick}></button>
            <img className="sign-in-avatar-img" src={avatarImages[index]} alt={index} width={100} />
            <button className="avatar-button-right" type="button" onClick={handleNextClick}></button>
            </div>
        </FormField>
    )
}
