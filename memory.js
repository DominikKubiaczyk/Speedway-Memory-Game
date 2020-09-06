
var cardsX = ["AMiedzinski.png", "CHolder.png", "JHolder.png", "JHolder.png", "TBajerski.png", "TMusielak.png", "CHolder.png", "WKulakov.png", "AMiedzinski.png", "TMusielak.png", "WKulakov.png", "TBajerski.png","IKopec.png","IKopec.png","RDouglas.png","RDouglas.png","KKielbasa.png","KKielbasa.png","PChlupac.png","PChlupac.png"];
var tempTab = [];
var cards = shuffle(cardsX);
for (i = 0; i < cards.length; i++)
{
    this['c' + i] = document.getElementById('c' + i);
}
/*
var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');

var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
//var c11 = document.getElementById('c11');
*/
c0.addEventListener("click", function() {revealCard(0);});
c1.addEventListener("click", function() {revealCard(1);});
c2.addEventListener("click", function() {revealCard(2);});
c3.addEventListener("click", function() {revealCard(3);});

c4.addEventListener("click", function() {revealCard(4);});
c5.addEventListener("click", function() {revealCard(5);});
c6.addEventListener("click", function() {revealCard(6);});
c7.addEventListener("click", function() {revealCard(7);});

c8.addEventListener("click", function() {revealCard(8);});
c9.addEventListener("click", function() {revealCard(9);});
c10.addEventListener("click", function() {revealCard(10);});
c11.addEventListener("click", function() {revealCard(11);});
c12.addEventListener("click", function() {revealCard(12);});
c13.addEventListener("click", function() {revealCard(13);});
c14.addEventListener("click", function() {revealCard(14);});
c15.addEventListener("click", function() {revealCard(15);});
c16.addEventListener("click", function() {revealCard(16);});
c17.addEventListener("click", function() {revealCard(17);});
c18.addEventListener("click", function() {revealCard(18);});
c19.addEventListener("click", function() {revealCard(19);});

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = ((cards.length)/2); /////////////////////////////

function revealCard(nr)
{
    var opacityValue = $('#c' + nr).css('opacity');
    
    if(opacityValue != 0 && lock == false && nr != visible_nr)
    {
        lock = true;
        
        var obraz = "url(img/" + cards[nr] + ")";
        
        $('#c' + nr).css('background-image', obraz);
        $('#c' + nr).addClass('cardA');
        $('#c' + nr).removeClass('card');
        
        if(oneVisible == false)
        {
            //first card
            oneVisible = true;
            visible_nr = nr;
            lock = false;
        }
        else
        {
            //second card
            if(cards[visible_nr] == cards[nr])
            {
                //para
                setTimeout(function() { hide2cards(nr, visible_nr) }, 750);
            }
            else
            {
                //pudło
                
                setTimeout(function() { restore2cards(nr, visible_nr) }, 750);
            }
            
            turnCounter++;
            $('.score').html('Turn counter: ' + turnCounter);
            oneVisible = false;
        }
    }
}

function hide2cards(nr1, nr2)
{
    $('#c' + nr1).css('opacity', '0');
    $('#c' + nr2).css('opacity', '0');
    pairsLeft--;
    
    if(pairsLeft == 0)
    {
        $('.board').html('<h1 id="xxx"> You win!<br>Done in ' + turnCounter + ' turns<br>Click here to play again</h1>');
        var xxx = document.getElementById('xxx');
        xxx.addEventListener("click", function() {reloadPage();});
    }
    
    lock = false;
}

function restore2cards(nr1, nr2)
{
        $('#c' + nr1).css('background-image', 'url(img/Apator.png)');
        $('#c' + nr1).addClass('card');
        $('#c' + nr1).removeClass('cardA');
        
        $('#c' + nr2).css('background-image', 'url(img/Apator.png)');
        $('#c' + nr2).addClass('card');
        $('#c' + nr2).removeClass('cardA');
        
        visible_nr = -1;
        
        lock = false;
}

function reloadPage()
{
    location.reload();
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}






