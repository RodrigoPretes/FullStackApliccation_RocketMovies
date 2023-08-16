import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;


  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content";
  >main {
    grid-area: content;
    overflow-y: auto;
    
  }
  `;

  export const Form = styled.form`
    width: 1137px;
    margin: 38px auto;
    
    > header {
      align-items: center;
      justify-content: space-between;

      margin-bottom: 36px;
  
      
    }
    a{
        font-size:20px;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    h1{
      margin-top: 20px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      display:block;
    }
    h2{
      margin-bottom: 25px;
    }
    .tag{
      display:flex;
      justify-content: space-between;
      gap: 40px;
     
    }
    .tags{
      margin-top: 25px;
      display:flex;
      background-color: ${({ theme }) => theme.COLORS.BLACK};
      border-radius: 10px;
      width: 100%;
      height: 88px;
      padding: 16px;
      margin-bottom: 40px;
    }
    Button{
      font-weight: 700;
    }
    .ActionButton{
      background-color: ${({ theme }) => theme.COLORS.BLACK}; 
      color: ${({ theme }) => theme.COLORS.PINK}; 
      width: 100%;
    

      height: 56px;
      border: none;
      padding: 0 16px;
      margin-bottom: 16px;
      border-radius: 10px;
      font-weight: 700;
      font-size: 16px;

      
      display:flex;
      align-items: center;
      justify-content: center;
      &:disabled{
          opacity: 0.5;
          cursor: pointer;
      }
    }
  `;