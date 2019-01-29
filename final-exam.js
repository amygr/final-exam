
var products = [ {name: "foundation", price: 34.50},
                 {name: "gloss bomb", price: 18},
                 {name: "setting powder", price: 20},

];


var last = 5; 

function shop(){

    document.write("juju");
}

function fillTable(){


    var table = document.getElementById("grid");
    var cont = 0;

    products.forEach(product => {

        var row = document.createElement('div');
        row.className = "row";

        var col = document.createElement('div');
        var col2 = document.createElement('div');
        var col3 = document.createElement('div');
        var num = document.createElement('p');
        var button = document.createElement('button');

        col.className = "col-sm";
        col2.className = "col-sm";
        col3.className = "col-sm";
        button.className = "plus-btn";
        button.id= cont;
        num.id = "num";
        num.className = "num";

        table.append(row);
        row.appendChild(col);
        row.appendChild(col2);
        row.appendChild(col3)
        col3.append(num);
        col3.append(button);

        col.innerText = product.name;
        col2.innerText = product.price;
        num.innerText= 0;
        button.innerText = '+';
        cont ++;


       
        button.addEventListener("click", add);
 
    });
}



function add(){
    var nums = document.getElementsByClassName("num");
    var num = nums[this.id]
    console.log(num);

    var intNum = parseInt(num.innerText);
    intNum ++;

    num.innerText = intNum;
}

function total(){

    
    var nums = document.getElementsByClassName("num");
    console.log(nums);
    var total = 0;
    var cont = nums.length -1;

    while (cont >= 0){
        console.log("while");
        num= nums[cont];
        num = parseInt(num.innerText);
        console.log(num);
        total = total + num*products[cont].price;
        console.log(products[cont].price);
        console.log(total);
        cont = cont -1;
    };


    alert("Your total is $" + total);

    
}