var selectedIndex = null;
var array_channels = new Array();
array_channels.push({"frequency":"87.6","performance":"0.5","name":"Gong Rádió","transmitter_location":"Csongrád","address":""});
array_channels.push({"frequency":"89","performance":"1","name":"MR2-Petőfi Rádió ","transmitter_location":"Debrecen","address":"Pallag"});
array_channels.push({"frequency":"91.1","performance":"0.2","name":"SUNSHINE Rádió Pilis ","transmitter_location":"Szentendre","address":"Pismány-hegy"});
array_channels.push({"frequency":"97.1","performance":"0.5","name":"Yo! Rádió ","transmitter_location":"Várpalota","address":""});
array_channels.push({"frequency":"100","performance":"0.94","name":"Rádió Aktív FM 100,0 MHz ","transmitter_location":"Sátoraljaújhely","address":"Magas-hegy"});
array_channels.push({"frequency":"106.8","performance":"7.4","name":"MR3-Bartók Rádió ","transmitter_location":"Győr","address":"Szabadhegy"});


function printArray(){
    var table = document.getElementById("channelList").getElementsByTagName('tbody')[0];
    table.innerHTML="";
    var i, newRow;
    for (i = 0; i < array_channels.length; i++) {
        newRow = table.insertRow(table.length);
        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = array_channels[i].frequency;
        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = array_channels[i].performance;
        var cell3 = newRow.insertCell(2);
        cell3.innerHTML = array_channels[i].name;
        var cell4 = newRow.insertCell(3);
        cell4.innerHTML = array_channels[i].transmitter_location;
        var cell5 = newRow.insertCell(4);
        cell5.innerHTML = array_channels[i].address;
        var cell6 = newRow.insertCell(5);
        cell6.className = "buttonfield";
        cell6.innerHTML = '<button onClick="onEdit('+i+')">Edit</button>' + '<div></div>' + '<button class="deletebutton" onClick="onDelete('+i+')">Delete</button>';
    }
}


function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedIndex==null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function onFormReset() {

}
function readFormData() {
    var formData = {};
    formData["frequency"] = document.getElementById("frequency").value;
    formData["performance"] = document.getElementById("performance").value;
    formData["name"] = document.getElementById("name").value;
    formData["transmitter_location"] = document.getElementById("transmitter_location").value;
    formData["address"] = document.getElementById("address").value;
    return formData;
}

function insertNewRecord(data) {
    array_channels.push({"frequency":data.frequency,"performance":data.performance,"name":data.name,"transmitter_location":data.transmitter_location,"address":data.address});
    printArray();
}

function resetForm() {
    document.getElementById("frequency").value = "";
    document.getElementById("performance").value = "";
    document.getElementById("name").value = "";
    document.getElementById("transmitter_location").value = "";
    document.getElementById("address").value = "";
    selectedIndex=null;
}
function onEdit(index) {
    document.getElementById("frequency").value = array_channels[index].frequency;
    document.getElementById("performance").value = array_channels[index].performance;
    document.getElementById("name").value = array_channels[index].name;
    document.getElementById("transmitter_location").value = array_channels[index].transmitter_location;
    document.getElementById("address").value = array_channels[index].address;
    selectedIndex=index;
}
function updateRecord(formData) {
    array_channels[selectedIndex].frequency=formData.frequency;
    array_channels[selectedIndex].performance=formData.performance;
    array_channels[selectedIndex].name=formData.name;
    array_channels[selectedIndex].transmitter_location=formData.transmitter_location;
    array_channels[selectedIndex].address=formData.address;
    printArray();
}
function onDelete(index) {
    if (confirm('Are you sure you want to delete this record?')) {
        array_channels.splice(index, 1);
        resetForm();
        printArray();
    }
}
function validate() {
    var isValid = true;
    if (document.getElementById("frequency").value == "" || document.getElementById("performance").value == "" || document.getElementById("name").value == "" || document.getElementById("transmitter_location").value == "" ) {
        isValid = false;
        //document.getElementById("frequencyValidationError").classList.remove("hide");
    } else {
        isValid = true;
        /*if (!document.getElementById("frequencyValidationError").classList.contains("hide"))
            document.getElementById("frequencyValidationError").classList.add("hide");*/
    }
    return isValid;
}
