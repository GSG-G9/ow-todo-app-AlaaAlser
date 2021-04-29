import styles from '../styles/Home.module.css';

const DeleteComponent = ({ item, onDelete }) => {
  return (
    <button
      className={styles.buttondelete}
      onClick={(event) => {
        event.preventDefault();
        onDelete(item);
      }}
    >
      Delete
    </button>
  );
};

export default DeleteComponent;
