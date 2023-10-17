document.addEventListener("DOMContentLoaded", function () {
    var colores = ["red", "darkred", "orangered", "firebrick", "crimson",
        "indianred", "tomato", "salmon", "coral", "darkorange",
        "lightcoral", "maroon", "rosybrown", "sienna", "saddlebrown",
        "chocolate", "peru", "brown", "darksalmon", "lightsalmon"
    ];
    var divs = 1000;

    for (var i = 0; i < divs; i++) {
        var Div = document.createElement("div");

        Div.style.width = "100px";
        Div.style.height = "100px";
        var colorRandom = Math.floor(Math.random() * colores.length);
        Div.style.backgroundColor = colores[colorRandom];
        Div.innerHTML = colores[colorRandom];

        document.body.appendChild(Div);
    }
});