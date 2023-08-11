import styled from 'styled-components';


export const Container = styled.button`

    
    width: 100%;
    background-color: ${( {theme}) => theme.COLORS.PINK};
    color: ${( {theme}) => theme.COLORS.BUTTON_TEXT_COLOR}; 

    height: 56px;
    border: none;
    padding: 0 16px;
    margin-bottom: 16px;
    border-radius: 10px;
    font-weight: 400;
    font-size: 16px;

    

    &:disabled{
        opacity: 0.5;
        cursor: pointer;
    }
`;