import { createGlobalStyle } from "styled-components";
import Steiner from "../../fonts/Steinerlight.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Steiner';
  src: url(${Steiner}) format('truetype');
}
`;

export default FontStyles;