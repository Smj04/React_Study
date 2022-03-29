import React from 'react';
import ReactDom from 'react-dom';

const Child = props => <div>{props.children}</div>

//div또는 react.fragment태그로 감싸준다 <></>도 가능
ReactDom.render(
   
    <Child>
   <h1>Title</h1>
   <div>React</div>
   <Child>Inner Child</Child>
   </Child>
    , document.getElementById('root')
)