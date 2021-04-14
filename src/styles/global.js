import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --orange-button: #ff2900;
        --orange-writing: #f32404;
        --orange-type2: #f45204;
        --blue-header-desktop: rgba(10,7,66,.9);
        --blue:#030142;
        --purple:#140550;
        --white: #fff;
        --grey:rgba(0,0,0,.7);
        --grey-300: #d7d7d7;
        --grey-100: #f0f2f5;
    }

    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        -webkit-font-smoothing: antialiased; // deixa a fonte mais nitida
    }

    body, input, textarea, button {
        font-family: freight-sans-pro, sans-serif;
        font-style: normal;
        font-weight: 300;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
`;
