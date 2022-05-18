const spacings = {
  medium: '1em',
  small: '0.5em',
  smaller: '0.25em',
};

const fontSizes = {
  medium: '1em',
  large: '2em',
};

const colors = {

};

const cardBorder = `
  border: 1px gray solid;
  border-radius: 4px;
`;

function flex(
  direction = 'row',
  justifyContent = 'center',
  alignItems = 'center',
): string {
  return `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `;
}

export {
  spacings, colors, fontSizes, cardBorder, flex,
};
