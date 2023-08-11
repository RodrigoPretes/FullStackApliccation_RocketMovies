import styled from 'styled-components';

export const Container = styled.button`
     width: 100%;
     background-color: ${({ theme }) => theme.COLORS.PINK};
     color: ${({ theme }) => theme.COLORS.WHITE};

     border:none;
     border-radius: 16px;

     padding: 32px;
     margin-bottom: 24px;
     height: 200px;
   
     >h1{
        color: ${({ theme }) => theme.COLORS.WHITE};
        text-align: left;
        font-weight: 700;
        font-size: 24px;
     }

     opacity: 0.5;
`;