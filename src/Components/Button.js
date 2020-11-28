import styled from 'styled-components'



export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size:1.5rem;
background: transparent;
border:0.25rem solid #ffbf00;
border-color:${props => props.cart?"var(--mainYellow)":"#00e673"};
color:${prop=> prop.cart?"var(--mainYellow)":"#00e673"};
border-raidus: 0.25rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.2s ease-in-out;
&:hover{
    background:${prop=>prop.cart? "var(--mainYellow)":"#00e673"};
    color:#ffbf00;
}
&:focus{
    outline:none;

}
`;