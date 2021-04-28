import DeleteComponent from './DeleteComponent';
import EditComponent from './EditComponent';
import CompleteComponent from './CompleteComponent'

const ListItem = (props) => {
    let { item = "", onDelete, onEdit, onComplete } = props;

    return (
        <li>
            <style jsx>{`
               li {
                    background: white;
                    margin: 10px 0;
                    padding: 10px;
                }
            `}</style>
			{item}
			<DeleteComponent item={item} onDelete={onDelete} />
			<EditComponent item={item} onEdit={onEdit} />
            <CompleteComponent item={item} onComplete={onComplete} />
		</li>
    );
};

export default ListItem;
