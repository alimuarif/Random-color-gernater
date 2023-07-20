 let randomCode;
const getColor=()=>{
    let prev=document.getElementById('colorCode').innerHTML;
    const randomNumber=Math.floor(Math.random() * 16777215) ;
     randomCode="#"+ randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById('colorCode').innerHTML=randomCode;
    // console.log(randomNumber);

}

const CopyColor =()=>{
    navigator.clipboard.writeText(randomCode)
    document.getElementById('btn2').innerHTML=`Copied!`;
    
    setTimeout(() => { 
        document.getElementById('btn2').innerHTML=`Copy Code`;
    }, 1000);

}
getColor();