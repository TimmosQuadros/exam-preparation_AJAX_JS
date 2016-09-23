/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function getData(id) {
    console.log(id);
    if(id==="ru-main"){
        id="ru";
    }else if(id==="gb-gbn" ||  id==="gb-nir"){
        id="gb";
    }
    var xmlhttp = new XMLHttpRequest();
    var url = "http://restcountries.eu/rest/v1/alpha?codes="+id;
    var JSONObjects;
    xmlhttp.onreadystatechange = function ()
    {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200)
        {
            JSONObjects = JSON.parse(xmlhttp.responseText);
            JSONLoaded();
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    function JSONLoaded()
    {
        console.log(JSONObjects[0].name);
        $("#country").html("Country: "+JSONObjects[0].name);
        console.log(JSONObjects[0].population);
        $("#population").html("Population: "+JSONObjects[0].population);
        console.log(JSONObjects[0].area);
        $("#area").html("Area: "+JSONObjects[0].area);
        console.log(JSONObjects[0].borders.toString());
        $("#borders").html("Borders: "+JSONObjects[0].borders.toString());
//    for (var i = 0; i < JSONObjects.length; i++) {
//        console.log(JSONObjects[i]);
//    }
    }
}

window.onload = function () {
    // Get the Object by ID
    var a = document.getElementById("CE");
    // Get the SVG document inside the Object tag
    var svgDoc = a.contentDocument;
    // Get one of the SVG items by ID;
    var svgItem = svgDoc.getElementById("svg2");

    console.log(svgItem);

    var isClicked = false;
    var firstClick = true;
    var current;
    var next;
    var id;

    $("path", svgItem).click(function () {
        if (!isClicked) {
            current = $(this);
            id = current.attr('id');
            if (!firstClick) {
                next.css("fill", "#c0c0c0");
            } else {
                firstClick = false;
            }
            current.css("fill", "red");
            isClicked = true;
        } else {
            next = $(this);
            id = next.attr('id');
            if (next !== current) {
                current.css("fill", "#c0c0c0");
                next.css("fill", "red");
            }
            isClicked = false;
        }
        getData(id);
    });
};



