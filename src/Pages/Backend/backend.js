import React, { useEffect, useState }  from "react";
import { Navigate } from "react-router-dom";
import { checkWhiteList } from "../../firebase";
import { getLocalProfile } from "../../helpers";
import { getUserInfo } from "../../firebase";
import { useAuth } from "../../Contexts/AuthContexts";
import { editorForms } from "../../config";

import Loading from "../Loading/loading";
import Editor from "../../Containers/Editor/editor";
import Test from "../Test/test";

import './backend.scss';

// Checks for whitelist credentials and Boots users without them
// Renders all backend editors for the site.
const Backend = () => {
    const { currentUser } = useAuth();
    const [profile, setProfile] = useState({});
    const [admin, setAdmin] = useState(null);
    const [cosmic, setCosmic] = useState(null);

    useEffect(() => { // Load user profile, check white lists for uid
        const populateProfile = async () => {
            let data = getLocalProfile()
            if (data === null)  data = getUserInfo(currentUser.uid, true)
            setProfile(await data)
        }
        populateProfile()

        const setWhiteLists = async () => {
            setCosmic(await checkWhiteList(currentUser.uid, 'cosmic'));
            setAdmin(await checkWhiteList(currentUser.uid, 'admin'));
        }
        if (currentUser) setWhiteLists()

        return () => {
            setAdmin(false)
            setCosmic(false)
            setProfile({})
        }
    }, [currentUser]);

    // The user must be admin tier or higher to continue
    if (currentUser && admin === true) {
        return <div className="page-content">
            <h2>Welcome To The backend</h2> 

            {editorForms.map(form => { /* Render all editors listied in editorForms array */
            return <div key={form.component + '-editor'} className="editor-container">
                <Editor usersGym={profile.gym} cosmic={cosmic} formConfig={form} />
            </div>
            })}

            {cosmic === true && <Test />}

        </div>
    } else if (currentUser && admin === false) return <Navigate to='/account' />
    else return <Loading />
};

export default Backend;