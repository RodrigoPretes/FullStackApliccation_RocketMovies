import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  
`;

export const Content = styled.div`
  width: 1137px;
  height: 100vh;

  overflow-y: auto;
  margin: 38px auto;  
  font-size: 16px;
  header{
    display: flex;
    justify-content: space-between;
    Button{
            width: 207px;
            font-weight: bold;
        }
  }
  a{
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    h1{
      margin-top: 24px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      display:block;
      font-size: 36px;
      margin-right: 9px;
    }
    svg{
      color: ${({ theme }) => theme.COLORS.PINK};
    }

  .star{
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    gap: 10px;
    
    svg{
      margin-top: 24px;  
    }
    
  }
  .Personal{
    display: flex;
    text-align: center;
    align-items: center;
    gap: 8px;
    margin-top: 24px;
    >img{
      width: 16px;
      height: 16px;
      border-radius: 35px;
    }
  }
  .Tags{
    margin: 40px 0;
  }
`;