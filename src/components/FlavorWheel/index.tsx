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

  const handleMouseover = React.useCallback((flavor: Flavor) => {
    console.log(flavor);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <DonutChart
          width={600}
          height={600}
          innerRadius={20}
          outerRadius={120}
          items={items}
          onFlavorClick={handleFlavorClick}
          onMouseover={handleMouseover}
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
          onMouseover={handleMouseover}
        />
      </div>
      <div className={styles.outer}>
        <DonutChart
          width={600}
          height={600}
          innerRadius={200}
          outerRadius={280}
          items={thirdItems}
          onFlavorClick={handleFlavorClick}
          onMouseover={handleMouseover}
        />
      </div>
    </div>
  );
}
