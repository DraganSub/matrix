import { useState } from "react";
import { AvatarFormField } from "../components/AvatarFormField";
import { Button } from "../components/Button";
import { FormField } from "../components/FormField";
import { InputFormField } from "../components/InputFormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { getRandomName } from "../library/random";

export function SignInForm(props) {
    const [ formState, setFormState ] = useState(getRandomName());
    const [ avatar, setAvatar ] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit({
            username: formState,
            avatarIndex: avatar,
        });
    }

    function handleUsernameChange(value) {
        setFormState(value);
    }

    function handleAvatarChange(value) {
        setAvatar(value);
    }

    return (
        <form className="sign-in-form" onSubmit={handleSubmit}>
            <AvatarFormField onChange={handleAvatarChange} />
            <InputFormField
                className="sign-in-username-input"
                type="text"
                onChange={handleUsernameChange}
                value={formState} />
            <FormField>
                <RandomNameButton onRandomName={handleUsernameChange} />
            </FormField>
            <FormField>
                <Button className="sign-in-button matrix-txt-layer-button"  type="submit" label="Sign in" />
            </FormField>
        </form>
    );
}
