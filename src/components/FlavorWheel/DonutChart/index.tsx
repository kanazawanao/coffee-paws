import React from 'react';
import { Flavor } from '../flavor';
import styles from './style.module.scss';

type Props = {
  innerRadius: number;
  outerRadius: number;
  items: { value: number; color: string; flavor: Flavor }[];
  onFlavorClick: (flavor: Flavor) => void;
};

const getArcPath = (
  start: number,
  end: number,
  innerRadius: number,
  outerRadius: number,
) => {
  const startAngle = start * Math.PI * 2;
  const endAngle = end * Math.PI * 2;
  const x1 = innerRadius * Math.sin(startAngle);
  const y1 = innerRadius * -Math.cos(startAngle);
  const x2 = outerRadius * Math.sin(startAngle);
  const y2 = outerRadius * -Math.cos(startAngle);
  const x3 = outerRadius * Math.sin(endAngle);
  const y3 = outerRadius * -Math.cos(endAngle);
  const x4 = innerRadius * Math.sin(endAngle);
  const y4 = innerRadius * -Math.cos(endAngle);
  const bigArc = end - start >= 0.5;
  const outerFlags = bigArc ? '1 1 1' : '0 0 1';
  const innerFlags = bigArc ? '1 1 0' : '1 0 0';
  return `M ${x1},${y1} L ${x2},${y2} A ${outerRadius} ${outerRadius} ${outerFlags} ${x3},${y3} 
      L ${x4},${y4} A ${innerRadius} ${innerRadius} ${innerFlags} ${x1},${y1} Z`;
};

const PROGRESS_UNIT = 0.01;
const PROGRESS_TIMEOUT = 5;

export default function DonutChart({
  items,
  innerRadius,
  outerRadius,
  onFlavorClick,
}: Props) {
  const [visiblePart, setVisiblePart] = React.useState(0);
  React.useEffect(() => {
    if (visiblePart < 1) {
      setTimeout(
        () => setVisiblePart(visiblePart + PROGRESS_UNIT),
        PROGRESS_TIMEOUT,
      );
    }
  }, [visiblePart]);

  const segments = React.useMemo(() => {
    const sum = items.reduce((sum, item) => sum + item.value, 0);
    let start = 0;
    return items.map((item) => {
      const delta = (item.value / sum) * visiblePart;
      const path = getArcPath(start, start + delta, innerRadius, outerRadius);
      start += delta;
      return { ...item, path };
    });
  }, [innerRadius, items, outerRadius, visiblePart]);

  return (
    <svg width={500} height={500}>
      <g transform={`translate(${500 / 2},${500 / 2})`}>
        {segments.map((segment, index) => (
          <React.Fragment key={`${index}-${segment.color}`}>
            <path
              id={`${index}-${segment.color}`}
              className={styles.clickable}
              stroke='white'
              fill={segment.color}
              d={segment.path}
              onClick={() => onFlavorClick(segment.flavor)}
            />
            <text d={segment.path} className={styles.text} x='0'>
              {segment.flavor}
            </text>
          </React.Fragment>
        ))}
      </g>
    </svg>
  );
}
