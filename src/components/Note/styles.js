import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_NOTES} ;

  border: none;
  border-radius: 10px;

  padding: 32px;
  margin-bottom: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  >p{
    color: ${({ theme }) => theme.COLORS.TEXTCOLOR};
    font-size: 16px;
    text-align: justify;
    margin: 15px 0px;
  }
  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }

`;