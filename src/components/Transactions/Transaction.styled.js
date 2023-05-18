import styled from 'styled-components'

const Table = styled.table`
background-color: white;
  width: 50%;
  margin:0 auto;
   border: 1px solid black;
  border-radius: 8px;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: Silver;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: center;
`;


const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 5px;
 border: 1px solid black;
`;


export const TransStyle = {
    Table,
    TableHeader,
    TableHeaderCell,
    TableRow,
    TableCell
}