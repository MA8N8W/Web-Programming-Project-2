import React from "react";

const styleTableHead = {
    width: "100%",
    border: "solid 1px var(--colour-dark)",
    borderRadius: "var(--border-radius) var(--border-radius) 0 0"
}

const styleTableBody = {
    width: "100%",
    border: "solid 1px var(--colour-dark)",
    borderRadius: "0 0 var(--border-radius) var(--border-radius)"
}

const UserTable = props => (
    <>
        <table style={styleTableHead}>
            <thead>
                <tr>
                    <th className="datafield">Name</th>
                    <th className="datafield">Username</th>
                    <th className="buttonfield">Actions</th>
                </tr>
            </thead>
        </table>
        <table style={styleTableBody}>
            <tbody>
            {props.users.length > 0 ? (
                props.users.map(user => (
                    <tr key={user.id}>
                        <td className="datafield">{user.name}</td>
                        <td className="datafield">{user.username}</td>
                        <td className="buttonfield">
                            <button onClick={() => {props.editRow(user);}}>Edit</button>
                            <div/>
                            <button className="deletebutton" onClick={() => props.deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )}
            </tbody>
        </table>
    </>
);
export default UserTable;