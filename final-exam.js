
var products = [ {name: "foundation", price: 34.50},
                 {name: "gloss bomb", price: 18},
                 {name: "setting powder", price: 20},

];

function shop(){

    document.write("juju");
}

function fillTable(){


    var table = document.getElementById("grid");
    
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
        num.innerText= 0.0;
        button.innerText = '+';

       
        button.addEventListener("click", add);
        //button.onclick = add();
        //document.write(JSON.stringify(products));
 
    });
}



function add(){
    var num = document.getElementById("num");
    
    num.innerText += 1;
}

//var button = document.getElementsByClassName("plus-btn");

function total(){
    var nums = document.getElementsByClassName("num");
    document.write(JSON.stringify(nums));
    /*
    var total = 0;
    nums.forEach(num => {

        total = total + num.innerText;

    })*/
    
}