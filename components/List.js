import List from '../components/ListItem';
import styles from '../styles/Home.module.css';

const ListComponent = ({ items, onDelete, onEdit, onComplete,complete }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <List
          key={item}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
          onComplete={onComplete}
          complete={complete}
        />
      ))}
    </ul>
  );
};

export default ListComponent;
