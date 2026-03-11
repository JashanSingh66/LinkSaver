
// for toggling of the form 

const add=document.getElementById("addBtn");
const formPanel=document.getElementsByClassName("panel");
add.addEventListener("click",function(e){
    e.preventDefault();
    formPanel[0].classList.toggle("hidden");
})



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
    formPanel[0].classList.toggle("hidden");
    console.log(data);
    
})
function print(link){
    console.log(link);
    const linkData=document.getElementById("linkData");
    const p1=document.createElement("p");
    const p2=document.createElement("p");     
    const c1=document.createTextNode(link.name);
    const c2=document.createTextNode(link.catg);
    p1.appendChild(c1);
    p2.appendChild(c2);
    const newDiv=document.createElement("div");

    newDiv.appendChild(p1);
    newDiv.appendChild(p2);
    newDiv.addEventListener("click",function(e){
        e.preventDefault();
        console.log(link.url);
    })
    linkData.appendChild(newDiv);
    

} 
console.log(form.name);





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





