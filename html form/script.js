var count;
function readFormData(){
    var formdata={};
    formdata["FirstName"]=document.getElementById("FirstName").value;
    formdata["LastName"]=document.getElementById("LastName").value;
    formdata["Address"]=document.getElementById("address").value;
    formdata["pincode"]=document.getElementById("pincode").value;
      if(document.getElementById("male").checked){
    formdata["Gender"]=document.getElementById("male").value;
}
else if(document.getElementById("female").checked){
    formdata["Gender"]=document.getElementById("female").value;
}
var checkedValue = []; 
var inputElements = document.getElementsByClassName('food');
 count=0;
for(var i=0; i<5; i++){
      if(inputElements[i].checked){
          count++
          
           
      }
}  
for(var j=0;j<5;j++){
if(count>=2&&inputElements[j].checked){
    checkedValue.push(inputElements[j].value);

}

}
if(count<2){
    alert("Select atleast two in food selection")
}

    formdata["Food"]=checkedValue.join(",")
    formdata["State"]=document.getElementById("state").value;
    formdata["Country"]=document.getElementById("country").value;
return formdata;
}

function onFormSubmit(){
    var Formdata=readFormData();
    if(validation()){
    insertNewRecord(Formdata);
    }
       reset_form();
    }
    function reset_form(event) {
    
        document.getElementById("form").reset();
      }
      function validation(){
      if(count>=2){
          return true
      }
      else{
          return false
      }
      }

function insertNewRecord(data) {
    var table = document.getElementById("t1").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.FirstName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.LastName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Address;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.pincode;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Gender;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.Food;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.State;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.Country;
   
}