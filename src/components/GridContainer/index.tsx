import styles from './style.module.css';

type Props = {
  children: React.ReactNode;
};

export default function GridContainer({ children }: Props) {
  return <div className={styles.grid}>{children}</div>;
}
