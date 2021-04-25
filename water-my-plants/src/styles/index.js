import React from 'react';
import styled from 'styled-components';

const Styled = styled.div `
    background-color: #88B66F;
    height: 100vh;

    img {
        width: 600px;
        height: 600px;
        margin-top: 10%; 
        
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
    
`


export default Styled;