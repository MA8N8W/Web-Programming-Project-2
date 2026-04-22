import React, { useState, useEffect } from "react";

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                props.updateUser(user.id, user);
            }}
        >
            <div className="form">
                <div className="singleline">
                    <fieldset>
                        <legend>Name</legend>
                        <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
                    </fieldset>
                    <fieldset className="spacer"/>
                    <fieldset>
                        <legend>Username</legend>
                        <input type="text" name="username" value={user.username} onChange={handleInputChange}/>
                    </fieldset>
                </div>
                <br/>
                <button style={{width: "calc(70% - 10px)", float: "left"}}>Update User</button>
                <button style={{width: "30%", float: "right"}} onClick={() => props.setEditing(false)}>Cancel</button>
            </div>
        </form>
    );
};
export default EditUserForm;
