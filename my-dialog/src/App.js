import React, { Component } from 'react';
import logo from './logo.svg';
import header1 from './images/1.jpg';
import header2 from './images/2.jpg';
import header3 from './images/3.jpg';
import './App.css';
let datas=[
  {
    person:"other",
    headerImg:header1,
    say:"水满田畴稻叶齐，日光穿树晓烟低。黄莺也爱新凉好，飞过青山影里啼"
},
  {
    person:"person1",
    headerImg:header3,
    say:"别诗，是抒发诗人离别之情的汉族诗歌。著名的代表人物有李白，王维，王昌龄等。送别诗抒写离情别绪，是分离时迸发的情感火花。要把这种情感火花表达出来，并不是一件容易的事。清代著名诗人袁枚对此深有体会：“凡作诗，写景易，言情难。何也？景从外来，目之所触，留心便得；情从心出，非有一种芬芳悱恻之怀，便不能哀感顽艳。”此段话把情和景截然分开说得不确，但就“言情难”而言，还是有道理的。送别诗要想“感动激发人意”，必须采用一些手法来“言情”。 代表人物：李白、王维、王昌龄、刘长卿、王勃、岑"
},
  { person:"me",
    headerImg:header2,
    say:"heeh"
  }
]
class App extends Component {

  render() {
    return (
      <div className="App">
      {
        datas.map(function(item){
            if (item.person=="me") {
              return(
                <div className="msn-item msn-item_me">
                  <div className="msn-head">
                    <img src={item.headerImg} />
                  </div>
                  <p className="msn-content">{item.say}</p>
                </div>
              )
            }else{
              return(
                <div className="msn-item msn-item_other">
                  <div className="msn-head">
                    <img src={item.headerImg} />
                  </div>
                  <p className="msn-content">{item.say}</p>
                </div>
              )
            }
        })

      }
      </div>
    );
  }
}

export default App;
