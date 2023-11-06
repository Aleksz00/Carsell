
/*űrlap*/
function page(){
    /* változókat létrehoztam és eltároltam bennük 
    a nevet,emailt,jelszót,és a checkboxot*/
    const x=document.user.name.value;
    const z=document.user.email.value;
    const y=document.user.pw.value;
    let checkbox=document.querySelector("#true");
    /*Majd egy if szelekcióval megvizsgálom hogy az adatok helyesek e ha a weboldalon beszeretnénk jelentkezni*/ 
    if(x=="KosikAlex" && z=="kosikalex15@gmail.com" && y=="12345678" && checkbox.checked) location="Login.html";
    else alert("Hibás valamelyik megadott adatod vagy nem pipálta bea megerősítést!!")
}
    /*Táblázat profit kiszámolás */
        const calculateBtn=document.getElementById('count');
    /*Egy eseményfigyelővel megfigyelem hogy ha kattintunk a gombra mi történjen */
     calculateBtn.addEventListener('click',function(){
    /*Változókban eltároltam különböző számokat  ami a weboldalon mgvolt adva 
    ezt megcsináltam mind a három autónál*/
         const num1 =document.getElementById('num1').value=120;

         const num2 = document.getElementById('num2').value=100;

         let text1=num1-num2;
        /*Majd a p-tagbe(id="text1") kiiratom a kivonás eredményét 
        Ezt megcsináltam mind a három autónál*/
        document.getElementById('text1').textContent=text1 +"millio dollar";


        const num3 =document.getElementById('num3').value=150;

        const num4 = document.getElementById('num4').value=75;

        let text2=num3-num4;
        document.getElementById('text2').textContent=text2 +"millio dollar";

        const num5 =document.getElementById('num3').value=150;

        const num6 = document.getElementById('num4').value=120;

        let text3=num5-num6;
        document.getElementById('text3').textContent=text3 +"millio dollar";


     })