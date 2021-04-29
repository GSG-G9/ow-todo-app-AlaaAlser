import styles from '../styles/Home.module.css';

const EditForm = ({ value = '', onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input className={styles.editinput} name="task" type="text" value={value} onChange={onChange} />
      <div className={styles.editflex}  >
      <button className={styles.edit}  type="submit">Save</button>
        <button className={styles.edit} >
          Cancel
        </button>
        </div>
    </form>
  );
};

export default EditForm;
