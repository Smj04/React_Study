import ReactDom from 'react-dom';

function HelloWorld(){ //컴포넌트는 반드시 대문자로 표기!
    return <h1>Hello, world!</h1>

}
ReactDom.render(<HelloWorld/>, document.getElementById('root'));