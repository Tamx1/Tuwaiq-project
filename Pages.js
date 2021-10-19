localStorage.clear();

let json1 = [];
json1.push(null);
fetch('https://fakestoreapi.com/products')
.then(function(response) {return response.json()}).then(function (json)
{ 
    for(let i = 0 ; i < json.length ; i ++)
    {json1.push(json[i]);}
    })


function home(){

let div = document.querySelector(".d0");
div.innerHTML = "";
let h = document.createElement("h2");
h.className = "h0";
h.textContent = "Smart Store";

let hr = document.createElement("hr");
hr.className = "hr0";

let p = document.createElement("p");
p.className = "p0";
p.textContent = "Platform for people to discover and shop the products they love. With fast delivery, easy payment and return options and a 24-hour customer service, find everything you need at competitive prices.All our products are backed by our authenticity promise and noon warranty. At noon we have a dedicated product integrity team who have been trained by world renowned brands to identify the difference between authentic and fraudulent products, and ensure we only sell authentic products.";

div.append(h);
div.append(hr);
div.append(p);

}

// -------------------------------------------------------------------------------------------------------


function about(){

    let div = document.querySelector(".d0");
    div.innerHTML = "";
    let h = document.createElement("h2");
    h.className = "h0";
    h.textContent = "About us";
    
    let hr = document.createElement("hr");
    hr.className = "hr0";
    
    let p = document.createElement("p");
    p.className = "p0";
    p.textContent = "Amazon works hard to delight our customers every day, and we want you to have peace of mind when shopping for products in our store including items sold by third-party sellers. Amazon’s longstanding A-to-z Guarantee protects you when you buy items that are sold and fulfilled by a third-party seller. It covers both the timely delivery and condition of your items. If you're not happy with either and can’t resolve the issue directly with the seller, you can make a claim directly to Amazon for a refund. We are continually looking for new ways to innovate for you, and this year we expanded our A-to-z Guarantee to include a process for resolving personal injury.";

    div.append(h);
    div.append(hr);
    div.append(p);
    
    }

// -----------------------------------------------------------------------------------------------------------



function contact() {
    
    let div = document.querySelector(".d0");
    div.innerHTML = '<div class="dt"> <h2 class="h0 hc" style="color: white;">Contact us</h2> <form onsubmit="contact2()"> <div class="form-group row"> <label for="inputEmail3" class="col-sm-2 col-form-label hc2" style="color: white;">Email :</label> <div class="col-sm-10"> <input type="email" class="form-control" id="inputEmail3" placeholder="Email" required><br> </div> </div> <div class="form-group row"> <label for="inputPassword3" class="col-sm-2 col-form-label hc2" style="color: white;">Name :</label> <div class="col-sm-10"> <input type="text" class="form-control" id="inputPassword3" placeholder="Name" required><br> </div> </div> <fieldset class="form-group"> <div class="row"> <div class="col-sm-10"> <div class="form-check"> <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked> <label class="form-check-label hc2" for="gridRadios1" style="color: white;"> Suggested </label> </div> <div class="form-check"> <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"> <label class="form-check-label hc2" for="gridRadios2" style="color: white;"> Complaint </label> </div> </div> </div> </fieldset> <br> <div class="form-group row"> <div class="col-sm-10"> <button type="submit" class="btn btn-primary b1">Send</button> </div> </div> </form> </div> <br><br><br><br>'
}
function contact2() {

    let div = document.querySelector(".d0");
    div.innerHTML = "";
    let div2 = document.createElement("div");
    div2.className = "dt";
    div2.style = "margin-bottom: 50px"

    let h = document.createElement("h2");
    h.className = "h0 hc";
    h.style = "color: white;  text-align: center;"
    h.innerText = "Sent succesfully, We will contact you.";

    div2.append(h);
    div.append(div2)
}

// -----------------------------------------------------------------------------------------------------------

function login() {
    if(document.querySelector("#login").innerText != 'Login'){alert("Already logged in"); home(); return;}
    let div = document.querySelector(".d0");
    div.innerHTML ='<div class="dt"> <h2 class="h0 hc" style="color: white;">Login</h2> <form> <div class="form-group row"> <label for="inputEmail3" class="col-sm-2 col-form-label hc2" style="color: white;">UserName :</label> <div class="col-sm-10"> <input type="text" class="form-control" id="userName" placeholder="User Name"  required ><br> </div> </div> <div class="form-group row"> <label for="inputPassword3" class="col-sm-2 col-form-label hc2" style="color: white;">Password :</label> <div class="col-sm-10"> <input type="password" class="form-control" id="pass" placeholder="Password" required ><br> </div> </div> <fieldset class="form-group"> <div class="row"> <div id="Epassowrd"></div> <div class="col-sm-10"> <div class="form-check"> <a href="" class="u0 text-primary"> Create new account </a> </div> <div class="form-check"> <a href="" class="u0 text-primary">  Forgot your password? </a> </div> </div> </div> </fieldset> <br> <div class="form-group row"> <div class="col-sm-10"> <button type="button" onclick="Users()" class="btn btn-primary b1">Login</button> </div> </div> </form> </div> <br><br><br><br>';
}
//--------------------------------------------------------------------------------------------------------------

function reviews() {
    let div = document.querySelector(".d0");
    div.innerHTML = '<div id="add"> <div class="d10"> <img src="Imges/icon.png" id="img2" style="border: none;  margin-left: 1%;" width="50px" height="50px" alt=""> <h6 class="he5">@Ahmed</h6> <p class="pr2">Thank you for the quality of dealing and the quality of the goods. Really fast response and delivery. The Rolex watch is very good and beautiful. I hope to find a way to provide a guarantee to complement the excellent service. Thanks again.</p> </div> <div class="d10"> <img src="Imges/icon.png" style="border: none;  margin-left: 1%;" width="50px" height="50px" alt=""> <h6 class="he5">@Omar</h6> <p class="pr2">The product is excellent. The treatment was very courteous and respectful. As well as punctuality in their appointments.</p> </div> <div class="d10"> <img src="Imges/icon.png" style="border: none;  margin-left: 1%;" width="50px" height="50px" alt=""> <h6 class="he5">@Rand</h6> <p class="pr2">Excellent and reliable interaction. The watch is awesome and better than the picture. The order arrived on time, thank you.</p> </div> </div> <div class="d10"> <form id="rev"> <div class="form-group"> <label for="exampleFormControlInput1">User Name:</label> <input type="text" class="form-control" id="userR" placeholder="user" readonly="readonly"> </div> <div class="form-group"> <label for="exampleFormControlTextarea1">Your review:</label> <textarea class="form-control" id="userM" rows="3" placeholder="Write your review" name="msg"></textarea> </div> <br> <br> <button type="button" onclick="addReviews()" class="btn btn-outline-primary">Send</button> </form> </div>'
    document.querySelector("#userR").value = document.querySelector("#login").innerHTML;
}
// ------------------------------------------------------------------------------------------------------------


function catalogue(t) {
    if(document.querySelector("#login").innerText == 'Login'){alert("You must be logged in"); login(); return;}

   

    


        let div0 = document.querySelector(".d0");
        div0.innerHTML = "";
        let j = 0;
    
        let div2 = document.createElement("div");
        div2.className = "card-group" ;
        div2.id = "card-group2" ;

        for(let i = 0; i < json1.length  ; i++ , j++){
            if(json1[i] == null){continue;}
            if(t[0] == json1[i].category[0]){
            if(j == 5){
        div2 = document.createElement("div");
        div2.className = "card-group" ;
        div2.id = "card-group2" ;
        j = 0;}
    
        let div3 = document.createElement("div");
        div3.className = "card";
        div3.id = "card"
        div3.style = "border: 5px solid #cccccc; border-radius: 10px 10px 10px 10px; background-color: #f3f3f3;"
    
        let img1 = document.createElement("img");
        img1.className = "card-img-top";
        img1.style = "height: 150px; border: 1px solid #cccccc; border-radius: 4px 4px 0px 0px;"
        img1.src = json1[i].image;
        div3.append(img1);
    
        let div4 = document.createElement("div");
        div4.className = "card-body" ;
    
        let h = document.createElement("h6");
        h.innerText = json1[i].title;
        h.style = "color: #343a40;text-align: center;margin: 4%;font-size: 16pt;"
        div4.append(h);
    
        let div5 = document.createElement("div");
        div5.className = "card-footer" ;
    
        let small = document.createElement("small");
        small.className = "text-muted" ;
    
        let button = document.createElement("button");
        button.className ="btn btn-outline-secondary btn-sm" ;
        button.style = "width: 100%;";
        button.innerText="More details"
        button.setAttribute("onclick", "details("+json1[i].id+")");

        small.append(button);

        let button2 = document.createElement("button");
        button2.className ="btn btn-outline-primary  btn-sm" ;
        button2.style = "width: 100%;";
        button2.innerText="Edit product"
        button2.setAttribute("onclick", "edit_product1("+json1[i].id+")");

        let button3 = document.createElement("button");
        button3.className ="btn btn-outline-danger btn-sm" ;
        button3.style = "width: 100%;";
        button3.innerText="Delete product"
        button3.setAttribute("onclick", "del_product("+json1[i].id+")");

        if(document.querySelector("#login").innerText == 'Admin'){ 

                small.append(button2);
                small.append(button3);}



        div5.append(small);
    
        div3.append(div4);
        div3.append(div5);
    
        div2.append(div3);
        div0.append(div2);
    
    
    }}
        
    
      
    if(document.querySelector("#login").innerText == 'Admin'){
        let div3 = document.createElement("div");
        div3.className = "card";
        div3.id = "card"
        div3.style = "border: 5px solid #cccccc; border-radius: 10px 10px 10px 10px; background-color: #f3f3f3;"
    
        let div4 = document.createElement("div");
        div4.className = "card-body" ;
    
        let h = document.createElement("h6");
        h.innerText = "Add new product";
        h.style = "color: #343a40;text-align: center;margin: 4%;font-size: 16pt;"
        div4.append(h);
    
        let div5 = document.createElement("div");
        div5.className = "card-footer" ;
    
        let small = document.createElement("small");
        small.className = "text-muted" ;
    
        let button = document.createElement("button");
        button.className ="btn btn-secondary btn-sm" ;
        button.style = "width: 100%;";
        button.innerText="Add"
        button.setAttribute("onclick", "Add_product1()");
    
        small.append(button);
        div5.append(small);
    
        div3.append(div4);
        div3.append(div5);
    
        div2.append(div3);
        div0.append(div2);
    }





      
    }



// ------------------------------------------------------------------------------------------------------------

function del_product(id) {
    let j = -1;
    for(let i = 0 ; i < json1.length ; i ++){
        if(json1[i] == null){continue;}
        if(json1[i].id == id){
            j = i;
            break;
        }
    }

    let x =  json1[j].category[0]
    
    let temp = [];

    for(let i = 0 ; i < json1.length ; i ++)
    {
        if(i == j){continue;}
        temp.push(json1[i]);}

    json1 = temp;
    catalogue(x);
    return;
}


// ------------------------------------------------------------------------------------------------------------
function Add_product1() {
    let div0 = document.querySelector(".d0");
    div0.innerHTML = '<form style="margin: 3%;"> <div class="form-group"> <label for="Title">Title:</label> <input type="text" class="form-control" id="Title" placeholder="New product"> </div> <div class="form-group"> <label for="Price">Price:</label> <input type="number" class="form-control" id="Price" placeholder="100$"> </div> <div class="form-group"> <label for="Image">Image:</label> <input type="text" class="form-control" id="Image" placeholder="https://i.pravatar.cc"> </div> <div class="form-group"> <label for="Category">Category:</label> <select multiple class="form-control" id="Category"> <option value="mens clothing">Mens clothing</option> <option value="womens clothing">Womens clothing</option> <option value="jewelery">Jewelery</option> <option value="electronics">Electronics</option> </select> </div> <div class="form-group"> <label for="Description">Description:</label> <textarea class="form-control" id="Description" rows="3"></textarea> </div> <button type="button" class="btn btn-secondary" onclick="Add_product2()">Add product</button> </form>';
}


function Add_product2() {

              let x =  {
                    id: json1.length,
                    title: document.getElementById("Title").value,
                    price: parseInt(document.getElementById("Price").value),
                    description: document.getElementById("Description").value,
                    image: document.getElementById("Image").value,
                    category: document.getElementById("Category").value,
                    rating: {rate:"0.1" , count:0}
                };
                json1.push(x);
            catalogue(x.category[0]);
            return;
}

// ------------------------------------------------------------------------------------------------------------

function edit_product1(id) {
    
    for(let i = 0 ; i < json1.length ; i++){
        if(json1[i] == null){continue;}
        if(json1[i].id == id){id = i; break; }
    }

    let div0 = document.querySelector(".d0");
    div0.innerHTML = '<form style="margin: 3%;"> <div class="form-group"> <label for="Title">Title:</label> <input type="text" class="form-control" id="Title" placeholder="New product"> </div> <div class="form-group"> <label for="Price">Price:</label> <input type="number" class="form-control" id="Price" placeholder="100$"> </div> <div class="form-group"> <label for="Image">Image:</label> <input type="text" class="form-control" id="Image" placeholder="https://i.pravatar.cc"> </div> <div class="form-group"> <label for="Category">Category:</label> <select multiple class="form-control" id="Category"> <option value="mens clothing">Mens clothing</option> <option value="womens clothing">Womens clothing</option> <option value="jewelery">Jewelery</option> <option value="electronics">Electronics</option> </select> </div> <div class="form-group"> <label for="Description">Description:</label> <textarea class="form-control" id="Description" rows="3"></textarea> </div> <button type="button" class="btn btn-secondary" onclick="edit_product2('+id+')">Add product</button> </form>';

    let t = document.querySelector("#Title"); 
    let p = document.querySelector("#Price"); 
    let img = document.querySelector("#Image"); 
    let c = document.querySelector("#Category"); 
    let d = document.querySelector("#Description"); 

    let j = -1;
    if(json1[id].category[0] == 'm'){j=0;}
    if(json1[id].category[0] == 'w'){j=1;}
    if(json1[id].category[0] == 'j'){j=2;}
    if(json1[id].category[0] == 'e'){j=3;}

    t.value = json1[id].title;
    p.value = json1[id].price;
    img.value = json1[id].image;
    c.selectedIndex = j;
    d.innerHTML = json1[id].description;

}



// -------
function edit_product2(id) {
    
    for(let i = 0 ; i < json1.length ; i++){
        if(json1[i] == null){continue;}
        if(json1[i].id == id){id = i; break; }
    }


    let x =  {
        id: json1.length,
        title: document.getElementById("Title").value,
        price: parseInt(document.getElementById("Price").value),
        description: document.getElementById("Description").value,
        image: document.getElementById("Image").value,
        category: document.getElementById("Category").value,
        rating: {rate:"0.1" , count:0}
    };
    json1[id] = x;
    catalogue(x.category[0]);
return;

}

// ------------------------------------------------------------------------------------------------------------

   function details(id) {
       
    for(let i = 0 ; i < json1.length ; i++){
        if(json1[i] == null){continue;}
        if(json1[i].id == id){id = i; break; }
    }

    
        let div0 = document.querySelector(".d0");
        div0.innerHTML = "";
        let div1 = document.createElement("div");
        div1.className = "dt";
        div1.style = "padding: 35px;"
        

        let h = document.createElement("h4");
        h.innerText = json1[id].title;
        h.className = "details";

        let hr = document.createElement("hr");
        hr.style = "height: 5px;";


        let p1 = document.createElement("p");
        p1.className = "details";
        p1.innerText="Description : " +json1[id].description;


        let p2 = document.createElement("p");
        p2.className = "details";
        p2.innerText="Price : "+ json1[id].price+'$';


        let p3 = document.createElement("p");
        p3.className = "details";
        p3.innerText="Rating : "+ json1[id].rating.rate+"/5";

        button1 = document.createElement("button");
        button1.className = "btn btn-success btn-sm";
        button1.innerText = "Buy";
        button1.id = "b5"
        button1.setAttribute("onclick", "addItem("+id+",0)");

        button2 = document.createElement("button");
        button2.className = "btn btn-primary btn-sm";
        button2.innerText = "Add to cart";
        button2.setAttribute("onclick", "addItem("+id+",1)");

        button3 = document.createElement("button");
        button3.className = "btn btn-secondary btn-sm";
        button3.innerText = "Reviews";
        button3.setAttribute("onclick", "reviews()");





        div1.append(h);
        div1.append(hr);
        div1.append(p1);
        div1.append(p2);
        div1.append(p3);
        div1.append(button1);      
        div1.append(button2);
        div1.append(button3);
        div0.append(div1);
  

       
   } 


// ------------------------------------------------------------------------------------------------------------
function cart() {
    if(document.querySelector("#login").innerText == 'Login'){alert("You must be logged in");  login(); return;}
    let div = document.querySelector(".d0");
    div.innerHTML = '<h2 class="h0">Your Cart</h2> <hr class="hr0" style="height: 3px;"> <div id="empty" ></div> <div id="cartDiv" ></div> <div id="f0"> <div class="form-group mx-sm-3 mb-2"> <label for="c0" class="sr-only" style="margin-top: 40px;">Discount coupon:</label> <input type="text" class="form-control" id="c0" placeholder="Enter yor coupon"> <button onclick="coupon()" class="btn btn-secondary btn-sm">Check Coupon</button> </div> <p id="p_1" style="margin-left: 5%;"></p> </div> <div class="form-group mx-sm-3 mb-2" id="f1"> <label for="s0" class="sr-only">Delivery :</label> <select class="form-select" aria-label="Default select example" id="s0" onclick="delivery()"> <option selected >Select delivery options</option> <option value="1">Standard Shipping +$8</option> <option value="2">Express Shipping +$12</option> <option value="3">Priority Shipping +$18</option> </select> </div> <div id="t"></div> <div id="sub"> <form action="Home.html"> <button  class="btn btn-secondary" id="b7" type="submit" onclick="order()">Complete the order</button> </form> </div>';
    cartPage();
}


// -------------------------------------------------------------------------------------------------------------

function addReviews() {

    let d1 = document.createElement("div");
    d1.className = "d10";

    let img = document.createElement("img");
    img.src = "Imges/icon.png" ;
    img.style = "border: none;  margin-left: 1%; width: 50px; height: 50px;" 

    let h = document.createElement("h6");
    h.className = "he5";
    h.innerText ="@"+ document.getElementById("userR").value;

    let p = document.createElement("p");
    p.className = "pr2"
    p.innerText = document.getElementById("userM").value;

    d1.append(img);
    d1.append(h);
    d1.append(p);
    add.append(d1);


}




// -------------------------------------------------------------------------------------------------------------@

function addItem(id, t){

    for(let i = 0 ; i < json1.length ; i++){
        if(json1[i] == null){continue;}
        if(json1[i].id == id){id = i; break; }
    }
        localStorage.setItem(localStorage.length,JSON.stringify(json1[id]));
        

        let total = 0;
        for(let i = 0 ; i < localStorage.length ; i++){
            if(localStorage.getItem(i) == null){continue;} 
            let temp = JSON.parse(localStorage.getItem(i));
            total += temp.price;
        }
    let temp = JSON.parse(localStorage.getItem(localStorage.length-1));
    let x = temp.category;
    setTotal2(total);
    setTotal3(total);
    localStorage.setItem("coupon" , "false");

if(t == 0){cart();}
else{
    catalogue(x);}

}






// ----------------------------------------------------------------------------------





function setTotal2(total) {

    localStorage.setItem("total_1",total);
}





// ----------------------------------------------------------------------------------




function setTotal3(total) {

    localStorage.setItem("total_2",total);
}



// -----------------------------------------------------------------------------------


function cartPage(){




    if(localStorage.length == 0){
        let x = document.createElement("p");
        x.className = "p0"
        x.innerText = "Your cart is empty";
        document.querySelector("#empty").append(x);
        document.querySelector("#f0").innerHTML = "";
        document.querySelector("#f1").innerHTML = "";
        document.querySelector("#sub").innerHTML = "";
        return;}

        localStorage.setItem("coupon", "false");
        localStorage.setItem("total_2", localStorage.getItem("total_1"));



    for(let i = 0 ; i <= 50 ; i++){
        if(JSON.parse(localStorage.getItem(i)) === null){continue;} 

        let div1 = document.createElement("div");
        div1.className = 'container';
        div1.style = " background-color: #343a40 ; border-bottom: 3px solid #adadad; padding: 20px;";

        let div2 = document.createElement("div");
        div2.className = 'row';
        div1.append(div2);

        let div3 = document.createElement("div");
        div3.className = 'col-sm';
        let temp1 = document.createElement("p");
        temp1.className = "p0";
        temp1.innerText ="Product name: " +JSON.parse(localStorage.getItem(i)).title;
        temp1.style ="color: white;margin: 0%; font-size: 9pt; font-weight: bold;"
        div3.append(temp1);
        div2.append(div3);

        let div4 = document.createElement("div");
        div4.className = 'col-sm';
        let temp2 = document.createElement("p");
        temp2.className = "p0";
        temp2.innerText =JSON.parse(localStorage.getItem(i)).price+"$";
        temp2.style ="color: white;margin: 0%; font-size: 12pt; font-weight: bold;"
        div4.append(temp2);
        div2.append(div4);



        let div5 = document.createElement("div");
        div5.className = 'col-sm';
        temp3 = document.createElement("button");
        temp3.innerText= "Add More";
        temp3.className = "btn btn-primary btn-sm bp";
        temp3.setAttribute("onclick", "addItem("+JSON.parse(localStorage.getItem(i)).id+",0)");

        temp4 = document.createElement("button");
        temp4.innerText= "Delete";
        temp4.className = "btn btn-danger btn-sm bp";
        temp4.setAttribute("onclick", "delItem("+JSON.parse(localStorage.getItem(i)).id+")");

        div5.append(temp3);
        div5.append(temp4);
        div2.append(div5);




        document.querySelector("#cartDiv").append(div1);

   
        }


    let total = getTotal();

    let temp1 = document.createElement("h3");
    temp1.className = "p0";
    temp1.innerText ="Total :"+ total;
    document.querySelector("#t").append(temp1);

    temp1 = document.createElement("h3");
    temp1.className = "p0";
    temp1.innerText ="After add VAT 15% :"+ (parseInt(total) * 0.15 + parseInt(total));
    document.querySelector("#t").append(temp1);

}




// ---------------------------------------------------------------------------------------------------

function delItem(id){
    let j = -1;
    for(let i = 0 ; i < 50 ; i++){
        if(JSON.parse(localStorage.getItem(i)) === null){continue;}
        if(JSON.parse(localStorage.getItem(i)).id == id){
            j = i ;
            break;} 
    }

if(localStorage.getItem("total_1") - JSON.parse(localStorage.getItem(j)).price < 3 ){localStorage.clear();  cart(); return;}
localStorage.setItem("total_1", localStorage.getItem("total_1") - JSON.parse(localStorage.getItem(j)).price) ;
localStorage.removeItem(j);
cart();

}

// ----------------------------------------------------------------------------------------------------


function coupon(){
    
    const coupon = ["Tameem15","A15","T15"];

    for(let i =0; i < coupon.length ; i++){

        if(document.querySelector("#c0").value == coupon[i])
        
        {   
            let total = localStorage.getItem("total_2");


            total = parseInt(total) - (parseInt(total) * 0.15);
            
            let temp12 = document.querySelector("#p_1");
            temp12.style.color="green";
            temp12.innerText ="Discounted 15%";

            if(localStorage.getItem("coupon") == "true"){return;}

            localStorage.setItem("total_2", total);
            localStorage.setItem("coupon","true");
            if(localStorage.getItem("delivery") == "true"){

                let x = document.querySelector("#s0").value;
                if(x == 1){total=parseInt(total)+8;}
                if(x == 2){total=parseInt(total)+12;}
                if(x == 3){total=parseInt(total)+18;}

            }
            setTotal(total);
            return;
        }
        
    }
            let temp1 = document.querySelector("#p_1");
            temp1.style.color="red";
            temp1.innerText ="The coupon is invalid !";

}




// --------------------------------------------------------------------------------------------






function setTotal(total) {


    let temp1 = document.createElement("h3");
    temp1.className = "p0";
    temp1.innerText ="Total :"+ total;
    document.querySelector("#t").innerHTML = "";
    document.querySelector("#t").append(temp1);
    
    temp1 = document.createElement("h3");
    temp1.className = "p0";
    temp1.innerText ="After add VAT 15% :"+ (parseInt(total) * 0.15+parseInt(total));
    document.querySelector("#t").append(temp1);
    localStorage.setItem("total",total);
    }




// ------------------------------------------------------------------------------------------------




function getTotal(total) {
   return localStorage.getItem("total_1",total);
}


// --------------------------------------------------------------------------------------------------

function delivery() {
    localStorage.setItem("delivery","true");

    let x = document.querySelector("#s0").value;
    let total = parseInt(localStorage.getItem("total_2"));
    if(x == 1){setTotal(total+8);}
    if(x == 2){setTotal(total+12);}
    if(x == 3){setTotal(total+18);}
}


// -------------------------------------------------------------------------------------------------
function order() {
    localStorage.clear();
    const L = ["A","B","C","D","E","F","G","H","I","G","K","L","M","N","Q","R","S","T","U","0","1","2","3","4","5","6","7","8","9"];
    let s = "";
    for(let i = 0 ; i < 12 ; i++){
        let x = Math.floor(Math.random() * L.length);
        s += L[x];}
    alert("Order Number #"+ s);

}

// ------------------------------------------------------------------------------------------------------
function Users(){

    const users = 
    [ {
            UserName:"Tameem",
            Password:"1122"},
        {
            UserName:"Ahmed",
            Password:"112233"},
        {
            UserName:"Ali",
            Password:"1122-"},
        {
            UserName:"Admin",
            Password:"11"}
        ]


        let pass = document.querySelector("#pass").value;
        let userName = document.querySelector("#userName").value;

        for(let i =0 ; i < users.length ; i++ ){
            if(users[i].UserName == userName && users[i].Password == pass){
                    document.querySelector("#login").innerText = users[i].UserName;
                    home(); return;
            }
        }


        let e = document.querySelector("#Epassowrd");
        e.innerHTML = "";
        let e2 = document.createElement("p");
        e2.innerText = "Wrong password or username !";
        e2.style = "color: red; text-align: center;";
        e.append(e2);
}