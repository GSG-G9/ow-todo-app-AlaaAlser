import { defaultButton } from '../styles/button';
import Link from 'next/link'

const EditForm = (props) => {
	const { value = '', onChange, onSubmit, onCancel,cancel } = props;
    return (
        <form onSubmit={onSubmit} >
            <style jsx>{defaultButton}</style>
            <input name="task" type="text" value={value} onChange={onChange} />
            <button type="submit">Save</button>
            <Link  href="/">
            <a onClick={onCancel} value={cancel}>Cancel</a>
            </Link>
        </form>
    );
};

export default EditForm;
