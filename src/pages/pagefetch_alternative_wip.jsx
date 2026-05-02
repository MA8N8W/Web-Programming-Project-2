import React, { useEffect, useState } from "react";
import axios from "axios";

function PageAxios() {
    const [channels, setChannels] = useState([]);
    const [message, setMessage] = useState("");
    const [frequency, setFrequency] = useState("");
    const [performance, setPerformance] = useState("");
    const [name, setName] = useState("");
    const [transmitter_location, setTransmitterLocation] = useState("");
    const [address, setAddress] = useState("");
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchChannels();
    }, []);

    /*const fetchChannels2 = async () => {
        const res = await axios.get("api.php");
        setChannels(res.data.readData);
        setMessage(a => a + " " + res.data.status);
    };*/

    function fetchChannels() {
        document.getElementById("addedit").innerHTML = "Add new user";
        fetch("api.php")
            .then(res => res.json())
            .then(data => {
                document.getElementById("message").innerText += " "+data.status;
                let rows = "";
                data.readData.forEach(channel => {
                    rows += `
                <tr><td>${channel.id}</td><td>${channel.frequency}</td><td>${channel.performance}</td><td>${channel.name}</td><td>${channel.transmitter_location}</td><td>${channel.address}</td><td class="buttonfield"><button onclick='editUser(${JSON.stringify(channel)})'>Edit</button><div></div><button class="deletebutton" onclick='deleteUser(${channel.id})'>Delete</button></td></tr>`;
                });
                document.getElementById("userTable").innerHTML = rows;
            });
    };

    var data = {
        id:"",
        frequency:"",
        performance:"",
        name: "",
        transmitter_location:"",
        address:"",
    };

    function getData() {
        data = {
            id:document.getElementById("id").value,
            frequency:document.getElementById("frequency").value,
            performance:document.getElementById("performance").value,
            name: document.getElementById("name").value,
            transmitter_location:document.getElementById("transmitter_location").value,
            address:document.getElementById("address").value,
        };
        return data;
    }

    function clearData() {
        data = {
            id:"",
            frequency:"",
            performance:"",
            name: "",
            transmitter_location:"",
            address:"",
        };
        return data;
    }

    function saveUser() {
        //e.preventDefault();
        getData();
        fetch(api, {
            method: (data.id ? "PUT" : "POST"),
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                //e.target.reset();
                document.getElementById("message").innerText = data.status;
                document.getElementById("id").value = "";
                fetchChannels();
            });
        //clearData();
    }

    /*const submit = async () => {
        var res;
        if (editId) {
            res = await axios.put("api.php", { id: editId, frequency, performance, name, transmitter_location, address });
            setEditId(null);
        } else {
            res = await axios.post("api.php", { frequency, performance, name, transmitter_location, address });
        }
        setMessage(res.data.status);
        setFrequency("");
        setPerformance("");
        setName("");
        setTransmitterLocation("");
        setAddress("");
        await fetchChannels();
    };*/

    const submit = async () => {
        saveUser();
    }

    const reset = async () => {
        setEditId(null);
        setFrequency("");
        setPerformance("");
        setName("");
        setTransmitterLocation("");
        setAddress("");
        await fetchChannels();
    }

    /*const editChannels = (channel) => {
        setEditId(channel.id);
        setFrequency(channel.frequency);
        setPerformance(channel.performance);
        setName(channel.name);
        setTransmitterLocation(channel.transmitter_location);
        setAddress(channel.address);
    };*/

    function editChannel(channel) {
        document.getElementById("message").innerText = "";
        document.getElementById("addedit").innerHTML = "Edit user";
        document.getElementById("id").value = channel.id;
        document.getElementById("frequency").value = channel.frequency;
        document.getElementById("performance").value = channel.performance;
        document.getElementById("name").value = channel.name;
        document.getElementById("transmitter_location").value = channel.transmitter_location;
        document.getElementById("address").value = channel.address;
    }

    /*const deleteChannels = async (id) => {
        if (!confirm("Are you sure you want to delete this entry?")) return;
        const res = await axios.delete("api.php", { data: { id } });
        setMessage(res.data.status);
        await fetchChannels();
    };*/

    function deleteChannel(id) {
        if (!confirm("Are you sure you want to delete this entry?")) return;
        fetch(api, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id})
        })
            /*.then(res => res.json())
            .then(data => {
                document.getElementById("message").innerText = data.status;
                fetchChannels();
            });*/
        setMessage(res.data.status);
        //fetchChannels()
    }

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakPoint = 650;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

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
                <p>{message}</p>
                <h3>React + PHP CRUD</h3>
                <fieldset style={styleField}>
                    <legend style={styleLegend}>{editId ? "Edit" : "Add"}</legend>
                    {width > breakPoint? (
                        <form>
                            <div className="form">
                                <div className="singleline">
                                    <div className="singleline">
                                        <fieldset>
                                            <legend>Frequency*</legend>
                                            <input type="number" step="0.1" min="80" max="108" value={frequency} onChange={(e) => setFrequency(e.target.value)} />
                                        </fieldset>
                                        <fieldset className="spacer"/>
                                        <fieldset>
                                            <legend>Performance*</legend>
                                            <input type="number" step="0.0001" min="0" value={performance} onChange={(e) => setPerformance(e.target.value)}/>
                                        </fieldset>
                                    </div>
                                    <fieldset className="spacer"/>
                                    <fieldset>
                                        <legend>Name*</legend>
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                                    </fieldset>
                                </div>
                                <div className="singleline">
                                    <fieldset style={{width:"calc(40% - 5px)"}}>
                                        <legend>Transmitter Location*</legend>
                                        <input type="text" value={transmitter_location} onChange={(e) => setTransmitterLocation(e.target.value)}/>
                                    </fieldset>
                                    <fieldset className="spacer"/>
                                    <fieldset style={{width:"calc(60% - 5px)"}}>
                                        <legend>Address</legend>
                                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
                                    </fieldset>
                                </div>
                                <br/>
                                {editId ? (
                                    <div style={{width: "100%", padding: 0, margin: 0}}>
                                        <button style={{width: "calc(70% - 10px)"}} onClick={submit}>Update</button>
                                        <div style={{display: "inline-block", width: "10px", padding: 0, margin: 0}}/>
                                        <button style={{width: "30%"}} onClick={reset}>Cancel</button>
                                    </div>
                                ) : (
                                    <div style={{width: "100%", padding: 0, margin: 0}}>
                                        <button onClick={submit}>Add</button>
                                    </div>
                                )}
                            </div>
                        </form>
                    ) : (
                        <form>
                            <div className="form">
                                <div className="singleline">
                                    <fieldset>
                                        <legend>Frequency*</legend>
                                        <input type="number" step="0.1" min="80" max="108" value={frequency} onChange={(e) => setFrequency(e.target.value)} />
                                    </fieldset>
                                    <fieldset className="spacer"/>
                                    <fieldset>
                                        <legend>Performance*</legend>
                                        <input type="number" step="0.0001" min="0" value={performance} onChange={(e) => setPerformance(e.target.value)}/>
                                    </fieldset>
                                </div>
                                <fieldset>
                                    <legend>Name*</legend>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                                </fieldset>
                                <fieldset>
                                    <legend>Transmitter Location*</legend>
                                    <input type="text" value={transmitter_location} onChange={(e) => setTransmitterLocation(e.target.value)}/>
                                </fieldset>
                                <fieldset>
                                    <legend>Address</legend>
                                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
                                </fieldset>
                                <br/>
                                {editId ? (
                                    <>
                                        <button style={{width: "calc(70% - 10px)", float: "left"}} onClick={submit}>Update</button>
                                        <button style={{width: "30%", float: "right"}} onClick={reset}>Cancel</button>
                                    </>
                                ) : (
                                    <button onClick={submit}>Add</button>
                                )}
                            </div>
                        </form>
                    )}
                </fieldset>
                <br/>
                <div>
                    <table className="tablePageAxios">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Frequency</th>
                                <th>Performance</th>
                                <th>Name</th>
                                <th>Transmitter Location</th>
                                <th>Address</th>
                                <th className="buttonfield">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {channels.map((channel) => (
                            <>
                                <tr key={channel.id}>
                                    <td>{channel.id}</td>
                                    <td>{channel.frequency}</td>
                                    <td>{channel.performance}</td>
                                    <td>{channel.name}</td>
                                    <td>{channel.transmitter_location}</td>
                                    <td>{channel.address}</td>
                                    <td className="buttonfield">
                                        <button onClick={() => axios_editChannels(channel)}>Edit</button>
                                        <div/>
                                        <button className="deletebutton" onClick={() => axios_deleteChannels(channel.id)}>Delete</button>
                                    </td>
                                </tr>
                            </>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
export default PageAxios;