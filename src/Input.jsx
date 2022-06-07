const Input = (props) => {
    const { id, label, isSelect = false } = props;
    return (
        <>
            <label for={id}>{label}</label>
            {isSelect && <select id={id}><option>One</option><option>Two</option><option>Three</option></select>}
            {!isSelect && <input type="text" id={id} />}
        </>
    );
};

export default Input;
