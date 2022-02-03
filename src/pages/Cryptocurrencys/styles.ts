import styled from "styled-components";

export const Cryptocurrencies = styled.main`
    min-height: 100vh;
    padding: 120px 0px;
    background: #141316;
    color: #FFF;

    .container {
        width: 1024px;
        margin: auto;
        .input--area {
            display: flex;
            justify-content: center;
            
            input {
                outline: 0;
                padding: 10px 20px;
                font-size: 14px;
                background: #1b1a1d;
                border: 0;
                color: #FFF;
            }
        }
    }

    .coins--area {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        padding: 20px 0px
    }

    @media(max-width: 1024px) {
        .container {
            width: 100%;
            padding: 10px
        }
    }

    @media(max-width: 800px) {
        .coins--area {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media(max-width: 650px) {
        .coins--area {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media(max-width: 510px) {
        .coins--area {
            grid-template-columns: 1fr;
        }
    }

`