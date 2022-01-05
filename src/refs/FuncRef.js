import React, { useRef } from 'react'

function FuncRef() {

    let inputRef = useRef('demo')
    let focusInput=()=>{
        inputRef.current.focus()
    }
    return (
        <div>
            <h2>ref using functional component</h2>
            <input ref={inputRef}/>
            <button onClick={focusInput}>Click to focus</button>
        </div>
    )
}

export default FuncRef