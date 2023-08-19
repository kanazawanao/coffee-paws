import { Flavor, FlavorJpLabel } from 'components/FlavorWheel/flavor';
import styles from './style.module.scss';

type Props = {
  flavor: Flavor;
};
export default function FlavorDescription({ flavor }: Props) {
  return <div className={styles.container}>{FlavorJpLabel[flavor]}</div>;
}
