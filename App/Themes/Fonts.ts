const type = {
  base: "Raleway",
  bold: "Raleway-Bold",
  emphasis: "HelveticaNeue-Italic",
};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5,
};

const lineHeights = {
  h1: 40,
  h2: 32,
  h3: 24,
  h4: 24,
  h5: 24,
  h6: 14,
  xlarge: 32,
  large: 24,
  medium: 24,
  list: 30,
  tiny: 18,
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
  },
  h2: {
    fontFamily: type.bold,
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.base,
    fontSize: size.h6,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  boldDescription: {
    fontFamily: type.bold,
    fontSize: size.medium,
  },
};

export default {
  type,
  size,
  style,
  lineHeights,
};
