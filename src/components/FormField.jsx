import "../styles/FormField.css";

export function FormField(props) {
    return (
        <div className="form-field">
            {props.children}
        </div>
    );
}
