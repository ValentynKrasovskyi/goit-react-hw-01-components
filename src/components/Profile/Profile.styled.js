import styled from 'styled-components'




const Card = styled.div `
display: block;
background-color: white;
text-align: center;
    width: 300px;
    height: 100%;
	border-radius: 8px;
    margin: 10px auto;
	`

const Avatar = styled.div`
display:block;
text-align:center;
`
const Img = styled.img`
 width: 100px;
 height: 100px;
  border-radius: 50%;
   border: 2px solid gray; 
   margin-top: 20px;
`
const UserName = styled.p`
color: black;
font-size: 20;
`
const UserInfo = styled.p`
color:black;
font-size: 24;
`
const List = styled.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
margin: 0 auto;
padding:0;


`
const Item = styled.li`
display:flex;
flex-direction:column;
align-items:center;

`
const Text = styled.span`
margin-bottom:10px;
color: black;
font-weight: bold;
`
export const ProfilStyle = {
   
    Card,
    Avatar,
    List,
    Item,
    Text,
    Img,
    UserName,
    UserInfo
}