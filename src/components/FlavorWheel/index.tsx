import React from 'react';
import DonutChart from './DonutChart';
import {
  FirstFlavors,
  FirstFlavorsColor,
  FirstFlavorsCount,
  Flavor,
  SecondFlavors,
  SecondFlavorsColor,
  SecondFlavorsCount,
  ThirdFlavors,
  ThirdFlavorsColor,
} from './flavor';
import styles from './style.module.scss';
import Modal from 'components/Modal';

const items = Object.values(FirstFlavors).map((flavor) => {
  return {
    value: FirstFlavorsCount[flavor],
    color: FirstFlavorsColor[flavor],
    flavor: flavor,
  };
});
const secondItems = Object.values(SecondFlavors).map((flavor) => {
  return {
    value: SecondFlavorsCount[flavor],
    color: SecondFlavorsColor[flavor],
    flavor: flavor,
  };
});
const thirdItems = Object.values(ThirdFlavors).map((flavor) => {
  return {
    value: 1,
    color: ThirdFlavorsColor[flavor],
    flavor: flavor,
  };
});

export default function FlavorWheel() {
  const [targetFlavor, setTargetFlavor] = React.useState<Flavor | null>(null);
  const handleFlavorClick = React.useCallback((flavor: Flavor) => {
    setTargetFlavor(flavor);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.inner}>
          <DonutChart
            width={600}
            height={600}
            innerRadius={35}
            outerRadius={120}
            items={items}
            onFlavorClick={handleFlavorClick}
          />
        </div>
        <div className={styles.center}>
          <DonutChart
            width={600}
            height={600}
            innerRadius={120}
            outerRadius={200}
            items={secondItems}
            onFlavorClick={handleFlavorClick}
          />
        </div>
        <div className={styles.outer}>
          <DonutChart
            width={600}
            height={600}
            innerRadius={200}
            outerRadius={210}
            items={thirdItems}
            outerText={true}
            onFlavorClick={handleFlavorClick}
          />
        </div>
      </div>
      {targetFlavor && (
        <Modal open={!!targetFlavor} onCloseClick={() => setTargetFlavor(null)}>
          {targetFlavor}
        </Modal>
      )}
    </>
  );
}
