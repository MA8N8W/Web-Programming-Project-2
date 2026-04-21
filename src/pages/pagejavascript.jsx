function PageJavaScript() {
    return (
        <main id="main-content" className="wrapper" tabIndex="-1">
            <div className="accountprompt">
                <form onsubmit="event.preventDefault();onFormSubmit();">
                    <div className="login">
                        <fieldset>
                            <legend>Full Name*</legend>
                            <input type="text" name="fullName" id="fullName"/>
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
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <br />
            <div className="overflow-x-auto">
                <table id="employeeList">
                    <thead>
                        <tr>
                            <th>Kerület</th>
                            <th>Cím</th>
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