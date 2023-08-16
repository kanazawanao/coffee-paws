import classNames from 'classnames';
import styles from './styles.module.scss';

type PositionType = 'top' | 'right';
type Props = {
  position?: PositionType;
  text: string;
};
export default function Tooltip({ position = 'top', text }: Props) {
  return (
    <div className={styles.tooltip}>
      <div
        className={classNames(styles.description, {
          [styles.top]: position === 'top',
          [styles.right]: position === 'right',
        })}
      >
        {text}
      </div>
      <i>
        <svg xmlns='http://www.w3.org/2000/svg' width='8' height='10'>
          <path
            d='M2.992 9.707c-.217-.208-.325-.462-.325-.763s.108-.554.325-.762.479-.311.789-.311a1.11 1.11 0 0 1 .797.311c.216.208.324.462.324.762s-.108.555-.324.763a1.11 1.11 0 0 1-.797.311c-.31 0-.573-.104-.789-.311h0zm-.161-3.354c-.018-.328.011-.619.086-.871a1.76 1.76 0 0 1 .396-.691c.189-.207.441-.404.755-.591.292-.173.523-.333.691-.478s.287-.3.355-.462.103-.347.103-.557v-.014a1.05 1.05 0 0 0-.164-.581 1.1 1.1 0 0 0-.455-.393c-.194-.093-.42-.14-.68-.14s-.488.053-.684.157a1.22 1.22 0 0 0-.465.431c-.113.183-.177.39-.191.622l-.007.055H.712l.007-.062c.018-.538.158-1.016.42-1.435S1.776.592 2.263.348s1.081-.366 1.778-.366c.652 0 1.221.114 1.706.338s.863.536 1.135.93.406.853.406 1.378v.014c0 .51-.123.951-.369 1.323s-.611.698-1.094.98c-.301.178-.535.341-.704.489a1.33 1.33 0 0 0-.356.464c-.068.163-.102.351-.102.565v.28H2.845l-.014-.39z'
            fill='#fff'
            fillRule='evenodd'
          />
        </svg>
      </i>
    </div>
  );
}
