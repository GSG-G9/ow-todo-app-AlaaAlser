const CompleteComponent = (props) => {
    const { item, onComplete } = props;

    return (
        <a onTouchTap={() => {event.preventDefault(); onComplete(item) }}>
            <style jsx>{`
                float: right;
                margin-left: 10px;
            `}</style>
   <input type="checkbox"
      color="default"
    />        </a>
    );
};

export default CompleteComponent;
