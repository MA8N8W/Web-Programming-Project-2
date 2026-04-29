import React from "react";

const UserTable = props => (
    <>
        <table className="tablePageReact">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th className="buttonfield">Actions</th>
            </tr>
            </thead>
            <tbody>
            {props.users.length > 0 ? (
                props.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td className="buttonfield">
                            <button onClick={() => {props.editRow(user);}}>Edit</button>
                            <div/>
                            <button className="deletebutton" onClick={() => props.deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={4} style={{width: "100%", textAlign: "center"}}>No users</td>
                </tr>
            )}
            </tbody>
        </table>
    </>
);
export default UserTable;