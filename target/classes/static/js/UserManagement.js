var t;
fetch("http://localhost:8080/user/finduser")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    t = json;
    console.log(t);
    var table = document.getElementById("table");
    console.log(table);
    if (t.length > 10) {
      var l = t.length;
    } else {
      var l = t.length;
    }
    if (l == 0) {
      var row = table.insertRow(1);
      var cell = row.insertCell(0);
      cell.innerHTML = "Aucun Utilisateur Disponible";
      cell.colSpan = "7";
    }
    for (let i = 0; i < l; i++) {
      var row = table.insertRow(i + 1);
      var idCell = row.insertCell(0);

      var fnameCell = row.insertCell(1);
      var lnameCell = row.insertCell(2);
      var EmailCell = row.insertCell(3);
      var DobCell = row.insertCell(4);
      var SexeCell = row.insertCell(5);
      var RoleCell = row.insertCell(6);
      var ButtonCell = row.insertCell(7);
      var passwordCell = row.insertCell(8);
      var delButton = document.createElement("input");
      var modButton = document.createElement("input");
      delButton.type = "button";
      delButton.value = "Supprimer";
      delButton.style =
        "color:white;background-color:#f94144 ;font-weight: bold;margin: 5px;font-size: medium;border-radius: 10px; padding: 5px; ";
      modButton.setAttribute("onclick", "update(this)");
      modButton.setAttribute("onclick", "ajouter()");
      modButton.type = "button";
      modButton.value = "Modifier";
      modButton.style =
        "color:white;background-color:#f8961e;font-weight: bold;margin: 5px;font-size: medium;border-radius: 10px; padding: 5px; ";
      delButton.setAttribute("onclick", "del(this)");
      ButtonCell.style = "text-align: center;";
      ButtonCell.appendChild(delButton);
      ButtonCell.appendChild(modButton);
      ButtonCell.style = "margin:0px;";
      fnameCell.innerHTML = t[i].fname;
      lnameCell.innerHTML = t[i].lname;
      EmailCell.innerHTML = t[i].email;
      DobCell.innerHTML = t[i].dob.substr(0, 10);
      EmailCell.style = "font-size:10px";
      SexeCell.innerHTML = t[i].gender;
      RoleCell.innerHTML = t[i].role;
      idCell.innerHTML = t[i].id;
      idCell.style = "display:none;";
      passwordCell.innerHTML = t[i].password;
      passwordCell.style = "display:none;";
    }
  }).then(()=>{
	  const pageNumbers = document.querySelector(".pageNumbers");
const paginationList = document.getElementById("table");
const listItems = paginationList.querySelectorAll("tr");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const contentLimit = 10;
const pageCount = Math.ceil(listItems.length / contentLimit);
console.log(pageCount);
let currentPage = 1;

const displayPageNumbers = (index) =>{
    const pageNumber = document.createElement("a");
    pageNumber.innerText = index;
    pageNumber.setAttribute('href', "#");
    pageNumber.setAttribute("index", index);
    pageNumbers.appendChild(pageNumber);
};

const getPageNumbers = ()=>{
    for(let i=1; i <= pageCount; i++){
        displayPageNumbers(i);
    };
};

const disableButton = (button) =>{
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
};

const enableButton = (button) =>{
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
};

const controlButtonsStatus = () =>{
    if(currentPage == 1){
        disableButton(prevButton);
    }
    else{
        enableButton(prevButton);
    }
    if(pageCount == currentPage){
        disableButton(nextButton);
    }
    else{
        enableButton(nextButton);
    }
};

const handleActivePageNumber = () =>{
    document.querySelectorAll('a').forEach((button) =>{
        button.classList.remove("active");
        const pageIndex = Number(button.getAttribute("index"));
        if(pageIndex == currentPage){
            button.classList.add('active');
        }
    });
};

const setCurrentPage = (pageNum) =>{
    currentPage = pageNum;

    handleActivePageNumber();
    controlButtonsStatus();

    const prevRange = (pageNum -1) * contentLimit;
    const currRange = pageNum * contentLimit;

    listItems.forEach((item, index) =>{
        item.classList.add('hidden');
        if(index >= prevRange && index < currRange){
            item.classList.remove('hidden');
        }
    });
};


    getPageNumbers();
    setCurrentPage(1);
	console.log("test");
    prevButton.addEventListener('click', ()=>{
        setCurrentPage(currentPage - 1);
    });

    nextButton.addEventListener("click", ()=>{
        setCurrentPage(currentPage + 1);
    });

    document.querySelectorAll('a').forEach((button) =>{
        const pageIndex = Number(button.getAttribute('index'));

        if(pageIndex){
            button.addEventListener('click', ()=>{
                setCurrentPage(pageIndex);
            });
        };
    });
});
  

const post = document.getElementById("post");
post.addEventListener("submit", function (e) {
	close()
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var dob = document.getElementById("dob").value;
  var gender = document.getElementById("gender").value;
  var role = document.getElementById("role").value;
  var id = document.getElementById("id");
  if (id.value === "") {
    e.preventDefault();
    console.log(fname, lname, password, email, dob, gender, role);

    fetch("http://localhost:8080/user", {
      method: "POST",
      body: JSON.stringify({
        fname: fname,
        lname: lname,
        password: password,
        email: email,
        dob: dob,
        gender: gender,
        role: role,
      }),
      headers: { "Content-Type": "application/json;charset=UTF-8" },
    })
      .then(() => {
        return alert("L'utilisateur a été Ajouté avec succés");
      })
      .then((data) => {
        console.log(data);
      });
  } else {
    fetch("http://localhost:8080/user", {
      method: "PUT",
      body: JSON.stringify({
        id: id.value,
        fname: fname,
        lname: lname,
        password: password,
        email: email,
        dob: dob,
        gender: gender,
        role: role,
      }),
      headers: { "Content-Type": "application/json;charset=UTF-8" },
    }).then(() => {
        return alert("L'utilisateur a été Modifier avec succés");
      });
  }
});

function del(tab) {
  var id = tab.parentElement.parentElement.firstChild.innerHTML;
  var link = "http://localhost:8080/user" + "/" + id;
  fetch(link, { method: "DELETE" }).then(() => {
        return alert("L'utilisateur a été Supprimé avec succés");
      })
      .then((data) => {
        console.log(data);
      });
}
function update(tab) {
	ajouter();
  document.getElementById("id").value =
    tab.parentElement.parentElement.children[0].innerHTML;
  document.getElementById("fname").value =
    tab.parentElement.parentElement.children[1].innerHTML;
  document.getElementById("lname").value =
    tab.parentElement.parentElement.children[2].innerHTML;
  document.getElementById("password").value =
    tab.parentElement.parentElement.children[8].innerHTML;
  document.getElementById("email").value =
    tab.parentElement.parentElement.children[3].innerHTML;
  document.getElementById("dob").value =
    tab.parentElement.parentElement.children[4].innerHTML;
  document.getElementById("gender").value =
    tab.parentElement.parentElement.children[5].innerHTML;
  document.getElementById("role").value =
    tab.parentElement.parentElement.children[6].innerHTML;
}

window.alert=function(message,timeout=null){
	const alert = document.createElement("div");
	const alertButton = document.createElement('button');
	alertButton.innerText="OK";
	alert.classList.add('alert');
	alert.setAttribute('style',`background-color:white;position:fixed;top:100px;left:50%;padding:20px;border-radius:10px;box-shadow: 0 10px 5px 0 #00000022;display:flex;flex-direction:column;border:1px solid #333
`

	);
	alert.innerHTML=`<span style="padding:10px">${message}</span>`;
	alert.appendChild(alertButton);
	alertButton.addEventListener('click',()=>{
		alert.remove();
	});
	if(timeout != null){
		setTimeout(()=>{
			alert.remove;
		},Number(timeout))
	}
	document.body.appendChild(alert);
	alertButton.addEventListener("click",()=>{
		window.location.reload();
	})
}
function ajouter()
{
	if(document.getElementById("openclose").innerHTML=="Ajouter")
	{
	document.getElementById("open").classList.remove("hidden");
	document.getElementById("black").style="display:block"
	document.getElementById("openclose").style="background-color: #f94144;";
	document.getElementById("openclose").innerHTML="Fermer";
	}
	else
	{
		close();
		document.getElementById("openclose").style="background-color: #90be6d;";
		document.getElementById("openclose").innerHTML="Ajouter";

	}
}

function close()
{
		document.getElementById("black").style="display:none"
		document.getElementById("open").classList.add("hidden");

}