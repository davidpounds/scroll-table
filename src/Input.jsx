const Input = (props) => {
    const { id, label } = props;
    return (
        <>
            <label for={id}>{label}</label>
            <input type="text" id={id} />
        </>
    );
};

export default Input;
