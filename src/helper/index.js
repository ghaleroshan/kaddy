const BASE_FONT_SIZE = 12;

export const asRem = (fontSize) =>
  `${parseFloat(fontSize) / BASE_FONT_SIZE}rem`;
