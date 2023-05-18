import styled from 'styled-components'

const FriendList = styled.ul`
display:block;
text-align: center;
`
const FriendItem = styled.li`
background-color: white;
width: 300px;
box-shadow: 2px 2px 2px 2px black;
border-radius: 8px;
display: flex;
flex-direction: row;
gap: 12px;
align-items: center;
margin: 0 auto;
`
const Status = styled.span`
margin-left: 10px;
width: 10px;
	height: 10px;
	border-radius: 100%;
background-color: ${ props => (props.status ? 'green' : 'red') };`

export const FriendStyle = {
    FriendList,
    FriendItem,
    Status,

}