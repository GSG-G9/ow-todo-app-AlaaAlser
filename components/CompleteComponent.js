import styles from '../styles/Home.module.css';

const CompleteComponent = ({ item, onComplete, complete }) => {
  return (
    <div className={styles.buttoncomplete}>
      <input
        onChange={(event) => {
          event.preventDefault();
          onComplete(item);
        }}
        type="checkbox"
        color="default"
      />
    </div>
  );
};

export default CompleteComponent;
