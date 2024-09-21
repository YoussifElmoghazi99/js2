var counter=0;
function incData(){
    counter++;
    document.getElementById("counter").innerHTML = counter;
}
function decData(){
    counter--;
    document.getElementById("counter").innerHTML = counter;
}

function result(){
    var myInput = document.getElementById("myInput").value;
    var result = document.getElementById("result");
    if(isNaN(myInput)){
        result.innerHTML = "enter a number";
    }
    else if(myInput<0){
        result.innerHTML ="enter postive number";
    }
    else if(myInput==0){
        result.innerHTML ="enter a number rather than zero";
    }
    else{
        result.innerHTML= myInput*50 + "Egyption Pound";
    }
    return false;
}