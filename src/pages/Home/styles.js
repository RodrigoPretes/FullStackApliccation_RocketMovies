import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    /*display: grid;

    grid-template-areas: 
    "header"
    "upper-content"
    "content";*/
    
`;

export const UpperContent = styled.div`
    //grid-area: upper-content;
    padding: 15px 80px;
    justify-content: space-between;

    margin-top: 20px;
    margin-bottom: 20px;

    height: 90px;

    >h1{
        font-size: 32px;
        font-weight: 400;
        color: "#FFFFFF";
    }
    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        >Button{
            width: 207px;
            height: 48px;
        }

    }
`;
export const Content = styled.div`
    //grid-area: content;
    padding: 0px 64px;
    overflow-y: auto;
    padding: 0 80px;   
`;
