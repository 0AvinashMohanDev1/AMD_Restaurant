let container=document.getElementById("container");
let footer=document.getElementById("footer");
let filter=document.getElementById("filter");
let productData=[];
fetch1();
footerData();

filter.addEventListener("change",(e)=>{
    let input=e.target.value;
    container.innerHTML=null;
    let data=productData.filter((element)=>{
        if(element.food==input){
            return true;
        }else{
            return false;
        }
    });
console.log(data);
    if(data.length===0){
        display(productData);
    }else{
        display(data);
    }
})












function footerData(){
    let firstBlock=document.createElement("div");
    let blockBox1=document.createElement("div");
    let ul1=document.createElement("ul");
    let l1=document.createElement("li");
    l1.innerText="Why AMD";
    let l2=document.createElement("li");
    l2.innerText="Refer & Earn";
    let l3=document.createElement("li");
    l3.innerText="AMD Cash & Cash+";
    let l4=document.createElement("li");
    l4.innerText="About Us";
    let l5=document.createElement("li");
    l5.innerText="FSSAI 22000Certification";
    let l6=document.createElement("li");
    l6.innerText="FSSAI Certification";
    ul1.append(l1,l2,l3,l4,l5,l6);
    blockBox1.append(ul1);
    let blockBox2=document.createElement("div");

    // let img1=document.createElement("img");
    // img1.setAttribute("src","./image/Amd01 (2).png");
    // blockBox2.append(img1);


    //  firstBlock.style.backgroundColor="cyan";
    firstBlock.append(blockBox1,blockBox2);
    footer.append(firstBlock);
    // footer.innerText="Hello";
    footer.style.color="red";
    
}

function fetch1(){
    fetch("./image.json")
.then((responceData)=>{
    return responceData.json();
})
.then((actualData)=>{
    productData=actualData;
    display(actualData);
    console.log(actualData);
})
.catch((error)=>{
    console.log(error);
})
}

function display(data){
    data.forEach((element,index) => {
        let box=document.createElement("div");
        let image=document.createElement("img");
        image.setAttribute("src",element.image);
        let Title=document.createElement("h2");
        Title.innerText=element.Title;
        let category=document.createElement("h3");
        category.innerText=element.category;
        let food=document.createElement("h3");
        food.innerText=element.food;
        let price=document.createElement("h2");
        price.innerText=element.price;

        box.append(image,Title,price,category,food);

        container.append(box);
    });
}