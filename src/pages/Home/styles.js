import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    

`;

export const Content = styled.div`
    padding: 0px 64px;
    
    padding: 0 80px;   
    >section{
        display: flex;
        justify-content: space-between;
        h2{
            font-size: 32px;
        }
        Button{
            width: 207px;
            font-weight: bold;
        }
    }
`;