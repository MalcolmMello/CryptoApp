import styled from "styled-components";

export const Topten = styled.div`
    a {
        text-decoration: none;
        color: #FFF
    }
    
    border-radius: 5px;
    background: #1b1a1d;
    padding: 10px;
    .title {
        display: flex;
        justify-content: space-between;
        width: 100%;
        img {
            width: 24px;
            height: 24px
        }
    }
    .coin--datas {
        p {
            font-weight: 500
        }
        span {
            font-size: 15px;
            font-weight: 300
        }
        .red {
            color: red
        }
        .green {
            color: green
        }
    }
`