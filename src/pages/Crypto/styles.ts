import styled from "styled-components";

export const Crypto = styled.main`
    min-height: 100vh;
    padding: 120px 0px;
    background: #141316;
    color: #FFF;

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
                background: #1b1a1d;
                border: 0;
                color: #FFF;
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
                        color: #fff;
                        font-weight: 300;
                        transition: all ease 0.2s
                    }
                    .name:hover {
                        color: #aaa
                    }
                }
            }
        }
    }
`