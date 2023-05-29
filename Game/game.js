function playCraps(){
    console.log("playCraps function called")

    //first roll of the die
    var die1 = rollDie();
    console.log("the first die roll is: " + die1);

     //second roll of the die
     var die2 = rollDie();
     console.log("the second die roll is: " + die2);

     //adding the rolls together
     var sum = die1 + die2;
     console.log("The sum of the dice rolls is: " + sum);

     //output the dice rolls and the sum to the html page
     document.getElementById("die1Res").innerHTML = "Die 1 is: " + die1;
     document.getElementById("die2Res").innerHTML = "Die 2 is: " + die2;
     document.getElementById("sumRes").innerHTML = "The sum is: " + sum;

     //do the logic to see if the dice rolls win or lose
     if (sum == 7 || sum == 11){
        document.getElementById("crapsRes").innerHTML = "You lose!";
     }
     else if(die1 == die2 && die1 % 2 == 0){
        document.getElementById("crapsRes").innerHTML = "You win!";
     }
     else{
        document.getElementById("crapsRes").innerHTML = "You pushed (you tied)!";
     }
}

//generate a random nuber between 1 and 6
//using built in JabaScript math funvtions
function rollDie(){
    var die = 6 * Math.random();
    return Math.ceil(die);
}