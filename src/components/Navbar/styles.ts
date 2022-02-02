import styled from "styled-components";

export const Navbar = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    width: 100%;
    position: fixed;
    background: #1b1a1d;
    color: #FFF;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1024px;
        margin: auto
    }

    .logo--area {
        display: flex;
        align-items: center;
        justify-content: space-around;
        img {
            height: 35px;
            width: 35px;
            margin-right: 20px
        }
        h1 {
            font-size: 25px;
            font-weight: 300
        }
    }

    .nav--area {
        display: flex;
        list-style: none;
        padding: 0px 20px;
        margin-top: 30px;
        li a {
            text-decoration: none;
            color: #FFF;
            display: flex;
            align-items: flex-end;
            margin-left: 30px;
            img {
                height: 30px;
                width: 30px;
                margin-right: 30px
            }
            p {
                height: 100%;
                margin: 0px;
            }
        }
    }
`