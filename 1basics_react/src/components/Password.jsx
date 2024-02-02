import React from 'react'
import { useState, useCallback } from "react";


function Password() {
    let [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    let [password, setPassword] = useState("")

    const passowrdGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%^&*()_+~`|?,."

        for (let i = 1; i <= array.length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass = str.charAt(char)
        }
        setPassword(pass)

    }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
    <h1 className='text-3xl text-center'>Password generator</h1>
    </>
  )
}

export default Password