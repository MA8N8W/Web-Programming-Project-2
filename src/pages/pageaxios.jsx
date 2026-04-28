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

    const fetchChannels = async () => {
        const res = await axios.get("api.php");
        setChannels(res.data.readData);
        setMessage(a => a + " " + res.data.status);
    };

    const submit = async () => {
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
    };

    const reset = async () => {
        setEditId(null);
        setFrequency("");
        setPerformance("");
        setName("");
        setTransmitterLocation("");
        setAddress("");
        await fetchChannels();
    }

    const editChannels = (channel) => {
        setEditId(channel.id);
        setFrequency(channel.frequency);
        setPerformance(channel.performance);
        setName(channel.name);
        setTransmitterLocation(channel.transmitter_location);
        setAddress(channel.address);
    };

    const deleteChannels = async (id) => {
        if (!confirm("Are you sure you want to delete this entry?")) return;
        const res = await axios.delete("api.php", { data: { id } });
        setMessage(res.data.status);
        await fetchChannels();
    };

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakPoint = 600;

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
                                        <button onClick={() => editChannels(channel)}>Edit</button>
                                        <div/>
                                        <button className="deletebutton" onClick={() => deleteChannels(channel.id)}>Delete</button>
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