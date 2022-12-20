let container=document.getElementById("container");
let footer=document.getElementById("footer");
let filter=document.getElementById("filter");
let category=document.getElementById("category");
let priceSort=document.getElementById("priceSort");
// let veg=document.createElement("button")
let veg=document.getElementById("veg");
let nonVeg=document.getElementById("non-veg")
let home=document.getElementById("home")
let float=document.getElementById("floating");
let search=document.getElementById("search");
let productData=[];
let floating=[];
fetch1();
footerData();
floatFetch();
// console.log(productData)
home.addEventListener("click",()=>{
    container.innerHTML=null;
    display(productData);
})
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
});
search.addEventListener("input",()=>{
    container.innerHTML=null;
    let input=search.value.toLowerCase();
    let newData=productData.filter((el)=>{
        return el.Title.toLowerCase().includes(input);
    });
    console.log(newData);
    display(newData);
});
veg.addEventListener("click",()=>{
    container.innerHTML=null;
    let data=productData.filter((element)=>{
        if(element.category=="Veg"){
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
});
nonVeg.addEventListener("click",()=>{
    container.innerHTML=null;
    let data=productData.filter((element)=>{
        if(element.category=="Non-Veg"){
            return true;
        }else{
            false;
        }
    });
    console.log(data);
    if(data.length===0){
        display(productData);
    }else{
        display(data);
    }
})

priceSort.addEventListener("change",()=>{
    let input=priceSort.value;
    let data;
    let productData1=productData;
    container.innerHTML=null;
    if(input==="l2h"){
       data=productData1.sort((a,b)=>{return a.price-b.price});
    //    display(data);
    //    console.log(data);
    }else if(input==="h2l"){
       data=productData1.sort((a,b)=>{return b.price-a.price});
    //    display(data);
    //    console.log(data);
    }
    console.log(data);
    if(data==undefined){
        display(productData);
    }else{
        display(data);
    }
})
console.log(floating);
let val=0;
setInterval(()=>{
    let image=document.createElement("img");
    image.setAttribute("src",floating[val]);
    float.innerHTML=null;
    float.append(image);
    val++;
    if(val===floating.length) val=0;
},2000);

function floatFetch(){
    fetch("./float.json")
    .then((responceData)=>{
        return responceData.json();
    })
    .then((actualData)=>{
        floating=actualData;
        // console.log(actualData);
    })
    .catch((error)=>{
        console.log(error);
    })
}



function fetch1(){
    fetch("./image.json")
.then((responceData)=>{
    return responceData.json();
})
.then((actualData)=>{
    productData=actualData;
    // console.log(productData)
    display(actualData);
})
.catch((error)=>{
    console.log(error);
})
}

function footerData(){
    let firstBlock=document.createElement("div");
    let blockBox1=document.createElement("div");
    let ul1=document.createElement("ul");
    let l1=document.createElement("li");
    l1.innerText="Why AMD?";
    l1.style.margin="10px 0px";
    let l2=document.createElement("li");
    l2.innerText="Refer & Earn";
    l2.style.margin="10px 0px";
    let l3=document.createElement("li");
    l3.innerText="AMD Cash & Cash+";
    l3.style.margin="10px 0px";
    let l4=document.createElement("li");
    l4.innerText="About Us";
    l4.style.margin="10px 0px";
    let l5=document.createElement("li");
    l5.innerText="FSSAI 22000Certification";
    l5.style.margin="10px 0px";
    let l6=document.createElement("li");
    l6.innerText="FSSAI Certification";
    l6.style.margin="10px 0px";
    ul1.append(l1,l2,l3,l4,l5,l6);
    blockBox1.append(ul1);
    // blockBox1.style.border="2px solid red"
    let blockBox2=document.createElement("div");
    // blockBox2.style.border="2px solid blue";
    blockBox2.style.height="100%";
    let blockBox2_1=document.createElement("h3");
    blockBox2_1.innerText="Downlode Our App";
    // let blockBox2_img11=document.createElement("button");
    // let ancohr=document.createElement(a);
    // ancohr.setAttribute("href","www.play.google");
    let google=document.createElement("a");
    google.setAttribute("href","https:play.google.com");
    let blockBox2_img1=document.createElement("img");
    blockBox2_img1.setAttribute("src","https://helios-i.mashable.com/imagery/articles/04EZglaVzAW19V6FIiDD3TA/hero-image.fill.size_1200x1200.v1623363034.jpg");
    blockBox2_img1.style.width="50px";
    blockBox2_img1.style.marginRight="10px";
    google.append(blockBox2_img1);
    // ancohr.innerText=blockBox2_img1;
    let blockBox2_img2=document.createElement("img");
    blockBox2_img2.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Apple_Store_logo.svg/2048px-Apple_Store_logo.svg.png");
    blockBox2_img2.style.width="50px";
    let apple=document.createElement("a");
    apple.setAttribute("href","https://www.apple.com/in/store");
    apple.append(blockBox2_img2);
    // let div=document.createElement("div");
    // div.append(ancohr);
    blockBox2.append(blockBox2_1,google,apple);
    blockBox2.style.marginLeft="30px";
    firstBlock.append(blockBox1,blockBox2);
    // firstBlock.style.border="5px solid black";
    firstBlock.style.display="flex";
    firstBlock.style.width="50%";

    let mainBlock1=document.createElement("div");
    
    // mainBlock1.style.border="2px dashed brown"
    mainBlock1.append(firstBlock)

    let secondBlock=document.createElement("div");
    secondBlock.innerText="2022 Delightful Gourmet Pvt Ltd. All Rights Reserved."
    
    footer.append(mainBlock1,secondBlock);
    
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
        let cart=document.createElement("button");
        cart.innerHTML="Add To Cart"
        cart.style.width="70px";
        cart.style.height="40px";
        cart.style.backgroundColor="pink";
        cart.style.borderRadius="5px";
        let button=document.createElement("button");
        button.innerHTML="Add To Cart";
        // button.style.width="70px";
        button.style.height="30px";
        button.style.borderColor="red";
        button.style.color="red";
        button.style.backgroundColor="antiquewhite";
        button.addEventListener("click",()=>{
            let cartData=JSON.parse(localStorage.getItem("cartData"))||[];

            let isPresent=false;

            for(let i=0;i<cartData.length;i++){
                if(element.id==cartData[i].id){
                    isPresent=true;
                    break;
                }
                // console.log(i,);
            }
            if(isPresent===true){
                alert("Item already added");
            }
            else{
                cartData.push(element);
                alert("Item added to cart");
            }
            console.log(cartData);
            localStorage.setItem("cartData",JSON.stringify(cartData));
        })
        box.append(image,Title,price,category,food,button);

        container.append(box);
    });
}