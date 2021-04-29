import DeleteComponent from './DeleteComponent';
import EditComponent from './EditComponent';
import CompleteComponent from './CompleteComponent'
import styles from '../styles/Home.module.css';


const ListItem = ({item = "", onDelete, onEdit, onComplete,complete}) => {

    return (
        <li className={`${styles.listItmes} ${complete?styles.complete:""}`}>
            <CompleteComponent item={item} onComplete={onComplete} complete={complete} />
			{item}
			<EditComponent item={item} onEdit={onEdit} />
			<DeleteComponent item={item} onDelete={onDelete} />
		</li>
    );
};

export default ListItem;
