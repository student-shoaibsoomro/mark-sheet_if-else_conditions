let inquirer from "inquirer";

let percentage : string = "49";
let shoaib: string = '78';


if(percentage >= "90" && percentage == "100"){
    console.log("A+ Grade");

}else if(percentage >= "80" && percentage <= "89.9"){
    console.log("Grade A");

}else if(percentage >= "70" && percentage <= "79.9"){
    console.log("Grade B");

}else if(percentage >= "60" && percentage <= "69.9"){
    console.log("Grade C");

}else if(shoaib >= "50" && percentage <= "59.9"){
    console.log("Grade D");

}else(shoaib >= "01" && percentage <= "50")

    console.log("Sorry shoaib you are 'Fail'");
