import styled from "styled-components";

export const GlobalStats = styled.div<{theme: string}>`
    color: ${props => props.theme === 'light' ? '#000' : '#fff'};
    h3 {
        font-size: 14px;
        font-weight: 500;
        margin: 10px 0px
    }
    p {
        font-size: 25px;
        font-weight: 300;
        margin: 5px 0px
    }
`