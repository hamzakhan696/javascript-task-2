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
 box1.style.marginTop ="35%"
 box1.style.left = "50%";
 box1.style.transform = "translate(-50%, -50%)";

 

//  append child element into parent
 document.getElementById("parent").appendChild(box1);
 
 count++;
}

function removeBox(){
   let box_Num = parseInt(document.getElementById("remove").value);
   if(isNaN(box_Num))
   {
    validNumber();
    return;
   }
   const parent = document.getElementById("parent");
   const boxes = parent.querySelectorAll("div");

   if (box_Num >= 0 && box_Num < boxes.length) {
    parent.removeChild(boxes[box_Num]);
    showMessage();
} else {
    alert("Box number does not exist.");
}
}
function validNumber(){
    document.getElementById("valid-number").style.display = 'block'
    setTimeout(function(){
        document.getElementById("valid-number").style.display = 'none'
    }, 3000);
}
function showMessage(){
    document.getElementById("success-message").style.display = 'block'
    setTimeout(function(){
        document.getElementById("success-message").style.display = 'none'
    }, 3000);
}