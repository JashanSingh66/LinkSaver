const data=[];
const form=document.getElementById("addLinkPanel");
form.addEventListener("submit",function(event){
    event.preventDefault();
    const URL=document.getElementById("link");
    const title=document.getElementById("title");
    const category=document.getElementById("category");
    const link={
        url:URL.value,
        name:title.value,
        catg:category.value
    }
    data.push(link);
    print(link);
    console.log(data);
})
function print(link){
    console.log(link);
    const linkData=document.getElementById("linkData");
    const newdiv=document.createElement("div");
    const content=document.createTextNode("Data");
    newdiv.appendChild(content);
    linkData.appendChild(newdiv);
    

} 
console.log(form.name);


// for toggling of the form 

const add=document.getElementById("addBtn");
const formPanel=document.getElementsByClassName("panel");
add.addEventListener("click",function(e){
    e.preventDefault();
    formPanel[0].classList.toggle("hidden");
})



// adding the categories in an array
const linkCategory=document.getElementById("category");
let linkCategories=[];
linkCategory.addEventListener("keydown",function(event){
    if(event.key === ","){
        event.preventDefault();
        linkCategories.push(linkCategory.value.trim());
        linkCategory.value="";
        displayLinkCategories();
    }
});
// for displaying categories on adding
function displayLinkCategories(){
    console.log(linkCategories);
}





