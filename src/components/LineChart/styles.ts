import styled from "styled-components";

export const Chart = styled.div`
    .coin--data {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .price--info {
            display: flex;
            p {
                font-weight: bold;
                font-size: 15px;
                margin-left: 15px
            }
        }
    }

    @media(max-width: 645px) {
        .coin--data {
            flex-direction: column;
            h1, p {
                margin: 0px;
                margin-bottom: 20px
            }
        }
    }
`