
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
    if(event.key === "Enter"){
        event.preventDefault();
        if(linkCategory.value===""){
            alert("Please Enter Category");
        }else{ 
            linkCategories.push(linkCategory.value.trim());
            linkCategory.value="";
        }
    }
});


// event listener for the form 
const form=document.getElementById("addLinkPanel");
form.addEventListener("submit",function(event){
    event.preventDefault();
    const URL=document.getElementById("link");
    const title=document.getElementById("title");
    if(URL.value === ""){
        alert("Please Enter Title");
    }
    else if(title.value === ""){
        alert("Please Enter URL");
    }else{
        const link={
            url:URL.value,
            title:title.value,
            catg:linkCategories
        }
        linkCategories=[];
        URL.value="";
        title.value="";

        // For local storage storing
        localStorage.setItem("link",JSON.stringify(link));

        // For printing the data
        print();
        formPanel[0].classList.toggle("hidden"); 
    }
})

// For displaying the links on the page 
function print(){
    const linkData=document.getElementById("linkData");
    const p1=document.createElement("p");
    const p2=document.createElement("p");  
    const btn=document.createElement("button"); 
    const a=document.createElement("a");  
    const data=JSON.parse(localStorage.getItem("link"));
    const c1=document.createTextNode("Name : "+ data.title);
    const c2=document.createTextNode("Category : "+data.catg);
    const c3=document.createTextNode("URL : ");
    a.href=data.url;
    a.textContent=data.url;
    p1.appendChild(c1);
    p2.appendChild(c2);
    btn.appendChild(c3);
    a.classList.add("hidden");
    const div1=document.createElement("div");
    div1.appendChild(p1);
    div1.appendChild(p2);
    div1.appendChild(btn);
    div1.appendChild(a);
    linkData.appendChild(div1);

    a.target="_blank";
    btn.addEventListener("click",function(e){
        a.classList.toggle("hidden");
        e.preventDefault();
    })
} 


// adding user login/signup logic 

const loginBtn=document.getElementById("loginBtn");
const login=document.getElementsByClassName("login");
loginBtn.addEventListener("click",function(e){
    e.preventDefault();
    login[0].classList.toggle("hidden");
    
})







