import ReactDom from 'react-dom';
// props를 통해서 전달된 값에 접근 가능
// const ComponentWithProps = function(props) {
//     console.log(props)
//     return <p>{JSON.stringify(props)}</p>
//     }
    // 함수 인자값을 전달받으면서 비구조화 할당 진행
const PersonProfile = function({ name, age, gender, profile, highlight }) {
    return (
        <div className='person' style={highlight ? {color: 'red'} : null}>
            <h1>Profile</h1>
            <img src={profile} />
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>gender : {gender}</p>
        </div>
    )
}

const anotherPerson = {
    name : 'Jane',
    age : 28,
    gender : 'femele',
    profile: 'https://randomuser.me/api/portraits/women/75.jpg'
}

const {name, age, gender, ...rest} = anotherPerson
console.log(rest);

//render할때 매개변수에 링크를 넘길 수 있다
ReactDom.render(
    <div>
    <PersonProfile name='John' age={35} gender='male'
    profile='https://randomuser.me/api/portraits/men/75.jpg' />
    </div>, 
   
    document.getElementById('root')
)

