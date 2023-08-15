import styled from 'styled-components';
import backgroundImg from '../../assets/ImgLogin.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

`;
export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;

  //text-align: center;


  >h1{
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  >p{
    margin-bottom: 48px;
  }
  >h2{
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 48px;
  }
  >a{
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};
    cursor: pointer;
    align-items: center;
    text-align: center;
  }
  >Button{
    margin-top: 24px;
  }

`;
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size:cover;
`;