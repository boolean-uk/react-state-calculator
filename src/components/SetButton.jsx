// eslint-disable-next-line react/prop-types
const SetButton = ({ value, onClick, currentValue = "", savedNumber }) => {
    const setValue = () => {
        if (value === "Clear") onClick(0);
        else if (value === "Recall") onClick(savedNumber);
        else if (value === ".") {
            if (!currentValue.includes(".")) onClick(currentValue + "" + value)
        } else {
            if (currentValue !== "0") onClick(currentValue + "" + value);
            else onClick(value);
        }
    };

    return <button onClick={setValue}>{value}</button>;
};

export default SetButton;
