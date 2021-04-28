const EditComponent = (props) => {
    const { item, onEdit } = props;

    return (
        <button onClick={event => {event.preventDefault(); onEdit(item) }}>
            <style jsx>{`
                float: right;
                margin: -5px;
                margin-left: 10px;
                padding: 5px;
                cursor: pointer;
                background: #70D3FF;
                color: #000;
                border-radius:3px;
            `}</style>
            Edit
        </button>
    );
};

export default EditComponent;
