import styled from 'styled-components';

export const Container = styled.span`
    font-size: 12px;
    padding: 5px 12px;
    border-radius: 8px;
    margin-right: 8px;
    background: ${({ theme }) => theme.COLORS.BUTTON_TEXT_COLOR};
    color: ${({ theme }) => theme.COLORS.BUTTON_TEXT_WHITE_COLOR};

`;