import styled from "styled-components";

export const News = styled.div`
    background: #1b1a1d;
    border-radius: 5px;
    padding: 10px;

    a {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        text-decoration:  none;
        color: #FFF;
        .title {
            display: flex;
            h4 {
                margin: 0px
            }
            img {
                width: 100px;
                height: 100px;
                margin-left: 5px
            }
        }

        .description p{
            font-size: 14px
        }
        
        .provider--data {
            display: flex;
            justify-content: space-between;
            align-items: center;
            small {
                font-size: 12px
            }
            .provider--name {
                display: flex;
                align-items: center;
                img {
                    width: 30px;
                    height: 30px;
                    margin-right: 5px
                }
            }
        }
    }
`