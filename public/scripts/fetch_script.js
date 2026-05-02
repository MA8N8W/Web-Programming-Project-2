const api = "./api.php";

function fetchUsers() {
    document.getElementById("addedit").innerHTML = "Add Record";
    fetch(api)
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
}
/*
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
*/

function saveUser(e) {
    e.preventDefault();
    const data = {
        id:document.getElementById("id").value,
        frequency:document.getElementById("frequency").value,
        performance:document.getElementById("performance").value,
        name: document.getElementById("name").value,
        transmitter_location:document.getElementById("transmitter_location").value,
        address:document.getElementById("address").value,
    };
    //getData();
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
            fetchUsers();
        });
    document.getElementById("id").value = "";
    document.getElementById("frequency").value = "";
    document.getElementById("performance").value = "";
    document.getElementById("name").value = "";
    document.getElementById("transmitter_location").value = "";
    document.getElementById("address").value = "";
    //clearData();
    //fetchUsers();
}

function editUser(channel) {
    document.getElementById("message").innerText = "";
    document.getElementById("addedit").innerHTML = "Edit Record";
    document.getElementById("id").value = channel.id;
    document.getElementById("frequency").value = channel.frequency;
    document.getElementById("performance").value = channel.performance;
    document.getElementById("name").value = channel.name;
    document.getElementById("transmitter_location").value = channel.transmitter_location;
    document.getElementById("address").value = channel.address;
}

function deleteUser(id) {
    if (!confirm("Delete this user?")) return;
    fetch(api, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({id})
    })
        .then(res => res.json())
        .then(data => {
            document.getElementById("message").innerText = data.status;
            fetchUsers();
        });
}