import React, { useEffect, useState } from "react";

function PageJavaScript() {

    const [width, setWidth] = useState(window.innerWidth);
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

    useEffect(() => {
        if (printArray()) {
            printArray();
        }
    }, []);

    const Submit = () => {
        event.preventDefault();
        onFormSubmit();
    }

    return (
        <main id="main-content" className="wrapper" tabIndex="-1">
                <article>
                    <p>This page features a small JavaScript-based CRUD application. Some data is pushed into an internal array which is then subsequently used to generate the table you see below when the page first loads. Since JavaScript runs on the clientside a (force)refresh of the page will cause all modifications to be lost.</p>
                    <p>The input elements use some HTML5 features to facilitate a minimal amount of validation, the script only checks whether the required fields are filled in, but nothing else beyond that.</p>
                </article>
            <fieldset style={styleField}>
                <legend style={styleLegend}><strong>JavaScript <abbr title="Create, Read, Update, Delete">CRUD</abbr> Application</strong></legend>
                <form onSubmit={Submit} on>
                    <div className="form">
                        {width > breakPoint? (
                            <div className="form">
                                <div className="singleline">
                                    <div className="singleline">
                                        <fieldset>
                                            <legend>Frequency*</legend>
                                            <input type="number" step="0.1" min="80" max="108" id="frequency" required/>
                                        </fieldset>
                                        <fieldset className="spacer"/>
                                        <fieldset>
                                            <legend>Performance*</legend>
                                            <input type="number" step="0.0001" min="0" id="performance" required/>
                                        </fieldset>
                                    </div>
                                    <fieldset className="spacer"/>
                                    <fieldset>
                                        <legend>Name*</legend>
                                        <input type="text" id="name" required/>
                                    </fieldset>
                                </div>
                                <div className="singleline">
                                    <fieldset style={{width:"calc(40% - 5px)"}}>
                                        <legend>Transmitter Location*</legend>
                                        <input type="text" id="transmitter_location" required/>
                                    </fieldset>
                                    <fieldset className="spacer"/>
                                    <fieldset style={{width:"calc(60% - 5px)"}}>
                                        <legend>Address</legend>
                                        <input type="text" id="address"/>
                                    </fieldset>
                                </div>
                            </div>
                        ) : (
                            <div className="form">
                                <div className="singleline">
                                    <fieldset>
                                        <legend>Frequency*</legend>
                                        <input type="number" step="0.1" min="80" max="108" id="frequency" required/>
                                    </fieldset>
                                    <fieldset className="spacer"/>
                                    <fieldset>
                                        <legend>Performance*</legend>
                                        <input type="number" step="0.0001" min="0" id="performance" required/>
                                    </fieldset>
                                </div>
                                <fieldset>
                                    <legend>Name*</legend>
                                    <input type="text" id="name" required/>
                                </fieldset>
                                <fieldset>
                                    <legend>Transmitter Location*</legend>
                                    <input type="text" id="transmitter_location" required/>
                                </fieldset>
                                <fieldset>
                                    <legend>Address</legend>
                                    <input type="text" id="address"/>
                                </fieldset>
                            </div>
                        )}
                        <br/>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </fieldset>
            <br />
            <div>
                <table id="channelList" className="tablePageJavaScript">
                    <thead>
                        <tr>
                            <th>Frequency</th>
                            <th>Performance</th>
                            <th>Name</th>
                            <th>Transmitter Location</th>
                            <th>Address</th>
                            <th className="buttonfield">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default PageJavaScript