const colors = {
  GREEN_50: '#F1F4F1',
  GREEN_100: '#E0E6E0',
  GREEN_200: '#C1CDC1',
  GREEN_300: '#A5B6A5',
  GREEN_400: '#869D86',
  GREEN_500: '#698269',
  GREEN_600: '#546854',
  GREEN_700: '#404F40',
  GREEN_800: '#293329',
  GREEN_900: '#151915',
  RED_500: '#AA5656',
  BACKGROUND: '#FCF8F3',
  INPUT_BACKGROUND: '#FEFDFB',
};

const breakpoints = {
  sm: 425,
  md: 768,
  lg: 1024,
  xl: 1440,
};

const screenSizes = {
  mobile: `(max-width: ${breakpoints.sm}px)`,
  tablet: `(max-width: ${breakpoints.md}px)`,
  laptop: `(max-width: ${breakpoints.lg}px)`,
  desktop: `(max-width: ${breakpoints.xl}px)`,
};

const theme = {
  colors,
  breakpoints,
  screenSizes,
};

export default theme;
