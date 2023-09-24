let count = 0
// color array
colorArr = ["red","blue","green","purple","orange","yellow","pink","gray","darkblue","brown"]
function myFunction(){
    if (count >= 10){
        alert("The limit has been reached you cant click anymore");
        return;
    }
    // create div element
 const box1 = document.createElement("div");
 
//  im using module opeartor for the use of each color 
 const colorIndex = count % colorArr.length;
 const backgroundColor = colorArr[colorIndex];

//  width height set
 box1.style.width = 700 - (50 * count) + 'px';
 box1.style.height = 700 - (50 * count) + 'px';
//   color
 box1.style.backgroundColor = backgroundColor;

 document.getElementById("parent").style.position = "relative";
 box1.style.position = "absolute";

//  append child element into parent
 document.getElementById("parent").appendChild(box1);
 
 count++;
}