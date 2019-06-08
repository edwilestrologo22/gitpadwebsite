function Inputmessage () {
    let text1,text2,text3,text4;

text1=document.querySelector('#name');
text2=document.querySelector('#mail');
text3=document.querySelector('#pass1');


    if (text1.value == "") {
        alert ("Input Name");
        return false;
    }
    if (text2.value == "") {
    alert ("Input Email");
    return false;
    }
    if (text3.value == "") {
        alert ("Input Password");
        return false;
        }
    return true;
}




//  = Assignment Operator
//  == Loose Comparison
// === Strict Equal Comparison