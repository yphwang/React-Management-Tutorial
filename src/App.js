import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

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
    return (
      <div>
        {
          customers.map(c=> { return ( <Customer key={c.id} id={c.id} name={c.name} image={c.image} birthday={c.birthday} gender={c.gender} job={c.job} /> ); } )
        }
        
      </div>
    );
  }
}

export default App;
