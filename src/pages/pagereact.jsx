/*import React, { useState } from "react";
import Fajta from "./reactCrudComponents/Fajta"
import EditFajtaForm from "./reactCrudComponents/EditFajtaForm"
import AddFajtaForm from "./reactCrudComponents/AddFajtaForm"

const PageReact = () => {

    const fajtakData = [
        { id: 1, nev: "papír" },
        { id: 2, nev: "elem" },
        { id: 3, nev: "hungarocel" },
        { id: 4, nev: "festék" },
        { id: 5, nev: "zöldhulladék" },
        { id: 6, nev: "lom" }
    ];
    const [fajtak, setFajtak] = useState(fajtakData);
    const [currentFajta, setCurrentFajta] = useState("");
    const [editing, setEditing] = useState(false);

    const addFajta = fajta => {
        fajta.id = fajtak.length + 1;
        setFajtak([...fajtak, fajta]);
    };
    const deleteFajta = id => {
        setEditing(false);
        setFajtak(fajtak.filter(fajta => fajta.id !== id));
    };
    const editRow = fajta => {
        setEditing(true);
        setCurrentFajta(fajta);
    };
    const updateFajta = (id, updatedFajta) => {
        setEditing(false);
        setFajta(fajtak.map(fajta => (fajta.id === id ? updatedFajta : fajta)));
    };


    return (
        <main id="main-content" className="wrapper" tabIndex="-1">
            <div className="w-full">
                <h1 className="badge badge-primary badge-xl m-2">React DB Application!</h1>
                <div className="w-full items-center">
                    <div className="badge badge-primary badge-lg m-2"><h2>{editing ? "Edit fajta" : "Add fajta"}</h2></div>

                    {!editing ? (
                        <AddFajtaForm
                            addFajta={addFajta}
                        />
                    ) : (
                        <EditFajtaForm
                            setEditing={setEditing}
                            currentFajta={currentFajta}
                            setCurrentFajta={setCurrentFajta}
                            updateFajta={updateFajta}
                        />
                    )}
                </div>
                <h2 className="badge badge-primary badge-lg m-2">Fajták listája:</h2>
                <div className="w-full">
                    <div>
                        <Fajta fajtak={fajtak} editRow={editRow} deleteFajta={deleteFajta} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PageReact*/

import React, { useState } from "react";
import UserTable from "/src/data/react_table.jsx";
import AddUserForm from "/src/forms/react_addentry_form.jsx";
import EditUserForm from "/src/forms/react_editentry_form.jsx";
import "/style/table.css"

const App = () => {
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
                <h2>React <abbr title="Create, Read, Update, Delete">CRUD</abbr> Application</h2>
                <div>
                    <div>
                        <fieldset style={styleField}>
                            <legend style={styleLegend}>{editing ? "Edit user" : "Add user"}</legend>
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
                        <h2>View users</h2>
                        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
                    </div>
                </div>
            </div>
        </main>
    );
};
export default App;