import React, { useEffect, useRef } from "react";
import { replaceGymDB } from "../../firebase";
import { oldGyms } from '../../config';

import './test.scss';

const Test = () => {
    const gymRef = useRef();

    const replaceDB = (e) => {
        e.preventDefault()

        const gymDB = oldGyms[gymRef.current.value];
        replaceGymDB(gymDB, gymRef.current.value)
    }

    const clearLocal = () => {
        localStorage.clear()
        console.log('Storage Cleared', localStorage)
    }

    useEffect(() => {
    }, [])

    return <>
        <h2>** Cosmic Tier Admin Zone **</h2>


        <h3>Fair warning</h3>

        <p>Typing a gyms tag in the input and clicking "Replace GYM DB" replaces that gyms live database.
            <br></br>
            There is no undo button or version control.
            <br></br>
            Only use this feature if you know what it does.
        </p>
        
        <form onSubmit={(e) => replaceDB(e)}>
            <h3>Replace Single Location DB</h3>
            <label htmlFor="gym">Input gym tag</label>
            <input id='gym' type='text' placeholder="exp: rsc" ref={gymRef}/>
            <button type='submit' className="button warning">*! Replace GYM DB !*</button>
        </form>
        <br></br>

        <h3>Clear Local Storage</h3>
        <button className="button" onClick={clearLocal}>Clear Local Storage</button>
    </>
}

export default Test