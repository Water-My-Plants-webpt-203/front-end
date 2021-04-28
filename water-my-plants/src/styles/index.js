import styled from 'styled-components';

const Styled = styled.div `
    .gallery-container {
       padding-top: 1%;  
       height: 98vh;
       margin-right: 5%;
       margin-left: 5%;

       .header {
           display: flex;
           flex-flow: row-nowarp;
           justify-content: space-between;
           border-bottom: 2px solid lightgrey;

           h1 {
               font-family: Palatino, serif;
               color: #88B66F;
           }
       }

       button {
           margin-top: 1em;
           margin-right: 3em;
           font-size: 17px;
           padding-left: 20%;
           padding-right: 20%;
           padding-top: 10%;
           padding-bottom: 10%;
           background-color: #88B66F;
           color: white;
           border: 1px solid #88B66F;
           border-radius: 20px;
       }

       .boxes-container {
           padding-top: 3%;
           display: flex;
           flex-direction: row;
           justify-content: space-evenly;

           @media(max-width: 550px ) {
               flex-direction: column;
           }
       }

       .boxes {
           margin: 2%;

           h1 {
               font-family: Courier, monospace;
           }

           img {
               width: 100%;
               height: 50%;
           }

           .content {
                border: 1px solid lightgrey;
                width: 100%;
           }
       }
    }

    .home {
        background-color: #88B66F;
        height: 100vh;

        img {
            width: 600px;
            height: 600px;
            margin-top: 10%; 
            border-radius: 50%;
        
            @media (max-width: 1600px) {
                margin-top: 12%;
            }

            @media (max-width: 1250px) {
                margin-top: 16%;
            }

            @media (max-width: 1025px) {
                margin-top: 23%;
            }

            @media (max-width: 900px) {
                width: 500px;
                height: 500px;
                margin-top: 24%;
            }

            @media (max-width: 780px) {
                width: 425px;
                height: 425px;
                margin-top: 35%;
            }   
        
            @media (max-width: 600px) {
                width: 400px;
                height: 400px;
                margin-top: 40%;
            } 
        }
    }

    .form-container {
        margin-right: 5%;
        margin-left: 5%;
        
        .header {
            font-family: Palatino, serif;
            color: #88B66F;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 2px solid lightgrey;
            

            img {
                width: 100px;
                height: 90px;
            }
        }

        .plantForm {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            label {
                margin: 2%;
            }

            .button-container { 
                margin-top: 4%;

                @media (max-width: 550px ){
                    margin-top: 6%;
                }
            
                button {
                    padding-right: 5%;
                    padding-left: 5%;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    background-color: black;
                    color: white;
                    border: 1px solid #88B66F;
                    border-radius: 20px;
                    font-size: 27px;
                }
            }    
        }
    }
`


export default Styled;