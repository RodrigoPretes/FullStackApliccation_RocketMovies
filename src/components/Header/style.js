import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    height: 116px;

    width: 100%;
    
    

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 80px;

    background: ${({ theme }) => theme.COLORS.BLACK};


    > h1 {
        color: ${( {theme}) => theme.COLORS.PINK};
    }
    
`;
export const Search = styled.div`
    margin: 30px auto; 
    width: 50%;
`;

export const Profile = styled.div`
  display:flex;
  align-items: center;

  margin-right: 16px;

  > img{
    width: 56px;
    height: 56px;
    border-radius: 50%;

  }
  > div{
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;


    span{
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    strong{
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
