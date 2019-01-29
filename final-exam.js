
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
        var button = document.createElement('button');

        col.className = "col-sm";
        col2.className = "col-sm";
        button.className = "plus-btn";

        table.append(row);
        row.appendChild(col);
        col.innerText = product.name;
        row.appendChild(col2);
        col2.innerText = product.price;
        row.appendChild(button);

        //document.write(JSON.stringify(products));
 
    });
}