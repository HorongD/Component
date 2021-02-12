const size = {
  sMobile: 320,
  mobile: 480,
  tablet: 600,
  desktop: 960,
  largeScreen: 1280,
  extraLargeScreen: 1920,
};

export const device = {
  xs: 'min-width: 0px', // material-ui xs
  sMobile: `(min-width: ${size.sMobile}px)`,
  mobile: `(min-width: ${size.mobile}px)`,
  sm: `(min-width: ${size.tablet}px)`, // material-ui sm
  md: `(min-width: ${size.desktop}px)`, // material-ui md
  lg: `(min-width: ${size.largeScreen}px)`, // material-ui lg
  xl: `(min-width: ${size.extraLargeScreen}px)`, // material-ui xl
};
