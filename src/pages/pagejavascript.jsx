import React, { useEffect, useState } from "react";
import "/public/style/table.css";
import "/public/scripts/javascript_script.js";

function PageJavaScript() {

    const [width, setWidth] = useState(window.innerWidth);
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
            <fieldset style={styleField}>
                <legend style={styleLegend}>Add Entry</legend>
                <form onSubmit={Submit}>
                    <div className="form">
                        {width > breakPoint ? (
                            <>
                                <div className="singleline">
                                    <fieldset>
                                        <legend>Full Name*</legend>
                                        <input type="text" name="fullName" id="fullName" required/>
                                    </fieldset>
                                    <fieldset className="spacer"/>
                                    <fieldset>
                                        <legend>Email Address</legend>
                                        <input type="email" name="email" id="email"/>
                                    </fieldset>
                                </div>
                                <div className="singleline">
                                    <fieldset>
                                        <legend>Salary</legend>
                                        <input type="number" name="salary" id="salary"/>
                                    </fieldset>
                                    <fieldset className="spacer"/>
                                    <fieldset>
                                        <legend>City</legend>
                                        <input type="text" name="city" id="city"/>
                                    </fieldset>
                                </div>
                            </>
                        ):(
                            <>
                                <fieldset>
                                    <legend>Full Name*</legend>
                                    <input type="text" name="fullName" id="fullName" required/>
                                </fieldset>
                                <fieldset>
                                    <legend>Email Address</legend>
                                    <input type="email" name="email" id="email"/>
                                </fieldset>
                                <fieldset>
                                    <legend>Salary</legend>
                                    <input type="text" name="salary" id="salary"/>
                                </fieldset>
                                <fieldset>
                                    <legend>City</legend>
                                    <input type="text" name="city" id="city"/>
                                </fieldset>
                            </>
                        )}
                        <br/>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </fieldset>
            <br />
            <div className="overflow-x-auto">
                <table id="employeeList" className="tablePageJavaScript">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>City</th>
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