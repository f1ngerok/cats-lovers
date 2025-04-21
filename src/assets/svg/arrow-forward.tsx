import type { FC, RefObject, SVGProps } from 'react';

interface ArrowForwardIconProps extends SVGProps<SVGSVGElement> {
  ref?: RefObject<SVGSVGElement | null>;
}

export const ArrowForward: FC<ArrowForwardIconProps> = props => {
  return (
    <svg
      {...props}
      height='24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      <path
        d='M20.7 12.7L14.7 18.7C14.5 18.9 14.3 19 14 19C13.7 19 13.5 18.9 13.3 18.7C12.9 18.3 12.9 17.7 13.3 17.3L17.6 13H4C3.4 13 3 12.6 3 12C3 11.4 3.4 11 4 11H17.6L13.3 6.7C12.9 6.3 12.9 5.7 13.3 5.3C13.7 4.9 14.3 4.9 14.7 5.3L20.7 11.3C20.8 11.4 20.9 11.5 20.9 11.6C21 11.8 21 12.1 20.9 12.4C20.9 12.5 20.8 12.6 20.7 12.7Z'
        fill='currentColor'
      />
      <mask
        height='14'
        id='mask0_5_3205'
        maskUnits='userSpaceOnUse'
        style={{ maskType: 'luminance' }}
        width='18'
        x='3'
        y='5'
      >
        <path
          d='M20.7 12.7L14.7 18.7C14.5 18.9 14.3 19 14 19C13.7 19 13.5 18.9 13.3 18.7C12.9 18.3 12.9 17.7 13.3 17.3L17.6 13H4C3.4 13 3 12.6 3 12C3 11.4 3.4 11 4 11H17.6L13.3 6.7C12.9 6.3 12.9 5.7 13.3 5.3C13.7 4.9 14.3 4.9 14.7 5.3L20.7 11.3C20.8 11.4 20.9 11.5 20.9 11.6C21 11.8 21 12.1 20.9 12.4C20.9 12.5 20.8 12.6 20.7 12.7Z'
          fill='white'
        />
      </mask>
      <g mask='url(#mask0_5_3205)'>
        <path
          clipRule='evenodd'
          d='M0 0H24V24H0V0Z'
          fill='currentColor'
          fillRule='evenodd'
        />
      </g>
    </svg>
  );
};
