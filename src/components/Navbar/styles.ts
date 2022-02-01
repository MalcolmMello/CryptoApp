import styled from "styled-components";

export const Navbar = styled.nav`
    height: 100vh;
    width: 20vw;
    left: 0px;
    background: #1b1a1d;
    color: #FFF;
    position: fixed;
    padding: 10px;

    .logo--area {
        display: flex;
        align-items: center;
        justify-content: space-around;
        img {
            height: 35px;
            width: 35px;
        }
    }

    .nav--area {
        list-style: none;
        padding: 0px 20px;
        margin-top: 30px;
        li a {
            text-decoration: none;
            color: #FFF;
            display: flex;
            align-items: flex-end;
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