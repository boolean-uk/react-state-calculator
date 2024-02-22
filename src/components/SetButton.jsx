const SetButton = (props) => {
    const setValue = () => {
        if (props.value === "Clear") props.onClick(0);
        else props.onClick(props.value);
    };

    return <button onClick={setValue}>{props.value}</button>;
};

export default SetButton;
