import ReactDom from 'react-dom';
// props를 통해서 전달된 값에 접근 가능
const ComponentWithProps = function(props) {
    console.log(props)
    return <p>{JSON.stringify(props)}</p>
    }
    
{/* 따로 props 전달 타입에 제약이 있는 것은 아니며 다양한 값을 전달 가능 */}
<ComponentWithProps value="Hello" />
{/* 문자열이 아니므로 중괄호를 사용하여 값 전달 */}
<ComponentWithProps value={1} />        //만약 여기서 value = "1"로 저장하면 문자열 1
{/* 보통은 여러 정보를 담을 수 있는 객체를 전달 */}
<ComponentWithProps value={{ a: 1, b: "React" }} />
{/* 필요한 경우 함수, 메서드도 전달 가능 */}
<ComponentWithProps value={() => { }} />
