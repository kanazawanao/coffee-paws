import React from 'react';
import DonutChart from './DonutChart';
import { Flavor, firstItems, secondItems, thirdItems } from './flavor';
import styles from './style.module.scss';
import Modal from 'components/Modal';
import useFlavorWheel from './hook';
import FlavorDescription from 'components/FlavorDescription';

export default function FlavorWheel() {
  const [targetFlavor, setTargetFlavor] = React.useState<Flavor | null>(null);
  const handleFlavorClick = React.useCallback((flavor: Flavor) => {
    setTargetFlavor(flavor);
  }, []);
  const { width } = useFlavorWheel();
  const [maxWidth, setMaxWidth] = React.useState(0);
  React.useEffect(() => {
    if (width < 700) {
      setMaxWidth(width - 50);
    } else {
      setMaxWidth(650);
    }
  }, [width]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.donut}>
          <DonutChart
            width={maxWidth + 40}
            height={maxWidth + 40}
            innerRadius={(maxWidth / 2) * 0.1}
            outerRadius={(maxWidth / 2) * 0.4}
            items={firstItems}
            onFlavorClick={handleFlavorClick}
          />
        </div>
        <div className={styles.donut}>
          <DonutChart
            width={maxWidth + 40}
            height={maxWidth + 40}
            innerRadius={(maxWidth / 2) * 0.4}
            outerRadius={(maxWidth / 2) * 0.75}
            items={secondItems}
            onFlavorClick={handleFlavorClick}
          />
        </div>
        <div className={styles.donut}>
          <DonutChart
            width={maxWidth + 40}
            height={maxWidth + 40}
            innerRadius={(maxWidth / 2) * 0.75}
            outerRadius={(maxWidth / 2) * 0.8}
            items={thirdItems}
            outerText={true}
            onFlavorClick={handleFlavorClick}
          />
        </div>
      </div>
      {targetFlavor && (
        <Modal open={!!targetFlavor} onCloseClick={() => setTargetFlavor(null)}>
          <FlavorDescription flavor={targetFlavor} />
        </Modal>
      )}
    </>
  );
}
