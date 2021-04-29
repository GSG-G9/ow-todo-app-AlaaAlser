import styles from '../styles/Home.module.css';

const NewForm = (props) => {
	const { value = '', onChange, onSubmit } = props;
    return (
        <form onSubmit={onSubmit} >
            <input className={styles.input} name="task" type="text" value={value} onChange={onChange} />
            <button className={styles.add} type="submit">Add Task</button>
        </form>
    );
};

export default NewForm;
