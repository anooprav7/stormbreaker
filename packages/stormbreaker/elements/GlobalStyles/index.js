import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        font-family: ${props => props.theme.fonts.normal};
    }
`;
export default GlobalStyles;
