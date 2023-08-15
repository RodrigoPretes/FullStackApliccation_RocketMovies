import styled from 'styled-components';


export const Container = styled.div`
  display:flex;
  >svg{
    background-color: ${( {theme}) => theme.COLORS.PINK};
    color: ${( {theme}) => theme.COLORS.PINK};
  }
`;