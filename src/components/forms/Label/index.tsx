import styles from './style.module.css';

type Props = {
  id?: string;
  label: string;
};

export default function Label({ id, label }: Props) {
  return (
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>
  );
}
