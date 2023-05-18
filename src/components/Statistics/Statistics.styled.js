import styled from 'styled-components'

const StatSection = styled.section`
background-color: white;
 display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  width: 300px;
  margin:0 auto;
 
   
`
const StatTitle = styled.h2`
  text-align: center;
`
const StatTable = styled.ul`
  width:300px;
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  padding: 0;
`
const StatItem = styled.li`
  flex: 1;
display:flex;
flex-direction:column;
align-items:center;
border: 1px solid #5c5454;
background-color: LightSeaGreen;

`

export const StatisticStyle = {
    StatSection,
    StatTitle,
  StatTable,
   StatItem,
}