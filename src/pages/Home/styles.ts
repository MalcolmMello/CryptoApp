import styled from "styled-components";

export const Area = styled.main`
    width: calc(100vw - 20vw);
    right: 0px;
    position: absolute;
    background: #141316;
    color: #FFF;
    padding: 10px;

    .global--crypto--stats .crypto--stats--area {
        display: grid;
        grid-template-columns: repeat(2, 1fr)
    }
    .coins--area .top--10--area {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px
    }
    .news--area .news--grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px
    }
`