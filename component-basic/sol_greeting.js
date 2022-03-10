import ReactDOM from 'react-dom';
const Greeting = function(props){
    return <h1>Hello, {props.name}</h1> //render태그 안 할당할 속성명
}

ReactDOM.render(
<Greeting name ="김미림"/>, //render 태그안에서 props값을 할당
document.getElementById('root'));
