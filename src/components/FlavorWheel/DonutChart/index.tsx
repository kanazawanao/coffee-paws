import React from 'react';
import { Flavor } from '../flavor';
import styles from './style.module.scss';

type Props = {
  width: number;
  height: number;
  innerRadius: number;
  outerRadius: number;
  items: { value: number; color: string; flavor: Flavor }[];
  onFlavorClick: (flavor: Flavor) => void;
  outerText?: boolean;
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

export default function DonutChart({
  width,
  height,
  items,
  innerRadius,
  outerRadius,
  outerText = false,
  onFlavorClick,
}: Props) {
  const segments = React.useMemo(() => {
    const sum = items.reduce((sum, item) => sum + item.value, 0);
    let start = 0;
    return items.map((item) => {
      const delta = item.value / sum;
      const path = getArcPath(start, start + delta, innerRadius, outerRadius);

      const endAngle = (start + delta / 2) * Math.PI * 2;
      const x3 = outerRadius * Math.sin(endAngle);
      const x4 = innerRadius * Math.sin(endAngle);

      // x4 -> x3にパスを書くとき、マイナス方向へ移動している場合は文字反転対象とする
      const reverse = x4 + x3 < 0;

      // 文字を書くための図形内部用の座標
      const innerTextPathx1 = outerRadius * Math.sin(endAngle);
      const innerTextPathy1 = outerRadius * -Math.cos(endAngle);
      const innerTextPathx2 = innerRadius * Math.sin(endAngle);
      const innerTextPathy2 = innerRadius * -Math.cos(endAngle);

      // 文字を書くための図形外部用の座標
      const outerTextPathx1 = (outerRadius + 80) * Math.sin(endAngle);
      const outerTextPathy1 = (outerRadius + 80) * -Math.cos(endAngle);
      const outerTextPathx2 = outerRadius * Math.sin(endAngle);
      const outerTextPathy2 = outerRadius * -Math.cos(endAngle);

      const strPath = outerText
        ? `M ${outerTextPathx2},${outerTextPathy2} L ${outerTextPathx1},${outerTextPathy1} Z`
        : `M ${innerTextPathx2},${innerTextPathy2} L ${innerTextPathx1},${innerTextPathy1} Z`;

      start += delta;
      return { ...item, path, reverse, strPath };
    });
  }, [innerRadius, items, outerRadius, outerText]);

  return (
    <svg width={width} height={height} viewBox='0, 0, 840, 840'>
      <g transform={`translate(${width / 2},${height / 2})`}>
        {segments.map((segment, index) => (
          <React.Fragment key={`${index}-${segment.color}`}>
            <path
              id={`${index}-${segment.color}`}
              className={styles.clickable}
              stroke='white'
              fill={segment.color}
              d={segment.path}
              onClick={() => onFlavorClick(segment.flavor)}
            >
              <title>{segment.flavor}</title>
            </path>
          </React.Fragment>
        ))}
      </g>
      {segments.map((segment, index) => (
        <React.Fragment key={`${index}-${segment.color}-text-path`}>
          <path
            transform={`translate(${width / 2},${height / 2})`}
            id={`${index}-${segment.color}-text-path`}
            d={segment.strPath}
          />
          <text
            key={`${index}-${segment.color}`}
            className={styles.text}
            textAnchor='start'
            dominantBaseline='middle'
            fill={outerText ? segment.color : 'white'}
            onClick={() => onFlavorClick(segment.flavor)}
          >
            <textPath
              xlinkHref={`#${index}-${segment.color}-text-path`}
              startOffset={outerText ? 5 : 10}
            >
              {segment.reverse ? (
                <tspan rotate={180}>
                  {segment.flavor.split('').reverse().join('')}
                </tspan>
              ) : (
                <tspan>{segment.flavor}</tspan>
              )}
            </textPath>
          </text>
        </React.Fragment>
      ))}
    </svg>
  );
}
