const DeleteComponent = (props) => {
    const { item, onDelete } = props;

    return (
        <button onClick={event => {event.preventDefault(); onDelete(item) }}>
            <style jsx>{`
                float: right;
                margin: -5px;
                margin-left: 10px;
                padding: 5px;
                cursor: pointer;
                background: #FD7F7C;
                color: #000;
                border-radius:3px;
            `}</style>
            Delete
        </button>
    );
};

export default DeleteComponent;
