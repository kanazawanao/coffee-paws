export default function MenuIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={25} height={25} fill='none'>
      <mask
        width={25}
        height={25}
        x={0}
        y={0}
        maskUnits='userSpaceOnUse'
        style={{
          maskType: 'alpha',
        }}
      >
        <path fill='#D9D9D9' d='M.5.5h24v24H.5z' />
      </mask>
      <g mask='url(#a)'>
        <path
          fill='#1C1B1F'
          d='M3.5 18.5v-2h18v2h-18Zm0-5v-2h18v2h-18Zm0-5v-2h18v2h-18Z'
        />
      </g>
    </svg>
  );
}
