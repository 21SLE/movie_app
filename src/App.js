import React from 'react';
import Proptypes from "prop-types";

// const foodILike = [
//   {
//     id:1,
//   name: "Kimchi",
//   image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
//   rating: 5
//   },
//   {
//     id:2,
//   name: "bulgogi",
//   image: "  https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
//   rating: 4
//   },
//   {
//     id:3,
//   name: "kimbap",
//   image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
//   rating: 3
//   },
//   {
//     id:4,
//   name: "samgyetang",
//   image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
//   rating: 5
//   }
// ];

// function Food({name, picture, rating}) {
//   //{name} = props.name
//   return <div>
//     <h2>I like {name}</h2>
//     <h4>{rating} /5.0</h4>
//     <img src={picture}></img>
//   </div>
// }

// Food.propTypes ={
//   name: Proptypes.string.isRequired,
//   picture: Proptypes.string.isRequired,
//   rating: Proptypes.number.isRequired,
  

// };

// function renderFood(dish) {
//   return <Food key ={dish.id} name={dish.name} picture ={dish.image} rating ={dish.rating}/>;
// }

// function App() {
//   return (
//     <div className="App">
//     {foodILike.map(renderFood)}
//     </div>
//   );
// }

// function component(위에거)는 function이고 뭔가를 return하여 screen에 표시된다.
// class component는 class이고 react component로 부터 확장되고 screen에 표시된다.

class App extends React.Component {
  state = {
    // state는 object이다. 여기에 변하는 데이터를 넣으면 됨.
    count: 0
  }

  // 이 함수는 리액트 코드가 아니고 자바스크립트 코드임
  add = () => {
    //이런식으로 state를 직접 변경하면 절대 안됨. 
    // this.state.count = 1; // 이런식으로 하면 리액트는 render function을 다시 부르지 않기 때문
    this.setState(current => ({count: current.count+1}));
    //state는 object이므로 setState에 state를 새로 줘야함

  }; 
  minus = () => {
    this.setState(current => ({count: current.count-1}));
    // 현재 state 상태를 current로 가져와서 이렇게 this.state.count로 직접 안쓰는게 좋음
  }; 

  // react는 자동적으로 class component의 render method를 실행한다.
  render() {
    return <div>
      <h1>Im a class {this.state.count}</h1>
      <button onClick={this.add}>Add</button> 
      <button onClick={this.minus}>Minus</button>
    </div>
// 자바스크립트에선 이벤트리스너를 등록해줬어야했는데 리액트에선 이렇게 onClick으로 간단하게 할 수 있다.
  }
  
}

export default App;
