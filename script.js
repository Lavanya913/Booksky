var popupoverlay=document.querySelector(".popupoverlay");
var popupbox=document.querySelector(".popupbox");
var addbtn=document.getElementById("addbtn");
var cancelbtn=document.getElementById("cancelbtn");
addbtn.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})
cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none";
    popupbox.style.display="none";
})

//selecting for adding input and displaying
var container=document.querySelector(".container");
var containerbox=document.querySelector(".containerbox");
var booktitle=document.getElementById("book-title-input");
var bookauthor=document.getElementById("book-author-input");
var bookdescription=document.getElementById("book-description");
var addinput=document.getElementById("add-input-button");
addinput.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","containerbox")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick='deletedata(event)'>Delete</button>`
    container.append(div)
    popupoverlay.style.display="none";
    popupbox.style.display="none";
})

function deletedata(event){
    event.target.parentElement.remove()
}


