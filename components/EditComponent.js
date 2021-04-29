import styles from '../styles/Home.module.css';

const EditComponent = ({ item, onEdit }) => {

    return (
        <button className={styles.buttonedit} onClick={event => {event.preventDefault(); onEdit(item) }}>
            Edit
        </button>
    );
};

export default EditComponent;
