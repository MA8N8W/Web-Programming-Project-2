import React, { useState } from "react";
import UserTable from "/src/data/react_table.jsx";
import AddUserForm from "/src/forms/react_addentry_form.jsx";
import EditUserForm from "/src/forms/react_editentry_form.jsx";

const PageReact = () => {
    const usersData = [
        { id: 1, name: "Example 1", username: "user1" },
        { id: 2, name: "Example 2", username: "user2" },
        { id: 3, name: "Example 3", username: "user3" }
    ];
    const [users, setUsers] = useState(usersData);
    const [currentUser, setCurrentUser] = useState("");
    const [editing, setEditing] = useState(false);

    const addUser = user => {
        user.id = users.length + 1;
        setUsers([...users, user]);
    };
    const deleteUser = id => {
        setEditing(false);
        setUsers(users.filter(user => user.id !== id));
    };
    const editRow = user => {
        setEditing(true);
        setCurrentUser(user);
    };
    const updateUser = (id, updatedUser) => {
        setEditing(false);
        setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    };

    const styleField = {
        border: "solid 1px var(--colour-dark)",
        borderRadius: "var(--border-radius)"
    }

    const styleLegend = {
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: "1.2rem",
        color: "var(--colour-dark)"
    }

    return (
        <main id="main-content" className="wrapper" tabIndex="-1">
            <div>
                <div>
                    <div>
                        <fieldset style={styleField}>
                            <legend style={styleLegend}><strong>React <abbr title="Create, Read, Update, Delete">CRUD</abbr> Application</strong></legend>
                            {!editing ? (
                                <AddUserForm
                                    addUser={addUser}
                                />
                            ):(
                                <EditUserForm
                                    setEditing={setEditing}
                                    currentUser={currentUser}
                                    setCurrentUser={setCurrentUser}
                                    updateUser={updateUser}
                                />
                            )}
                        </fieldset>
                    </div>
                    <div>
                        <br/>
                        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
                    </div>
                </div>
            </div>
        </main>
    );
};
export default PageReact;