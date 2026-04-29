import React, {useEffect, useState} from "react";

const AddUserForm = props => {
    const [user, setUser] = useState({name:"",username:""});

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakPoint = 600;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                if (!user.name || !user.username) return;
                props.addUser(user);
                setUser({name:"",username:""});
            }}
        >
            <div className="form">
                {width > breakPoint? (
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
                ) : (
                    <>
                        <fieldset>
                            <legend>Name</legend>
                            <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
                        </fieldset>
                        <fieldset>
                            <legend>Username</legend>
                            <input type="text" name="username" value={user.username} onChange={handleInputChange}/>
                        </fieldset>
                    </>
                )}
                <br/>
                <button>Add user</button>
            </div>
        </form>
    );
};
export default AddUserForm;
