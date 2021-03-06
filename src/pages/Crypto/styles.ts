import styled from "styled-components";

export const Crypto = styled.main`
    min-height: 100vh;
    padding: 120px 0px;
    background: ${props => props.theme === 'light' ? 'hsl(0, 0%, 94%)' : '#141316'};
    color: ${props => props.theme === 'light' ? '#000' : '#fff'};
    transition: all ease 0.2s;

    .container {
        width: 1024px;
        margin: auto;

        .header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center
        }

        .select--area {
            select {
                outline: 0;
                padding: 10px 20px;
                font-size: 14px;
                background: ${props => props.theme === 'light' ? '#FFF' : '#1b1a1d'};
                border: 0;
                color: ${props => props.theme === 'light' ? '#000' : '#fff'};
            }
        }

        .crypto--data {
            display: flex;
            justify-content: space-between;
            .statistics--title {
                margin-bottom: 20px
            };

            .statistics .data, .other--statistics .data{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-right: 20px;
                height: 60px;
                border-bottom: 1px solid #555;
                h5 {
                    font-weight: normal
                }
                small {
                    font-weight: bold;
                    margin-left: 3px
                }
            }
        }

        .crypto--info {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 40px;

            .desc a{
                text-decoration: none
            }

            .crypto--links .bitcoin--links {
                .links--area {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-bottom: 1px solid #555;
                    height: 80px;

                    .type {
                        font-weight: bold
                    }
                    .type:first-letter {
                        text-transform: capitalize;
                    }
                    .name {
                        text-decoration: none;
                        color: ${props => props.theme === 'light' ? '#000' : '#fff'};;
                        font-weight: 300;
                        transition: all ease 0.2s;
                    }
                    .name:hover {
                        color: #aaa;
                    }
                }
            }
        }
    }

    @media(max-width: 1024px) {
        .container {
            width: 100%;
            padding: 20px
        }
    }

    @media(max-width: 669px) {
        .header {
            margin-bottom: 20px
        }
    }

    @media(max-width: 565px) {
        .select--area {
            display: flex;
            flex-direction: column;
            justify-content: center;

            select {
                margin: 20px 0px
            }
        }
        .crypto--data {
            flex-direction: column
        }

        .container .crypto--info {
            grid-template-columns: 1fr;
        }
    }

    @media(max-width: 478px) {
        .header small {
            text-align: center
        }
    }
`