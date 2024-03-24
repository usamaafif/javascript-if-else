let s1="";
let s2="";
let fname="";
let sname="";
let n1;
let n2;
let marks;
let weight;
let age;
let num1;
let num2;
let num3;
let uname;
let upass;
let unumc;
function concatenate()
{
    s1=prompt("Enter Any First String Value")
    s2=prompt("Enter Any Second String Value")
    document.getElementById("para").innerHTML="Your first string value is = "+s1+"<br> Your Second String  Value is = "+s2  
    document.getElementById("output").innerHTML="<b>After Cencatenation</b> <br>"+s1+s2
}

function username()
{
fname=prompt("Enter First Name  "+fname)
sname=prompt("Enter Second Name  "+sname)
document.getElementById("para").innerHTML="First Name = "+fname+"<br>Second Name = "+sname
document.getElementById("output").innerHTML=fname+" "+sname

}
function camparison()
{
n1=+prompt("Enter First Number")
n2=+prompt("Enter Second Number")
document.getElementById("para").innerHTML="First Number = "+n1+"<br>Second Number = "+n2
if(n1===n2)
document.getElementById("output").innerHTML=n1+" = "+n2
else if(n1>n2)
document.getElementById("output").innerHTML=n1+" > "+n2
else
document.getElementById("output").innerHTML=n1+" < "+n2
}
function ifelse()
{
    marks=+prompt("Enter Marks")
    document.getElementById("para").innerHTML="Marks = "+marks;
    
    if(marks>=90)
    document.getElementById("output").innerHTML="You Got A+ Grade In Exam "
    else if(marks>=80)
    document.getElementById("output").innerHTML="You Got A Grade In Exam"
    else if(marks>=70)
    document.getElementById("output").innerHTML="You Got B+ Grade In Exam"
else if(marks>=60)
document.getElementById("output").innerHTML="You Got B Grade In Exam"
else if(marks>=50)
document.getElementById("output").innerHTML="You Got C Grade In Exam"
else
document.getElementById("output").innerHTML="You Are Fail In Exam"    
    }
    function ageweight()
{
    age=+prompt("Enter age (5-50)")
   weight=+prompt("Enter weight") 
document.getElementById("para").innerHTML="Age = "+age+"<br>Weight = "+weight    

   if(age>=5 && age<=10)
   {
    if(weight>=8 && weight <=15)
document.getElementById("output").innerHTML="You Are good in health"    
    
else if( weight >15)
document.getElementById("output").innerHTML="You Are heavy in weight"    
else
document.getElementById("output").innerHTML="your are weak"    
   }
 else  if(age>=11 && age<=20)
   {
    if(weight>=15 && weight <=50)
document.getElementById("output").innerHTML="You Are good in health"    
    
else if( weight >50)
document.getElementById("output").innerHTML="You Are heavy in weight"    
else
document.getElementById("output").innerHTML="your are weak"    
   }
  else if(age>=21 && age<=30)
   {
    if(weight>=50 && weight <=70)
document.getElementById("output").innerHTML="You Are good in health"    
    
else if( weight >70)
document.getElementById("output").innerHTML="You Are heavy in weight"    
else
document.getElementById("output").innerHTML="your are weak"    
   }
  else if(age>=31 && age<=40)
   {
    if(weight>=60 && weight <=85)
document.getElementById("output").innerHTML="You Are good in health"    
    
else if( weight >85)
document.getElementById("output").innerHTML="You Are heavy in weight"    
else
document.getElementById("output").innerHTML="your are weak"    
   }
  else if(age>=41 && age<=50)
   {
    if(weight>=70 && weight <=85)
document.getElementById("output").innerHTML="You Are good in health"    
    
else if( weight >85)
document.getElementById("output").innerHTML="You Are heavy in weight"    
else
document.getElementById("output").innerHTML="your are weak"    
   }
   else
document.getElementById("output").innerHTML="invalid"    




  }
function nestedif(){
    num1=+prompt("Enter First Number")
    num2=+prompt("Enter second Number")
    num3=+prompt("Enter Third Number")
    document.getElementById("para").innerHTML="First Number = "+num1+"<br>Second Number = "+num2+"<br>Third number = "+num3;
    if(num1>num2)
    {
        if(num1>num3)
        document.getElementById("output").innerHTML="Largest Number is = "+num1
    else
    document.getElementById("output").innerHTML="Largest Number is = "+num3


    }
    else if(num2>num1)
    {
        if(num2>num3)
        document.getElementById("output").innerHTML="Largest Number is = "+num2
else
document.getElementById("output").innerHTML="Largest Number is = "+num3


    }

    else
    document.getElementById("output").innerHTML="Invalid"

}
function login(){
    uname=prompt("Enter Username")
    upass=prompt("Enter password")
    document.getElementById("para").innerHTML="username = "+uname+"<br> passwordv = "+upass
    if(uname==="admin" && upass==="admin")
    document.getElementById("output").innerHTML="You Are Login Succesfully"
    else
    document.getElementById("output").innerHTML="Invalid username or password"


}
function check(){
    numc=+prompt("Enter a number")
    document.getElementById("para").innerHTML="Number = "+numc

    if(numc%2==0)
    document.getElementById("output").innerHTML="Given number is even"
else
document.getElementById("output").innerHTML="Given number is odd"

}
function inpclear()
{
    document.getElementById("para").innerHTML=""
}
function outclear()
{
    document.getElementById("output").innerHTML=""
}