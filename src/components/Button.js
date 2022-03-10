import styled from 'styled-components'

const ButtonStyled = styled.button`
    padding: 1rem;
    background-color: ${props=> props.outlined ? "none" : 'rgb(1,174, 255)'};
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: ${props=> props.outlined ? "black" : 'white'};
    transition: .3s;
    margin: ${props=> props.mg ? props.mg : '0'};
    &:hover{
        transform: scale(1.1)
    }
`

function Button({...props}){
    return(
        <ButtonStyled {...props}>{props.children}</ButtonStyled>
    )
}

export default Button