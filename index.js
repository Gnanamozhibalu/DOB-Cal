{/* <div class="container panel">
 <div class="row">
     <div class="col-6 text-white h5 mt-4 text-right">
         Enter Date(MM/DD/YYYY)
     </div>
     <div class="col-6">
         <input type="text" id="inputData" class="inputCss form-control mt-4">
     </div>
 </div>
 <div>
     <button class="btn btn-warning"  id="muBtn" onclick="getData()" >Go</button>
 </div>
 <div id="result" class="m-4">
</div>
</div> */}

//container
var contain=document.createElement("div");
contain.setAttribute("class","container panel");
document.body.appendChild(contain);
//heading
var heading=document.createElement("div");
heading.setAttribute("class","h1 text-center text-white pt-4");
heading.innerHTML="DOB Calculator";
contain.appendChild(heading);

//row
var row=document.createElement("div");
row.setAttribute("class","row");
row.setAttribute("id","row1")
contain.appendChild(row);
//col1
var col1=document.createElement("div");
col1.setAttribute("class","col-6 text-white h2 mt-4 text-right")
col1.innerHTML="Enter Date"
document.getElementById("row1").appendChild(col1)
//col2
var col2=document.createElement("div");
col2.setAttribute("class","col-6");
document.getElementById("row1").appendChild(col2);
//input
var input=document.createElement("input");
input.setAttribute("id","inputData")
input.setAttribute("class","inputCss form-control mt-4");
input.setAttribute("placeholder","MM/DD/YYYY")
col2.appendChild(input);
//go
var go=document.createElement("div");
go.setAttribute("class","btn btn-warning");
go.setAttribute("id","muBtn");
go.setAttribute("onclick","getData()");
go.innerHTML="Go";
contain.appendChild(go);
//result
var result=document.createElement("div");
result.setAttribute("id","result");
result.setAttribute("class","ml-5 mt-4");
contain.appendChild(result);

//logic using moment.js
function getData() {
    var date = document.getElementById("inputData").value;
    document.getElementById("result").style.fontSize="large";
    document.getElementById("result").style.color="white";
    document.getElementById("result").innerHTML =moment().diff(date, 'years')+" "+"years old"+"<br>"+moment().diff(date, 'months')+" "+"months"+"<br>"
    +moment().diff(date, 'days')+" "+"days"+"<br>"+moment().diff(date, 'hours')+" "+"hours"+"<br>"
    +moment().diff(date, 'minutes')+" "+"minutes"+"<br>"+moment().diff(date, 'seconds')+" "+"seconds"+"<br>"
    +moment().diff(date, 'milliseconds')+" "+"milliseconds"; 
  }
/* //set time 
setTimeout(
  function getData() {
    var date = document.getElementById("inputData").value;
    document.getElementById("result").style.fontSize="large";
    document.getElementById("result").style.color="white";
    document.getElementById("result").innerHTML =moment().diff(date, 'years')+" "+"years old"+"<br>"+moment().diff(date, 'months')+" "+"months"+"<br>"
    +moment().diff(date, 'days')+" "+"days"+"<br>"+moment().diff(date, 'hours')+" "+"hours"+"<br>"
    +moment().diff(date, 'minutes')+" "+"minutes"+"<br>"+moment().diff(date, 'seconds')+" "+"seconds"+"<br>"
    +moment().diff(date, 'milliseconds')+" "+"milliseconds"; 
  },1000
) */
/* console.log(moment().diff('14-jan-1994', 'years'));
console.log(moment().diff('14-jan-1994', 'months'));
console.log(moment().diff('14-feb-1994', "days"));
console.log(moment().diff('14-feb-1994', 'hours'));
console.log(moment().diff('14-feb-1994', 'minutes'));
console.log(moment().diff('14-feb-1994', 'seconds'));
console.log(moment().diff('14-feb-1994', 'milliseconds')); */