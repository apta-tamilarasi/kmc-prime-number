let a=parseInt(prompt("Enter the starting number"))
let b=parseInt(prompt("Enter the Ending number"))
document.write("Prime number <br><br>")

for(i=a; i<=b; i++){

if(a==2){
    document.write(i+"<br>")
}

prime=true;

for(j=2; j<i; j++){
    if(i%j==0){
        prime=false;
        break;
    }

}

if(prime==true){
    document.write(i+"<br>");
}



}


