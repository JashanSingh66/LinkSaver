let catg=document.getElementById("addedCategories");


let submit=document.getElementById("submitBtn");

submit.addEventListener("click",function(e){
    e.preventDefault();
    let input=document.getElementById("category").value;

    let catgArray = new Set();
    catgArray=input.split(",");

    for(let i=0;i<catgArray.length;i++){
        let newDiv=document.createElement("div");
        newDiv.textContent=catgArray[i].trim();
        catg.appendChild(newDiv);
    }
})

document.getElementById("category").value=""; 


