import React, { useRef }  from "react";

const EditProfile = ({ profile, submitHandler }) => {
    const emailRef = useRef()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const bioRef = useRef()
    
    const saveProfile = (e) => {
        e.preventDefault()

        const data = {
            email: emailRef.current.value,
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
            bio: bioRef.current.value
        }
        submitHandler(data)
    }


    return <> 
        <form className="form">
            {/* First Name Input */}
            <label htmlFor='first-name-input'>First Name</label>
            <input ref={firstNameRef} id='first-name-input' defaultValue={profile.first_name}/>


            {/* Last Name Input */}
            <label htmlFor='last-name-input'>Last Name</label>
            <input ref={lastNameRef} id='last-name-input' defaultValue={profile.last_name}/>
            
            {/* Email Input */}
            <label htmlFor='email-input'>Email</label>
            <input ref={emailRef} id='email-input' defaultValue={profile.email}/>

            {/* Bio Input */}
            <label htmlFor='bio-input'>Bio</label>
            <textarea type='text' ref={bioRef} id='bio-input' defaultValue={profile.bio}/>

            <button className='button' onClick={(e) => saveProfile(e)}>Save Profile</button>
        </form>
    </>
};

export default EditProfile;