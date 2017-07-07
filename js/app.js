
$(".jumbotron").addClass("text-center");


// X and O are set to zero once either hit 15 we will have a winner
var O = 0;
var X = 0;
var turns = 0;

$printYes = function()
{
  // if $(this).data('clicked')
  // {
    if (turns % 2 === 0)
    {
      O += parseInt(this.id);
      //$(this).data('clicked', true);
    }
    else
    {
      X += parseInt(this.id);
      //$(this).data('clicked', true);
    }
  //}

   console.log(this.id);
   turns++;
   $winnerWinner();
   console.log("turns are " + turns);
   console.log("x is " + X);
   console.log("o is " + O);
}

$winnerWinner = function(){

  if(X === 15 && turns > 2)
  {
    alert('X is the winner');
  }
  else if (O === 15 && turns > 2) {
    alert('O is the winner');
  }
}



$(".square").on("click", $printYes);
