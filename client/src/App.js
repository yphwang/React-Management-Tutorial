import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { withStyles } from '@mui/material';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacig.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})


const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday' : '660326',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name': '류관순',
    'birthday' : '010326',
    'gender' : '여자',
    'job' : '독립운동가'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name': '이순신',
    'birthday' : '110326',
    'gender' : '남자',
    'job' : '해군사령관'
  }
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>     
              <TableCell>사진</TableCell>     
              <TableCell>이름</TableCell>     
              <TableCell>생년월일</TableCell>     
              <TableCell>성별</TableCell>     
              <TableCell>직업</TableCell>                   
            </TableRow>
          </TableHead>
         
          <TableBody>            
             {customers.map(c=> { return ( <Customer key={c.id} id={c.id} name={c.name} image={c.image} birthday={c.birthday} gender={c.gender} job={c.job} /> ); } )}
          </TableBody>

        </Table>
        
        
      </Paper>
    );
  }
}

//export default App;
export default withStyles(styles) (App);
