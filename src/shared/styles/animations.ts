import { keyframes } from 'styled-components';

// ZOOM
export const zoomIn = keyframes`
  from{
    opacity: 0;
    transform: scaleX(0) scaleY(0);

  }

  to{
    opacity: 100;
  }
`;

export const zoomOut = keyframes`
  from{
    opacity: 100;
  }

  to{
    opacity: 0;
    transform: scaleX(0) scaleY(0);
  }
`;

// FADE
export const fadeIn = keyframes`
  from{
    opacity: 0;
  }

  to{
    opacity: 100;
  }
`;

export const fadeOut = keyframes`
  from{
    opacity: 100;
  }

  to{
    opacity: 0;
  }
`;

export const displayNone = (element: HTMLUnknownElement, timeout: number) => {
  setTimeout(() => {
    element.style.display = 'none';
  }, timeout);
};

// LEFT TO RIGTH
export const rigthIn = keyframes`
  from{
    left: -100%;
  }

  to{
    left: 0%;
  }
`;

export const rigthOut = keyframes`
  from{
    left: 0%;
  }

  to{
    left: -100%;
  }
`;

// RIGTH TO LEFT
export const leftIn = keyframes`
  from{
    right: -100%;
  }

  to{
    right: 0%;
  }
`;

export const leftOut = keyframes`
  from{
    right: 0%;
  }

  to{
    right: -100%;
  }
`;

// BOTTOM TO TOP
export const topIn = keyframes`
  from{
    bottom: -100%;
  }

  to{
    bottom: 0%;
  }
`;

export const topOut = keyframes`
  from{
    bottom: 0%;
  }

  to{
    bottom: -100%;
  }
`;

// TOP TO BOTTOM
export const bottomIn = keyframes`
  from{
    top: -100%;
  }

  to{
    top: 0%;
  }
`;

export const bottomOut = keyframes`
  from{
    top: 0%;
  }

  to{
    top: -100%;
  }
`;
