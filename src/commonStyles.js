const fullWindowWidth = extra => `
    ${extra};
    width: 100%;
`

const pattern = ({ backgroundColor = "#1a202c", color = "#1d2e51" } = {}) => `
  /* original pattern generated from: https://www.magicpattern.design/tools/css-backgrounds */

  background-color: ${backgroundColor};
  opacity: 1;
  background-image:  linear-gradient(30deg, ${color} 12%, transparent 12.5%, transparent 87%, ${color} 87.5%, ${color}), linear-gradient(150deg, ${color} 12%, transparent 12.5%, transparent 87%, ${color} 87.5%, ${color}), linear-gradient(30deg, ${color} 12%, transparent 12.5%, transparent 87%, ${color} 87.5%, ${color}), linear-gradient(150deg, ${color} 12%, transparent 12.5%, transparent 87%, ${color} 87.5%, ${color}), linear-gradient(60deg, ${color}77 25%, transparent 25.5%, transparent 75%, ${color}77 75%, ${color}77), linear-gradient(60deg, ${color}77 25%, transparent 25.5%, transparent 75%, ${color}77 75%, ${color}77);
  background-size: 24px 42px;
  background-position: 0 0, 0 0, 12px 21px, 12px 21px, 0 0, 12px 21px;
`

export { fullWindowWidth, pattern }
