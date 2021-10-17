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
    h.innerText = "Sent succesfully";

    div2.append(h);
    div.append(div2)
}

// -----------------------------------------------------------------------------------------------------------

function login() {

    let div = document.querySelector(".d0");
    div.innerHTML = '<div class="dt"> <h2 class="h0 hc" style="color: white;">Login</h2> <form action="Home.html"> <div class="form-group row"> <label for="inputEmail3" class="col-sm-2 col-form-label hc2" style="color: white;">Email :</label> <div class="col-sm-10"> <input type="email" class="form-control" id="inputEmail3" placeholder="Email" required><br> </div> </div> <div class="form-group row"> <label for="inputPassword3" class="col-sm-2 col-form-label hc2" style="color: white;">Password :</label> <div class="col-sm-10"> <input type="password" class="form-control" id="inputPassword3" placeholder="Password" required><br> </div> </div> <fieldset class="form-group"> <div class="row"> <div class="col-sm-10"> <div class="form-check"> <a href="" class="u0 text-primary"> Create new account </a> </div> <div class="form-check"> <a href="" class="u0 text-primary">  Forgot your password? </a> </div> </div> </div> </fieldset> <br> <div class="form-group row"> <div class="col-sm-10"> <button type="submit" class="btn btn-primary b1">Login</button> </div> </div> </form> </div> <br><br><br><br>';
}

//--------------------------------------------------------------------------------------------------------------

function reviews() {
    let div = document.querySelector(".d0");
    div.innerHTML = '<div class="d10"> <img src="Imges/icon.png" id="img2" style="border: none;  margin-left: 1%;" width="50px" height="50px" alt=""> <h6 class="he5">@Ahmed</h6> <p class="pr2">Thank you for the quality of dealing and the quality of the goods. Really fast response and delivery. The Rolex watch is very good and beautiful. I hope to find a way to provide a guarantee to complement the excellent service. Thanks again.</p> </div> <div class="d10"> <img src="Imges/icon.png" style="border: none;  margin-left: 1%;" width="50px" height="50px" alt=""> <h6 class="he5">@Omar</h6> <p class="pr2">The product is excellent. The treatment was very courteous and respectful. As well as punctuality in their appointments.</p> </div> <div class="d10"> <img src="Imges/icon.png" style="border: none;  margin-left: 1%;" width="50px" height="50px" alt=""> <h6 class="he5">@Rand</h6> <p class="pr2">Excellent and reliable interaction. The watch is awesome and better than the picture. The order arrived on time, thank you.</p> </div> <div class="d10"> <form action="Catalogue.html"> <div class="form-group"> <label for="exampleFormControlInput1">User Name:</label> <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="User Name" required> </div> <div class="form-group"> <label for="exampleFormControlTextarea1">Your review:</label> <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your review" required></textarea> </div> <br> <br> <button type="submit" class="btn btn-outline-primary">Send</button> </form> </div>';
}

// ------------------------------------------------------------------------------------------------------------

function catalogue(t) {
   
   
    fetch('https://fakestoreapi.com/products')
    .then(function(response) {return response.json()}).then(function (json)
    { 
    


        let div0 = document.querySelector(".d0");
        div0.innerHTML = "";
        let j = 0;
    
        let div2 = document.createElement("div");
        div2.className = "card-group" ;
        div2.style =" padding: 25px;display: grid;row-gap: 40px; column-gap: 40px; grid-template-columns: 1fr 1fr 1fr 1fr;"    

        for(let i = 0; i < json.length  ; i++ , j++){
            if(t[0] == json[i].category[0]){
            if(j == 4){
        div2 = document.createElement("div");
        div2.className = "card-group" ;
        div2.style =" padding: 25px;display: grid;row-gap: 40px; column-gap: 40px; grid-template-columns: 1fr 1fr 1fr 1fr;"
        j = 0;}
    
        let div3 = document.createElement("div");
        div3.className = "card";
        div3.id = "card"
        div3.style = "border: 5px solid white; border-radius: 10px 10px 10px 10px;"
    
        let img1 = document.createElement("img");
        img1.className = "card-img-top";
        img1.style = "height: 150px; border: 1px solid white; border-radius: 10px 10px 0px 0px;"
        img1.src = json[i].image;
        div3.append(img1);
    
        let div4 = document.createElement("div");
        div4.className = "card-body" ;
    
        let h = document.createElement("h6");
        h.innerText = json[i].title;
        h.style = "color: #343a40;text-align: center;margin: 4%;font-size: 16pt;"
        div4.append(h);
    
        let div5 = document.createElement("div");
        div5.className = "card-footer" ;
    
        let small = document.createElement("small");
        small.className = "text-muted" ;
    
        let button = document.createElement("button");
        button.className ="btn btn-secondary btn-sm" ;
        button.style = "width: 100%;";
        button.innerText="More details"
        button.setAttribute("onclick", "details("+json[i].id+")");
    
        small.append(button);
        div5.append(small);
    
        div3.append(div4);
        div3.append(div5);
    
        div2.append(div3);
        div0.append(div2);
    
    
    }}
        
    
      })



      
    }
// ------------------------------------------------------------------------------------------------------------


   function details(id) {
       
    fetch('https://fakestoreapi.com/products/'+id)
    .then(function(response) {return response.json()}).then(function (json)
    { 
    
        let div0 = document.querySelector(".d0");
        div0.innerHTML = "";
        let div1 = document.createElement("div");
        div1.className = "dt";
        div1.style = " margin: 1%; margin-left: 350px;margin-right: 350px;padding: 60px;"
    
        let h = document.createElement("h4");
        h.innerText = json.title;
        h.className = "details";

        let hr = document.createElement("hr");


        let p1 = document.createElement("p");
        p1.className = "details";
        p1.innerText="Description : " +json.description;


        let p2 = document.createElement("p");
        p2.className = "details";
        p2.innerText="Price : "+ json.price+'$';


        let p3 = document.createElement("p");
        p3.className = "details";
        p3.innerText="Rating : "+ json.rating.rate;

        button1 = document.createElement("button");
        button1.className = "btn btn-success btn-sm";
        button1.innerText = "Buy";
        button1.style = "margin-left: 28%;"
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
      })

       
   } 


// ------------------------------------------------------------------------------------------------------------
function cart() {
    let div = document.querySelector(".d0");
    div.innerHTML = '<h2 class="h0">Your Cart</h2> <hr class="hr0" style="height: 3px;"> <div id="empty" ></div> <div id="cartDiv" ></div> <div id="f0"> <div class="form-group mx-sm-3 mb-2"> <label for="c0" class="sr-only">Discount coupon:</label> <input type="text" class="form-control" id="c0" placeholder="Enter yor coupon"> <button onclick="coupon()" class="btn btn-secondary btn-sm">Check Coupon</button> </div> <p id="p_1" style="margin-left: 5%;"></p> </div> <div class="form-group mx-sm-3 mb-2" id="f1"> <label for="s0" class="sr-only">Delivery :</label> <select class="form-select" aria-label="Default select example" id="s0" onclick="delivery()"> <option selected >Select delivery options</option> <option value="1">Standard Shipping +$8</option> <option value="2">Express Shipping +$12</option> <option value="3">Priority Shipping +$18</option> </select> </div> <div id="t"></div> <div id="sub"> <form action="Home.html"> <button  class="btn btn-secondary" type="submit" onclick="order()" style="margin: 0 auto;margin-left: 43%; margin-bottom: 5%;">Complete the order</button> </form> </div>';
    cartPage();
}