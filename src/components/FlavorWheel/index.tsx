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
import useFlavorWheel from './hook';

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
  const { width } = useFlavorWheel();
  const [maxWidth, setMaxWidth] = React.useState(0);
  React.useEffect(() => {
    if (width < 650) {
      setMaxWidth(width);
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
            innerRadius={(maxWidth / 2) * 0.05}
            outerRadius={(maxWidth / 2) * 0.4}
            items={items}
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
          {targetFlavor}
        </Modal>
      )}
    </>
  );
}
