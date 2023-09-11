import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    grid-area: header;

    height: 116px;

    width: 100%;
    
    

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY};

    display: flex;
    //justify-content: space-between;
    align-items: center;

    padding: 0 80px;

    background: ${({ theme }) => theme.COLORS.ALMOST_BLACK};


    > h1 {
        color: ${( {theme}) => theme.COLORS.PINK};
    }
    > div{
    margin: 0 36px;
    display: flex;
    align-items: start; 
    text-align: start;
    flex-direction: column;
    line-height: 24px;


    a{
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      background:none;
     
    }

    strong{
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
    
`;
export const Search = styled.div`
    margin: 30px; 
    width: 50%;
`;

export const Profile = styled(Link)`
  
  > img{
    width: 56px;
    height: 56px;
    border-radius: 50%;

  }
 
`;
