import styles from './style.module.css';

type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  onClick?: () => void;
};
export default function Button({ children, type = 'button', onClick }: Props) {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
