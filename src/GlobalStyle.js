import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* color: var(--black); */
    }
    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;
        height: 100%;
        width: 100%;
    }
    *, button, input {
        border: 0;
        background: none;
    }
    html {
        background: var(--blog-background);
    }
    /* :root {
        --main: #8F223A;
        --white: #ffffff;
        --black: #000000;
        --dark: #191414;
        --title: #333;
        --light-blue: #0274b6;
        --toka-dark: #0059B3; 
        --light: #fafafa;
        --grey: #f5f5f5;
        --dark-grey: #979797;
        --outline: #c6c6c6;
        --red: #ff5c00;
        --blog-background: #FFF1E5;
        --background: #FFF1E5;
    } */
    :root {
        --main: #22458f;
        --white: #ffffff;
        --black: #000000;
        --dark: #191414;
        --title: #333;
        --light-blue: #0274b6;
        --toka-dark: #0059B3; 
        --light: #fafafa;
        --grey: #f5f5f5;
        --dark-grey: #979797;
        --outline: #c6c6c6;
        --red: #ff5c00;
        --blog-background: #ffffff;
        --background: #F5F8FA;
    }
    /* :root {
        --main: #22458f;
        --white: #ffffff;
        --black: #000000;
        --dark: #191414;
        --title: #333;
        --light-blue: #0274b6;
        --toka-dark: #0059B3; 
        --light: #fafafa;
        --grey: #f5f5f5;
        --dark-grey: #979797;
        --outline: #c6c6c6;
        --red: #ff5c00;
        --blog-background: #ffffff;
        --background: #F5F8FA;
    } */
`;