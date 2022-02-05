import styled from "styled-components";

export const Topten = styled.div<{theme: string}>`
    a {
        text-decoration: none;
        color: #FFF
    }
    
    border-radius: 5px;
    background: ${props => props.theme === 'light' ? 'hsl(0, 0%, 98%)' : '#1b1a1d'};
    transition: ãll ease 0.2s;
    padding: 10px;
    .title {
        display: flex;
        justify-content: space-between;
        width: 100%;
        color: ${props => props.theme === 'light' ? '#000' : '#fff'};
        transition: ãll ease 0.2s;
        img {
            width: 24px;
            height: 24px
        }
    }
    .coin--datas {
        color: ${props => props.theme === 'light' ? '#000' : '#fff'};
        transition: ãll ease 0.2s;
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