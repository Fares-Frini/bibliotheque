var t;
fetch("http://localhost:8080/book/findbook")
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
      cell.innerHTML = "Aucun Livre Disponible";
      cell.colSpan = "7";
    }
    for (let i = 0; i < l; i++) {
      var row = table.insertRow(i + 1);
      var idCell = row.insertCell(0);

      var nameCell = row.insertCell(1);
      var authorCell = row.insertCell(2);
      var douCell = row.insertCell(3);
      var categoryCell = row.insertCell(4);
      var ButtonCell = row.insertCell(7);
      var delButton = document.createElement("input");
      var modButton = document.createElement("input");
      delButton.type = "button";
      delButton.value = "Supprimer";
      delButton.style =
        "color:white;background-color:#f94144 ;font-weight: bold;margin: 5px;font-size: medium;border-radius: 10px; padding: 5px; ";
      modButton.setAttribute("onclick", "update(this)");
      modButton.type = "button";
      modButton.value = "Modifier";
      modButton.style =
        "color:white;background-color:#f8961e;font-weight: bold;margin: 5px;font-size: medium;border-radius: 10px; padding: 5px; ";
      delButton.setAttribute("onclick", "del(this)");
      ButtonCell.style = "text-align: center;";
      ButtonCell.appendChild(delButton);
      ButtonCell.appendChild(modButton);
      ButtonCell.style = "margin:0px;";
      nameCell.innerHTML = t[i].name;
      authorCell.innerHTML = t[i].author;
      douCell.innerHTML = t[i].dou;
      categoryCell.innerHTML = t[i].category;
      idCell.innerHTML = t[i].id;
      idCell.style = "display:none;";
    }
  }).then(()=>{
	  const pageNumbers = document.querySelector(".pageNumbers");
const paginationList = document.getElementById("table");
const listItems = paginationList.querySelectorAll("tr");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const contentLimit = 4;
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
  var name = document.getElementById("name").value;
  var author = document.getElementById("author").value;
  var category = document.getElementById("category").value;
  var dou = document.getElementById("dou").value;
  var id = document.getElementById("id");
  if (id.value === "") {
    e.preventDefault();

    fetch("http://localhost:8080/book", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        author: author,
        category: category,
        dou: dou,
      }),
      headers: { "Content-Type": "application/json;charset=UTF-8" },
    })
      .then(() => {
        return alert("Le livre a été Ajouté avec succés");
      })
      .then((data) => {
        console.log(data);
      });
  } else {
    fetch("http://localhost:8080/user", {
      method: "PUT",
      body: JSON.stringify({
        id: id.value,
        name: name,
        author: author,
        category: category,
        dou: dou,
      }),
      headers: { "Content-Type": "application/json;charset=UTF-8" },
    }).then(() => {
        return alert("Le livre a été Modifier avec succés");
      });
  }
});

function del(tab) {
  var id = tab.parentElement.parentElement.firstChild.innerHTML;
  var link = "http://localhost:8080/book" + "/" + id;
  fetch(link, { method: "DELETE" }).then(() => {
        return alert("Le livre a été Supprimé avec succés");
      })
      .then((data) => {
        console.log(data);
      });
}
function update(tab) {
  document.getElementById("id").value =
    tab.parentElement.parentElement.children[0].innerHTML;
  document.getElementById("name").value =
    tab.parentElement.parentElement.children[1].innerHTML;
  document.getElementById("author").value =
    tab.parentElement.parentElement.children[2].innerHTML;
  document.getElementById("category").value =
    tab.parentElement.parentElement.children[8].innerHTML;
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


