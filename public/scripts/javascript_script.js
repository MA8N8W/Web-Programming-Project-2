var selectedIndex = null;
var array1 = new Array();
array1.push({"fullName":"John Smith","email":"data1@gmail.com","salary":"2000","city":"London"});
// OR: array1[0]= {"fullName":"John Smith","email":"data1@gmail.com","salary":"2000","city":"London"};
array1.push({"fullName":"Tom Brown","email":"data2@gmail.com","salary":"2500","city":"Paris"});

function printArray(){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    table.innerHTML="";
    var i, newRow;
    for (i = 0; i < array1.length; i++) {
        newRow = table.insertRow(table.length);
        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = array1[i].fullName;
        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = array1[i].email;
        var cell3 = newRow.insertCell(2);
        cell3.innerHTML = array1[i].salary;
        var cell4 = newRow.insertCell(3);
        cell4.innerHTML = array1[i].city;
        var cell5 = newRow.insertCell(4);
        cell5.className = "buttonfield";
        cell5.innerHTML = '<button onClick="onEdit('+i+')">Edit</button>' + '<div></div>' + '<button class="deletebutton" onClick="onDelete('+i+')">Delete</button>';
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
function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    array1.push({"fullName":data.fullName,"email":data.email,"salary":data.salary,"city":data.city});
    // OR: array1[array1.length]= {"fullName":data.fullName,"email":data.email,"salary":data.salary,"city":data.city};
    printArray();
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedIndex=null;
}
function onEdit(index) {
    document.getElementById("fullName").value = array1[index].fullName;
    document.getElementById("email").value = array1[index].email;
    document.getElementById("salary").value = array1[index].salary;
    document.getElementById("city").value = array1[index].city;
    selectedIndex=index;
}
function updateRecord(formData) {
    array1[selectedIndex].fullName=formData.fullName;
    array1[selectedIndex].email=formData.email;
    array1[selectedIndex].salary=formData.salary;
    array1[selectedIndex].city=formData.city;
    printArray();
}
function onDelete(index) {
    if (confirm('Are you sure to delete this record ?')) {
        array1.splice(index, 1); // Deleting the entry with the specified index
        resetForm();
        printArray();
    }
}
function validate() {
    var isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        //document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        /*if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");*/
    }
    return isValid;
}
