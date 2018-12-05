const gutterWidth = 2; // rem
const outerMargin = 4; // rem

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

const containerWidths = {
  md: 768,
  lg: 1000
};

const screenSizes = {
  xs: `${breakpoints.xs}px`,
  sm: `${breakpoints.sm}px`,
  md: `${breakpoints.md}px`,
  lg: `${breakpoints.lg}px`
};

const screenRanges = {
  sm: `(min-width: ${screenSizes.xs}) and (max-width: ${screenSizes.md})`,
  'sm-only': `(min-width: ${screenSizes.xs}) and (max-width: ${screenSizes.sm})`,
  md: `(min-width: ${screenSizes.md}) and (max-width: ${screenSizes.lg})`,
  'md-up': `(min-width: ${screenSizes.md})`,
  'md-down': `(max-width: ${screenSizes.lg})`,
  'lg-up': `(min-width: ${screenSizes.lg})`
};

const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '1rem',
  4: '1.5rem',
  5: '2rem',
  6: '3rem',
  7: '4rem',
  8: '5rem',
  9: '6rem'
};

const margins = {
  xxxl: '89px',
  xxl: '55px',
  xl: '34px',
  lg: '21px',
  md: '13px',
  nm: '8px',
  sm: '5px',
  0: '0'
};

const weights = {
  light: '300',
  normal: '400',
  bold: '700'
};

const colors = {
  primary: '#253146',
  primaryOpaque: 'rgba(37, 49, 70, 0.6)',
  primaryHover: '#bf2121',
  accent: '#DD9071',
  accentContrast: '#FFF',
  error: '#F44336',
  white: 'rgba(255, 255, 255, 1)',
  black: 'rgb(37, 34, 32)',
  bronze: '#DD9071',
  silver: '#929191',
  gold: '#F5BF5F'
};

const fontSizes = {
  mobile: {
    xxxl: '2.5rem',
    xxl: '2.1rem',
    xl: '1.75rem',
    lg: '1.45rem',
    md: '1.2rem',
    nm: '1rem',
    sm: '0.94rem',
    xs: '0.71rem'
  },
  medium: {
    xxxl: '3.5rem',
    xxl: '2.8rem',
    xl: '2.25rem',
    lg: '1.8rem',
    md: '1.45rem',
    nm: '1.15rem',
    sm: '0.94rem',
    xs: '0.71rem'
  },
  regular: {
    xxxl: '5.2rem',
    xxl: '3.9rem',
    xl: '2.9rem',
    lg: '2.2rem',
    md: '1.66rem',
    nm: '1.25rem',
    sm: '1rem',
    xs: '0.71rem'
  }
};

const radius = {
  sm: '3px',
  nm: '5px',
  md: '8px',
  lg: '13px',
  xl: '21px',
  round: '50%'
};

const defaultTheme = {
  gutterWidth: `${gutterWidth}rem`,
  outerMargin: `${outerMargin}rem`,
  gutterCompensation: `${(gutterWidth / 2) * -1}rem`,
  halfGutterWidth: `${gutterWidth / 2}rem`,
  breakpoints,
  containerWidths,
  screenSizes,
  screenRanges,
  colors,
  spacing,
  margins,
  radius,
  weights,
  fontSizes
};

export default defaultTheme;
