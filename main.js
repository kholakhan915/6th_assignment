// 1//
// var first_name=prompt("Enter Your First Name?");
// var last_name=prompt("Enter Your Last Name?");
// document.write("<h4>6th Assignment</h4>");
// document.write("Welcome..."+first_name+last_name);
// document.write("<br>");
// // 2
// var mobile_phone=prompt("Which is your favrout moblie phone");
// var string_length=mobile_phone.length;

// document.write("My Fvrt Mobile Phone is "+mobile_phone);
// document.write("<br>");

// document.write("string Length"+string_length);
// // 3
// document.write("<br>");
// var word="pakistani";

// var word_index='n';
// var a=word.indexOf(word_index);

// document.write("String:"+word);
// document.write("<br>");
// document.write("index: of n"+a);
// document.write("<br>");
// document.write("4)");
// document.write("<br>");
// var b="hello World";
// var c='l';
// var d=b.lastIndexOf(c);
// document.write("<br>");
// document.write("String:"+b);
// document.write("<br>");
// document.write("Last Index :"+d);
// document.write("<br>");
// document.write("5)");
// document.write("<br>");
// var string5="pakistani";
// var e=string5.charAt(3);
// document.write("<br>");
// document.write("string :"+string5);
// document.write("<br>");
// document.write("Character at index:"+e);
// document.write("<br>");
// document.write("6)");
// document.write("<br>");
// var names=first_name.concat(last_name);
// document.write("Welcome..."+names);
// document.write("<br>");
// document.write("7)");
// document.write("<br>");
// var city_name="hyderabad";
// var replace_name="islama";
// document.write("City:"+city_name);
// document.write("<br>");

// document.write("After Replacement:"+city_name.replace("hydera",replace_name));
// document.write("8)");
// document.write("<br>");

// var message = "Ali and Sami are best friends. They play cricket and football together."; 
// document.write("Message:"+message);

// document.write("<br>");
// document.write("After REplacement :"+message.replaceAll("and","&"));
// document.write("<br>");
// document.write("9)");
// document.write("<br>");
// var value="712";

// document.write("Value:"+value);
// document.write("<br>");
// document.write("Type:"+typeof(value));
// document.write("<br>");
// document.write("Value:"+value);
// document.write("<br>");
// var y=parseInt(value);
// document.write("Type :"+typeof(y));
// document.write("<br>");
// document.write("10)");
// document.write("<br>");
// var any_name=prompt("enter any Word for capital letter..!");
// var convert_into_capital=any_name.toLocaleUpperCase();
// document.write("User Input  :"+any_name);
// document.write("<br>");
// document.write("Capital Letters  :"+convert_into_capital);
// document.write("<br>");
// document.write("11)");
// document.write("<br>");
// var name=prompt("enter any Word..!");

// document.write("User Input  :"+name);
// document.write("<br>");
// document.write("Title Case  :"+name.charAt(0).toUpperCase() + name.substr(1).toLowerCase());
// document.write("<br>");

// document.write("12)");
// document.write("<br>");

// var number=35.36;

// var myTrunc = Math.trunc( number );
// document.write("Number : "+ number);
// document.write("<br>");
// document.write("string : "+ myTrunc);
// document.write("<br>");
// document.write("13)");

// document.write("<br>");

// document.write("<br>");
// document.write("14)");
// var bakery=["cake", "apple pie", "cookie", "chips", "patties"] ;
// var order=prompt("Welcome ..! What do you want to order?");
// for(var i=0; i<=bakery.length; i++){
// if(order==bakery[i]){
//         document.write(bakery[i]+" available at index "+i+ " in our bakery");
//         break;
//     }
//     else if(order!=bakery[i]){
//         document.write("We are Sorry "+ order+" not available in our bakery.");
//         break;
//     }

// }

// document.write("<br>");
// document.write("15)");

// var input = prompt("Enter password");
// for(var i=0; i<input.length; i++){
//     if(input.charAt(0)==1 || input.charAt(0)==2 || input.charAt(0)==3 ||  input.charAt(0)==4 || input.charAt(0)==5 || input.charAt(0)==6 || input.charAt(0)==7 || input.charAt(0)==8 || input.charAt(0)==9 || input.charAt(0)==0 ){
//         alert("Password Can Not With a Number..!");
//     }
// }
//     if(input.length>6){
//         alert("Your Password Is Too Long...!");
//         }
// if(input==""){
//     alert("Empty");
// }        
//     else{
//         alert("Your Password Is Not Done..!");
//     }

//     document.write("<br>");
//     document.write("16)");
    
//     document.write("<br>");
//     var university = "University of Karachi"; 
//     for(var i=0; i<university.length; i++){
//         document.write(university[i]);
//         document.write("<br>");
//     }
//     document.write("<br>");
//     document.write("17)");
//     document.write("<br>");
//     var user_input=prompt("Enter Text to know Last Index");
//     var last_index=user_input.length-1;
    
//     document.write("User Input :"+ user_input);   
//     document.write("<br>"); 
//     document.write("Last Index : "+user_input[last_index]);
//     document.write("<br>");
//     document.write("18)");   
//     document.write("<br>");
//     var para="the quick brown fox jumps over the lazy dog";
//     var t="the";
//     document.write("Text :"+para);
//     document.write("occurance on Index #  "+para.search("the"));
    // chapter 26 -30
//     document.write("<br>");
//     document.write("1)");   
//     document.write("<br>");
//     var number=3.45214;
//     document.write("Number :"+number);
//     document.write("<br>");
//     document.write("Round Off Value  :"+ Math.round(number));
//     document.write("<br>");
//     document.write("Floor  Value : "+Math.floor(number));
//     document.write("<br>");
//     document.write("Ceil Value : "+ Math.ceil(number));
//     document.write("<br>");
//     document.write("2)");   
//     document.write("<br>");
//     var num=-2.673;
//     document.write("Number :"+num);
//     document.write("<br>");
//     document.write("Round Off Value  :"+ Math.round(num));
//     document.write("<br>");
//     document.write("Floor  Value : "+Math.floor(num));
//     document.write("<br>");
//     document.write("Ceil Value : "+ Math.ceil(num));
//     document.write("<br>");
//     document.write("3)");
//     var abs_value=-4;
//     document.write("The Absulote Value -4 is  : "+ Math.abs(abs_value));
//     document.write("<br>");
    
//     document.write("4)");
//     // var rand_value=
//     document.write("<br>");
    
//     document.write("Random Dice  Value :"+Math.ceil(Math.random()));
//     document.write("<br>");
//     document.write("5)");
// var bigDecimal = Math.random(); 2 
// var improvedNum = (bigDecimal * 6) + 1; 3
//  var numberOfStars = Math.floor(improvedNum); 
//     if(numberOfStars == 1){
//         document.write("heads");
//     }else{
//         document.write("tails");
//     }

//     document.write("<br>");
//     document.write("6)");
//     var min=1;
//     var max=100;
//    var vall=Math.floor(Math.random() * (max - min) + min);
//    document.write(" Random Number Between 1 to 100 : "+ vall);
//    document.write("<br>");
//    document.write("7)");
   
//    var weight=prompt("Enter Your Weight In Kilograms");
//    if(weight){
//     document.write("The Weight of user is :"+weight);
//    }
//    else if(weight==weight+"kgs"){
//     document.write("The Weight of user is :"+weight);
//    } 
//    else if(weight==weight+"kgs"){
//     document.write("The Weight of user is :"+weight);
//    }
//    else if(weight==weight+"kilograms"){
//     document.write("The Weight of user is :"+weight);

//    }
//    else{
//     document.write("Try Again");
//    }
//    document.write("<br>");
//    document.write("8)");
   
// var secret_number=prompt("Enter a Number Between 1 to 10");
// var big = Math.random(); 2 
// var impNum = (big * 6) + 1; 3
//  var nums = Math.floor(impNum); 
// if(secret_number==nums){
//     document.write("Congratulate ...!");
// }
// else{
//     document.write("Try Again...!");
// }
// chapter 31 to 34
// 1
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.write("Current Date :"+date);
document.write("<br>");
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.write("<br>");
document.write("current Time :"+time);
var month=today.getMonth();
// alert(month);
document.write("<br>");
document.write("2)");
document.write("<br>");
document.write("current Month :"+month);
document.write("<br>");
document.write("3)");
document.write("<br>");
var day=today.getDay();
if(day==1){
    document.write("ToDay Is  Monday");
}
else if(day==2){
    document.write("Today is Tuesday");

}
else if(day==3){
    document.write("Today Is Wednessday");
}
else if(day==4){
    document.write("Today Is Thursday");

}
else if(day ==5){
    document.write("Today Is Friday");
}
else if(day ==6){
    document.write("Today Is Saturday");
}
else {
    document.write("Today Is Sunday");
}
document.write("<br>");
document.write("4)");
document.write("<br>");
var day=today.getDay();
if(day==1){
    document.write("ToDay Is  Monday");
}
else if(day==2){
    document.write("Today is Tuesday");

}
else if(day==3){
    document.write("Today Is Wednessday");
}
else if(day==4){
    document.write("Today Is Thursday");

}
else if(day ==5){
    document.write("Today Is Friday");
}
else if(day ==6){
    document.write("It's Fun Day");
}
else {
    document.write("It's Fun Day");
}
document.write("<br>");
document.write("5)");
document.write("<br>");
var days=today.getDay();
if(days>16){
    document.write("First fifteen days of the month");
}
else{
    document.write("Last fifteen days of the month");
}
document.write("<br>");
document.write("6)");
document.write("<br>");

var d = new Date("June 19, 2020 13:25:00");
document.write("Current Date:"+d);
document.write("<br>");
var date = new Date("January 1, 1970 13:25:00"); 
var milliseconds = date.getTime(); 
document.write("January 1, 1970 :"+milliseconds);
document.write("<br>");
var date1 = new Date("January 1, 1970 13:25:00"); 
var abc=date1.getMinutes(); 
document.write("January 1, 1970"+abc);
document.write("<br>");
document.write("7)");
var get_noon=date.getHours();
// alert(get_noon);
if(get_noon>12){
    alert("It's PM");

}
else{
    alert("It's AM");
}