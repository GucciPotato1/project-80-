var list_of_guests=[];
function submit(){
       var GuestName = document.getElementById("namess").value;
    list_of_guests.push(GuestName);
    document.getElementById("list_of_guests_display").innerHTML=list_of_guests;
    
} 

function show(){
    var x=list_of_guests.join('<br>');
    document.getElementById("listnumber2").innerHTML=x;
}

function sorting(){
    list_of_guests.sort();
    var x=list_of_guests.join('<br>');
    document.getElementById("listnumber3").innerHTML=x;
}

function searching(){
    var counter = 0;
    var y= document.getElementById("searching").value;
    for(var i=0; i<list_of_guests.length; i++){
        if (y===list_of_guests[i]){
            counter = i+1;
            console.log(i);
            console.log(counter)
            document.getElementById("seearch").innerHTML= "name found at position"+ counter;
        };
    }
}