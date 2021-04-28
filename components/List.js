import List from '../components/ListItem';

const ListComponent = (props) => {
	const { items, onDelete, onEdit, onComplete } = props;

    return (
        <ul>
                <style jsx>{`
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
               `}</style>

            { items.map(item => <List key={item} item={item} onDelete={onDelete} onEdit={onEdit} onComplete={onComplete}  />) }
        </ul>
    );
};

export default ListComponent;
