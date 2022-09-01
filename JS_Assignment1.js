// Basic calculator function

'use strict'

function calcu(){
    let str = document.getElementById('calbox1').value;
    str = str.replace(/\s/g,'');
    var strlst = [...str]; var num1 = ''; var flst = Array();
    for(let item of strlst){
        if (item != '+' && item!='-' && item!='*' && item!='/'){
            num1+=item;
        }else{
            flst.push(num1);
            flst.push(item);
            num1='';
        }
    }
    flst.push(num1);
    console.log(flst);
    let count = 0
    for (let item of flst){
        if (item == '+'||item=='-'||item=='*'||item=='/'){
            count++;
        }
    }
    
    var num2= '';
    while (count>0,count--){
        if(flst.includes('/')==true){
            let indx = flst.indexOf('/');
            if (indx-1 >-1){
                num2 = Number(flst[indx-1])/Number(flst[indx+1]);
            }else{
                num2 = 0/Number(flst[indx+1]);
            }
            let x = flst.slice(indx+2,);
            flst = flst.slice(0,indx-1);
            flst.push(num2);
            flst.push(...x);
        }else if(flst.includes('*')==true){
            let indx = flst.indexOf('*');
            if (indx-1 >-1){
                num2 = Number(flst[indx-1])*Number(flst[indx+1]);
            }else{
                num2 = 0+Number(flst[indx+1]);
            }
            let x = flst.slice(indx+2,);
            flst = flst.slice(0,indx-1);
            flst.push(num2);
            flst.push(...x);
        }else if(flst.includes('-')==true){
            let indx = flst.indexOf('-');
            if (indx-1 >-1){
                num2 = Number(flst[indx-1])-Number(flst[indx+1]);
            }else{
                num2 = 0-Number(flst[indx+1]);
            }
            let x = flst.slice(indx+2,);
            flst = flst.slice(0,indx-1);
            flst.push(num2);
            flst.push(...x);
        }else if(flst.includes('+')==true){
            let indx = flst.indexOf('+');
            if (indx-1 >-1){
                num2 = Number(flst[indx-1])+Number(flst[indx+1]);
            }else{
                num2 = 0+Number(flst[indx+1]);
            }
            let x = flst.slice(indx+2,);
            flst = flst.slice(0,indx-1);
            flst.push(num2);
            flst.push(...x);
        }
    }
    document.getElementById('calbox1').value=(flst[0]);
}

function leapYear(){
    let year = document.getElementById('lYear').value;
    if(year%4==0){
        document.getElementById('output1').innerText='It is a Leap Year';
    }else{
        document.getElementById('output1').innerText='It is not a Leap Year';
    }
}

function tempConversion(unit,temp){

    if (unit==='*C'){
        let new_temp = (temp*9/5)+32;
        document.getElementById('output2').innerText=(`${temp}*C = ${new_temp}*F`);
    }else if (unit==='*F'){
        let new_temp = (temp-32)*5/9;
        document.getElementById('output2').innerText=(`${temp}*F = ${new_temp}*C`);
    }
}

function factorial (num){
    if (num>0){
        let i = 1; let j = 1;
        while (i<=num){
            j = j*i; i+=1;
        }
        document.getElementById('output3').value = (`Factorial of ${num} = ${j}`);
    }else if (num==0){
        document.getElementById('output3').value = ('Factorial of Zero is 1');
    }else{
        document.getElementById('output3').value = 'Enter a number >= 0';
    }
}
