import styled from 'styled-components';

export const AreaHeader = styled.div`
    heigth: 60px;
    width: 100%;
    background-color: #E3B700;
    color: #000;
    box-shadow: 0 2px 2px black;


    .container{
        display: flex;
        align-items: center;
        padding: 0 20px;
        font-size: 13px;

        .menu-principal {

            ul {
                display: flex;
                padding: 0;

                li {
                    cursor: pointer;
                    list-style: none;
                    padding: 0 5px;
                    margin-left: 5px;
                }
            }
        }

        .menu-usuario {
            text-align: right;
            flex: 1;

            ul {
                display: flex;
                align-items: center;
                justify-content: flex-end;

                li {
                    margin: 5px;
                    list-style: none;
                }
            }
            
        }

        .sair {
            border-left: 1px inset grey;
            padding-left: 5px;
            margin: 0 5px;
            ul{
                align-items: center;
                padding-left: 10px;
                display: flex;

                li {
                    list-style: none;
    
                    a {
                        color: #000;
                        text-decoration: none;
                        display: flex;
                        align-items: center;
    
                        &:hover {
                            color: #4a4948;
                        }
                    }
                }
            }
        }

    }

    .header-icon {
        width: 30px;
        cursor: pointer;
    }

    // #label-btn-menu {
    //     padding: 5px;
    //     background-color: #E3B700;
    //     color: #000;
    //     text-align: center;
    //     font-size: 30px;
    //     cursor: pointer;
    //     width: 50px;
    //     height: 50px;
    // }

    // @media(max-width: 800px) {
    //     .menu-principal {
    //         ul {
    //             li {
    //                 width: 100%;
    //                 float: left;
    //             }
    //         }
    //     }
    // }
`;


