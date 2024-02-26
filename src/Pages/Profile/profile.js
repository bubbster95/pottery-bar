import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";

import { logOutUser, addUserData, getUserInfo } from "../../firebase";
import { getLocalProfile } from "../../helpers";
import { useAuth } from "../../Contexts/AuthContexts";

import EditProfile from "./edit-profile";

import './profile.scss'

const Profile = () => {
    const { currentUser } = useAuth()
    const [editProfile, setEditProfile] = useState(false);
    const [profile, setProfile] = useState('');

    useEffect(() => {
        const populateProfile = async () => {
            let data = await getLocalProfile()
            if (data === null) { 
                data = await getUserInfo(currentUser.uid, true)
            }
            setProfile(data)
        }
        populateProfile()
    }, [currentUser])

    const saveProfile = (data) => {
        setEditProfile(false)
        setProfile(data)
        addUserData(profile.uid, data)
    }

    return <div className="profile">
        <h2 className="center">Welcome Back {profile.first_name} {profile.last_name}</h2>

        {editProfile ? 
            <div className="edit-profile">
                <EditProfile profile={profile} submitHandler={saveProfile}/>
            </div>
            : <div className="profile-wrapper">
                <h2>Profile Info</h2>
                <p><b>First:</b> {profile.first_name && profile.first_name}</p>
                <p><b>Last:</b> {profile.last_name && profile.last_name}</p>
                <p><b>Email:</b> {profile.email && profile.email}</p>
                <p><b>Bio:</b> {profile.bio && profile.bio}</p>

                <button className="button" onClick={() => setEditProfile(true)}>Edit Profile</button>

                {(profile.level === 'cosmic' ||profile.level === 'admin') && <Link className="button"  to='/backend'>Edit Website</Link>}
            </div>
        }
        <button className="button" onClick={logOutUser}>Sign Out</button>
    </div>
};

export default Profile;