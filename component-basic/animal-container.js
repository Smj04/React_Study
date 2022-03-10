import ReactDom from 'react-dom';

//제일 정석적인 함수 선언 표현식 컴포넌트 (모든 컴포넌트들은 대문자!)
function Cat(){
    return <div>cat</div>
}

//함수 표현식 컴포넌트
const Dog = function(){
    return <div>dog</div>
}

//화살표 함수 컴포넌트
const Horse = ()=> <div>Horse</div>

//에러 발생! 연속적으로 컴포넌트들을 호출 불가능!
// function AnimalContainer() {
//     return (
//     /* 일반적인 태그 사용 가능 */
//     <div style={{fontSize: "100px"}}>
//     {/* 이미 정의한 컴포넌트들도 JSX 내부에서 사용 가능 */}
//     <Cat />
//     <Dog />
//     <Pig />
//     </div>
//     )
//     }
    
// 에러 해결법
//React.Fragement태그 또는 빈태그<></>
function AnimalContainer(){
    return (
    <React.Fragment> 
        <Cat/>
        <Dog/>
        <Horse/>
        </React.Fragment>
    );
}
ReactDOM.render(<AnimalContainer/>, document.getElementById('root'));