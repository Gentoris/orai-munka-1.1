function fvNeve(param1,param2){

};

let masikFv=function (param1,param2){

    console.log(param1);
};

/*document.addEventListener('DOMContentLoaded',function(){
    console.log('page loaded')
    
    document.getElementById('szinezes').addEventListener('click',function (){
        document.body.style.backgroundColor='lightblue';
    })
})
*/


let t = [4, 78, 715, 99 ];
/*t.sort((a, b) =>{
    if (a < b){
        return -1;
    }else if(a > b){
        return 1;
    }else{
        return 0;
    }
} );
console.log(t);
*/

t.sort((a,b) => {return a - b});
t=t.filter(e => e > 0);
t=t.map(e => e.toFixed(2));
t.forEach((e, index) => {
    console.log(index, 0);
})
console.log(t);

//Mellékhatás-side effect
//Nincs mellékhatása:
1+1;
Math.sqrt(1-2/4);
[1, 2, 3,].filter(e => e > 2);



document.addEventListener('DOMContentLoaded',()=>{
    console.log('page loaded')
    let idozito;
    // Closure
    document.getElementById('szinezes').addEventListener('click',()=>{
        document.body.style.backgroundColor='lightblue';
    setTimeout(()=>{
        document.body.style.backgroundColor='white';
    },2000);

    if(idozito!==undefined){
        clearInterval(idozito);
    }
    clearInterval(idozito);
    idozito=setInterval(()=>{
        console.log(document.body.style.backgroundColor);
    },1000)
});
});