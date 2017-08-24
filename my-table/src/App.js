import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// 测试数据
var _score = [
    {name: '张三', gender: '男', chinese: 85, math: 98, _id:0},
    {name: '张三', gender: '女', chinese: 95, math: 90, _id:1},
    {name: '李四', gender: '男', chinese: 65, math: 48, _id:2},
    {name: '大妹', gender: '女', chinese: 95, math: 100, _id:3},
    {name: '王五', gender: '男', chinese: 75, math: 88, _id:4},
    {name: '赵钱', gender: '男', chinese: 75, math: 98, _id:5},
    {name: '二妹', gender: '女', chinese: 90, math: 98, _id:6}
];
class App extends Component {
  constructor(){
    super();
    this.state={
      gender:0,
      name:null,
      datas:[]
    }
  }
  getGender(gender){
   /*this.state.gender=gender*/
   this.setState({gender:gender})
  }
  getName(name){
   /*this.state.name=name*/
   this.setState({name:name})
  }
  render(){
    return(
      <div>
        <GenderFilter ongetgender={this.getGender.bind(this)} />
        <NameFilter ongetname={this.getName.bind(this)}/>
        <TableRender datas={_score} gender={this.state.gender} name={this.state.name} />
      </div>
      )
  }
}
export default App;

class GenderFilter extends Component{
  changeGender(e){
      var selectDom=e.target;
      var selectIndex=selectDom.selectedIndex;
      var selectVal=selectDom.options[selectIndex].value;
      this.props.ongetgender(selectVal)

  }
  render(){
    return(
      <select onChange={this.changeGender.bind(this)}>
        <option value="0">全部</option>
        <option value="1">男</option>
        <option value="2">女</option>
      </select>
      )
  }
}
class NameFilter extends Component{
  changeName(e){
     var inputVal=e.target.value;
     this.props.ongetname(inputVal)
  }
  render(){
    return (
      <input onChange={this.changeName.bind(this)} placeholder="请输入姓名"/>
      )
  }
}
class TableRender extends Component{
constructor() {
  super()
  this.state = {
    gender: 0,
    name: null,
    scores: []
  }
}
componentWillReceiveProps(nextProps) {
  console.log(nextProps)
    let scores=[];
    let gender=nextProps.gender;
    let name=nextProps.name;

    let genderArr=["","男","女"];
    _score.map(function(item){
      if (gender!=0&&!name) {
        if (genderArr[gender]==item.gender) {
          scores.push(item)
        }
      }
      else if(gender==0&&name){
        if (name==item.name) {
          scores.push(item)
        }
      }else if (gender!=0&&name) {
        if (genderArr[gender]==item.gender&&name==item.name) {
          scores.push(item)
        }
      }
      else{
        scores.push(item)
      }
    })
     this.setState({scores:scores})
}
componentWillMount(){
  this.setState({scores:_score})

}

  render(){

    return(
    <table>
      <thead>
        <tr>
          <th>id </th>
          <th>name</th>
          <th>gender</th>
          <th>chinese</th>
          <th>math</th>
        </tr>
      </thead>
      <tbody>
        {this.state.scores.map(function(item,index){

            return(
              <tr key={index}>
                <td>{item._id} </td>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.chinese}</td>
                <td>{item.math}</td>
              </tr>
              )
          })}
      </tbody>
    </table>
    )
  }
}
