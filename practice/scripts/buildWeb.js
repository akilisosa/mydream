

function buildWeb(event)
{
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id',  'topLeft' );
    svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttribute('width', '600');
    svg.setAttribute('height', '250');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.addEventListener("onclick", createThree);
    svg.addEventListener('click',createThree, false);
    document.body.appendChild(svg);

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id',  'topRight');
    svg.setAttribute('style', 'border: 1px solid blue');
    svg.setAttribute('width', '600');
    svg.setAttribute('height', '250');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.addEventListener("onclick", createThree);
    svg.addEventListener('click',createThree, false);
    document.body.appendChild(svg);

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id',  'bottomLeft');
    svg.setAttribute('style', 'border: 1px solid green');
    svg.setAttribute('width', '600');
    svg.setAttribute('height', '250');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.addEventListener("onclick", createThree);
    svg.addEventListener('click',createThree, false);
    document.body.appendChild(svg);

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id',  'bottomRight');
    svg.setAttribute('style', 'border: 1px solid red');
    svg.setAttribute('width', '600');
    svg.setAttribute('height', '250');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.addEventListener("onclick", createThree);
    svg.addEventListener('click',createThree, false);
    document.body.appendChild(svg);

  
}



function createThree(onclick)
{


    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id', 'topTopLeft');
    svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttribute('width', '250');
    svg.setAttribute('height', '250');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.addEventListener("click", makeThreeTopLeft(event));
    document.body.appendChild(svg);

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id', 'topTopCenter');
    svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttribute('width', '250');
    svg.setAttribute('height', '250');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.addEventListener("click", makeThreeTopLeft(event));
    document.body.appendChild(svg);

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id', 'topTopRight');
    svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttribute('width', '250');
    svg.setAttribute('height', '250');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.addEventListener("click", makeThreeTopLeft(event));
    document.body.appendChild(svg);


}
/*
function makeThreeTopRight(event){

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id', 'topTopRight');
    svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttribute('width', '250');
    svg.setAttribute('height', '250');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.addEventListener("click", makeThreeTopLeft(event));
    document.body.appendChild(svg);

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id', 'topTopCenter');
    svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttribute('width', '250');
    svg.setAttribute('height', '250');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.addEventListener("click", makeThreeTopLeft(event));
    document.body.appendChild(svg);

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id', 'topTopRight');
    svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttribute('width', '250');
    svg.setAttribute('height', '250');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.addEventListener("click", makeThreeTopLeft(event));
    document.body.appendChild(svg);

}

function makeThreeBottomLeft(){

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id', 'bottomBottomLeft');
    svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttribute('width', '250');
    svg.setAttribute('height', '250');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.addEventListener("click", makeThreeTopLeft(event));
    document.body.appendChild(svg);

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id', 'BottomBottomCenter');
    svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttribute('width', '250');
    svg.setAttribute('height', '250');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.addEventListener("click", makeThreeTopLeft(event));
    document.body.appendChild(svg);

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id', 'bottomBottomRight');
    svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttribute('width', '250');
    svg.setAttribute('height', '250');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.addEventListener("click", makeThreeTopLeft(event));
    document.body.appendChild(svg);

}

function makeThreeBottomRightt(){

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id', 'BottomBottomLeft');
    svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttribute('width', '250');
    svg.setAttribute('height', '250');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.addEventListener("click", makeThreeTopLeft(event));
    document.body.appendChild(svg);

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id', 'bottomBottomCenter');
    svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttribute('width', '250');
    svg.setAttribute('height', '250');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.addEventListener("click", makeThreeTopLeft(event));
    document.body.appendChild(svg);

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id', 'bottomBottomRight');
    svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttribute('width', '250');
    svg.setAttribute('height', '250');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.addEventListener("click", makeThreeTopLeft(event));
    document.body.appendChild(svg);

}

 */