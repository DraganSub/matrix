import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitFormField";

export function MessageForm(props) {
    const [formState, setFormState] = useState('');

    function handleChange(message) {
        setFormState(message);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (formState.trim() === "") {
            return;
        }
        setFormState('');

        props.onSubmit({
            id: Date.now(),
            author: {
                username: props.username,
                avatarIndex: props.avatarIndex,
            },
            text: formState,
        });
    }

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <InputFormField
                className="message-input"
                type="text"
                value={formState}
                onChange={handleChange}
                placeholder="Message"
            />
            <SubmitFormField label="Send" />
        </form>
    );
}