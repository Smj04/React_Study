import ReactDOM from 'react-dom';
const Greeting = function(props){
    return <h1>Hello, {props.name}{props.age}</h1> //render태그 안 할당할 속성명
}
/* props. 안쓰고 구조분해 할당
function Greeting({name}){
    return <h1>Hello, {name}</h1>
}*/
//render 태그안에서 props값을 할당
ReactDOM.render(
    <div>
<Greeting name ="김미림"/> 
<Greeting age={20}/>
    </div>,
document.getElementById('root'));
