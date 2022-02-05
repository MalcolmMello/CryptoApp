import styled from "styled-components";

export const News = styled.div<{theme: string}>`
    background: ${props => props.theme === 'light' ? 'hsl(0, 0%, 98%)' : '#1b1a1d'};
    transition: ãll ease 0.2s;
    border-radius: 5px;
    padding: 10px;

    a {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        text-decoration:  none;
        color: ${props => props.theme === 'light' ? '#000' : '#fff'};
        transition: ãll ease 0.2s;
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