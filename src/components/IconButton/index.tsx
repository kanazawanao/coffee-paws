import styles from './style.module.scss';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};
export default function IconButton({ children, onClick }: Props) {
  return (
    <div className={styles.icon} onClick={onClick}>
      {children}
    </div>
  );
}
