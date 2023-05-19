import "../styles/Button.css";

export function Button(props) {
    return (
        <button className={props.className}
            type={props.type}
            onClick={props.onClick}
        >
            {props.label}
        </button> 
    );
}
