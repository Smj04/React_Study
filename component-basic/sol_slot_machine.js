import React from 'react';
import ReactDom from 'react-dom';

const SlotMachine = function(props){
    //
    return <h1>Congrats!</h1>
}

ReactDom.render(
    <><SlotMachine s1="X" s2="Y" s3="Z" />
<SlotMachine s1="X" s2="X" s3="X" />
<SlotMachine s1="7" s2="7" s3="7" />
<SlotMachine s1="🍓" s2="🍒" s3="🍍" />
<SlotMachine s1="🍒" s2="🍒" s3="🍒" />
</>,document.getElementById('root')
)