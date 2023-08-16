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
  const handleFlavorClick = React.useCallback((flavor: Flavor) => {
    console.log(flavor);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <DonutChart
          innerRadius={40}
          outerRadius={100}
          items={items}
          onFlavorClick={handleFlavorClick}
        />
      </div>
      <div className={styles.center}>
        <DonutChart
          innerRadius={100}
          outerRadius={160}
          items={secondItems}
          onFlavorClick={handleFlavorClick}
        />
      </div>
      <div className={styles.outer}>
        <DonutChart
          innerRadius={160}
          outerRadius={170}
          items={thirdItems}
          onFlavorClick={handleFlavorClick}
        />
      </div>
    </div>
  );
}
