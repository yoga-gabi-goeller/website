import theme from './Theme';

export const margin = (top = 0, right = 0, bottom = 0, left = 0) => {
  return `
    margin: ${theme.spacing[top]} ${theme.spacing[right]} ${theme.spacing[bottom]} ${theme.spacing[left]};
  `;
};

export const flexCenter = () => {
  return `
    display: flex;
    justify-content: center;
    align-items: center;
  `;
};

export const breakpoint = range => {
  return `@media only screen and ${theme.screenRanges[range]}`;
};

export const boxShadow = () => {
  return `
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
  `;
};
