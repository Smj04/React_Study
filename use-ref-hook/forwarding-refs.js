import React, { useRef, forwardRef } from 'react'
import ReactDOM from 'react-dom'

const FancyButton = forwardRef(function(props, ref) {
    const divStyle = { display: "inline", background: "#4267B2", color: "white", borderRadius: "5px" }

    return (
        <div style={divStyle}>
            <span>๐</span>
            {/* ๋ด๋ถ์ ์๋ ๋ฒํผ์ ref๋ฅผ ์ฐ๊ฒฐํ ๊ฒ์ ์ ์ */}
            <button
                ref={ref}
                className="FancyButton"
                onClick={props.onClick}>
                {props.children}
            </button>
        </div>
    )
})

const UsingFancyButtonComponent = function(props) {
    // ๊ธฐ์กด ๋ฐฉ์๊ณผ ๋์ผํ๊ฒ ref ๊ฐ์ฒด ์์ฑ
    const fancyButtonRef1 = useRef()
    const fancyButtonRef2 = useRef()

    return (
        <div>
            {/*
                ๋ถ๋ชจ ์ปดํฌ๋ํธ์์ ref ๊ฐ์ฒด ์์ฑ ํ ์์ ์ปดํฌ๋ํธ๋ก ์ ๋ฌํ๊ธฐ(forwarding)
                (์ฌ๊ธฐ์ ref๋ฅผ ํตํด ์ ๊ทผํ๋ ์์๋ FancyButton์ด ์๋, FancyButton ๋ด๋ถ์ button ์์์์ ์ ์)
            */}
            <FancyButton ref={fancyButtonRef1} onClick={()=>{
                /*
                    ์ดํ์๋ ref ๊ฐ์ฒด๋ฅผ ํตํด ์ปดํฌ๋ํธ ๋ด๋ถ์ DOM์ ์ง์  ์ ๊ทผ ๊ฐ๋ฅ
                    (๋จ, ์ฌ๊ธฐ์ ์ฐธ์กฐํ๋ current ๊ฐ์ FancyButton ์ปดํฌ๋ํธ๊ฐ ์๋๋ผ FancyButton ๋ด๋ถ์ button ์์์์ ์ ์!)
                */
                fancyButtonRef2.current.disabled = true
                setTimeout(() => {
                    fancyButtonRef2.current.disabled = false
                }, 1000)
            }}>Disable Button 2</FancyButton>
            <br />
            <FancyButton ref={fancyButtonRef2} onClick={()=>{
                fancyButtonRef1.current.disabled = true
                setTimeout(() => {
                    fancyButtonRef1.current.disabled = false
                }, 1000)
            }}>Disable Button 1</FancyButton>
        </div>
    )
}

ReactDOM.render(<UsingFancyButtonComponent />, document.getElementById("root"))