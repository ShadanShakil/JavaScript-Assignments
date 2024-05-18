let text = document.getElementById("text");
let heading = document.getElementById("head")
function bold(){
    console.log("Bold");
    text.style.fontWeight = "bold";
    heading.style.fontWeight = "bold";

}
function italic(){
    console.log("italic");
    text.style.fontStyle = "italic";
    heading.style.fontStyle = "italic";
}
function underline(){
    console.log("underline");
    text.style.textDecoration = "underline";
    heading.style.textDecoration = "underline";

}
function right(){
    console.log("right");
    text.style.textAlign = "right";
    heading.style.textAlign = "right";
}
function left(){
    console.log("left");
    text.style.textAlign = "left";
    heading.style.textAlign = "left";
}
function center(){
    console.log("center");
    text.style.textAlign = "center";
    heading.style.textAlign = "center";
}