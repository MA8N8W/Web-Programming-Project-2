import React, { useEffect, useState } from "react";

function PageFetch() {

    useEffect(() => {
        if (fetchUsers) {
            //document.getElementById("userform").addEventListener("submit", saveUser);
            fetchUsers();
        }
    }, []);

    const submit = async () => {
        //event.preventDefault();
        saveUser(event);
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
            <article>
                <p>This page uses the FetchAPI to make requests to the backend, which returns data from a SQL database.</p>
                <p>Due to lack of time and assistance there's currently 2 major issues that haven't been fixed.</p>
                <ol>
                    <li type="I">Right now the only way to reset the form after having pressed a record's edit button is by refreshing the page.</li>
                    <li type="I">When the page switches between the desktop and mobile layouts the input fields are emptied out (due to them technically being different fields).</li>
                </ol>
            </article>
            <div>
                <p id="message"></p>
                <fieldset style={styleField}>
                    <legend style={styleLegend}><strong>FetchAPI <abbr title="Create, Read, Update, Delete">CRUD</abbr> Application</strong></legend>
                    <form id="userform">
                        <div className="form">
                            <input type="hidden" id="id"/>
                            {width > breakPoint? (
                                <>
                                    <div className="singleline">
                                        <div className="singleline">
                                            <fieldset>
                                                <legend>Frequency*</legend>
                                                <input type="number" step="0.1" min="80" max="108" id="frequency"/>
                                            </fieldset>
                                            <fieldset className="spacer"/>
                                            <fieldset>
                                                <legend>Performance*</legend>
                                                <input type="number" step="0.0001" min="0" id="performance"/>
                                            </fieldset>
                                        </div>
                                        <fieldset className="spacer"/>
                                        <fieldset>
                                            <legend>Name*</legend>
                                            <input type="text" id="name"/>
                                        </fieldset>
                                    </div>
                                    <div className="singleline">
                                        <fieldset style={{width:"calc(40% - 5px)"}}>
                                            <legend>Transmitter Location*</legend>
                                            <input type="text" id="transmitter_location"/>
                                        </fieldset>
                                        <fieldset className="spacer"/>
                                        <fieldset style={{width:"calc(60% - 5px)"}}>
                                            <legend>Address</legend>
                                            <input type="text" id="address"/>
                                        </fieldset>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="singleline">
                                        <fieldset>
                                            <legend>Frequency*</legend>
                                            <input type="number" step="0.1" min="80" max="108" id="frequency"/>
                                        </fieldset>
                                        <fieldset className="spacer"/>
                                        <fieldset>
                                            <legend>Performance*</legend>
                                            <input type="number" step="0.0001" min="0" id="performance"/>
                                        </fieldset>
                                    </div>
                                    <fieldset>
                                        <legend>Name*</legend>
                                        <input type="text" id="name"/>
                                    </fieldset>
                                    <fieldset>
                                        <legend>Transmitter Location*</legend>
                                        <input type="text" id="transmitter_location"/>
                                    </fieldset>
                                    <fieldset>
                                        <legend>Address</legend>
                                        <input type="text" id="address"/>
                                    </fieldset>
                                </>
                            )}
                            <br/>
                            <button id="addedit" onClick={submit}>Submit</button>
                        </div>
                    </form>
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
                        <tbody id="userTable">
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}

export default PageFetch