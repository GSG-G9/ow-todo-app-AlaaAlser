import { defaultButton } from '../styles/button';

const NewForm = (props) => {
	const { value = '', onChange, onSubmit } = props;
    return (
        <form onSubmit={onSubmit} >
            <style jsx>{defaultButton}</style>
            <input name="task" type="text" value={value} onChange={onChange} />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default NewForm;
