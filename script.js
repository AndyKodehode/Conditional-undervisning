// if/else statement

// operators
/*

if(her skriver vi sjekk){
  her skriver vi hva som skal skje
} else {
  hvis ikke if statement er true, så skjer det vi skriver her
}

= betyr å erklære noe
=== betyr samme verdi og samme datatype

< betyr mindre enn (less then)
> betyr større enn (more then)

&& betyr og (and)
|| betyr eller (or)

//OPPGAVER//

Oppgave1
Den lokale butikken stenger kl.21, lag en sjekk som ser om butikken er åpen
1.lag en variabel som inneholder tidspunktet på dagen
2. lag en if statement som sjekker om variabel for tidspunkt er mindre enn stengetid
3. legg til en else som console.log en beskjed som sier at butikken er stengt om tidspunkt er etter stengetid

BONUS!

4. lag en variabel for åpningstid og sjekk om tidspunktet er etter åpningstid OG før stengetid


*/

/*

let closingHour = 22;
let timeNow = 23;

if (closingHour > timeNow) {
  console.log('Shop is open');
} else {
  console.log('shop is closed');
}

let age = 23;

if (age > 18) {
  console.log('Welcome to the nightclub');
} else {
  console.log('sorry, you are not old enough');
}

const hour = 15;

// Sjekker om klokken er mindre enn 12
if (hour < 12) {
  console.log('Good morning');
} else if (hour === 12) {
  // Sjekker om klokken er akkurat 12
  console.log('The clock is 12!');
} else if (hour > 14 && hour < 18) {
  // Sjekker om klokken er mellom 14 og 18.
  console.log('The clock is between 14 and 18');
} else {
  // Tidspunkt som ikke passer før 12 eller akkurat 12
  console.log('Good day');
}

*/
//
//

let ball = document.querySelector('#ball');
let grid = document.querySelector('.ballCont')

/*const layout = [
  0,0,0,1,0,0,0,1,1,0,
  1,0,0,0,0,0,0,0,0,0,
  0,1,0,1,0,1,0,0,0,1,
  1,0,0,0,1,0,0,1,0,0,
  1,0,0,0,1,0,0,1,0,0,
  0,1,0,1,0,1,0,0,0,1,
  0,1,0,1,0,1,0,0,0,1,
  1,0,0,0,1,0,0,1,0,0,
  1,0,0,0,1,0,0,1,0,0,
  1,0,0,0,1,0,0,1,0,1
]

let squareArray = []

function createBoard(){
  
  for(let i=0; i< layout.length; i++ ){
    const square = document.createElement('div')
    if(layout[i]=== 1){
    square.classList.add('wall')
  } else if( layout[i] === 0){
   square.classList.add('path')
  }

  
  grid.appendChild(square)
  
  

}
}

createBoard()*/




let positionX = 0;
let positionY = 0;

window.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight' ){
    positionX += 10;
  } else if (event.key === 'ArrowLeft') {
    positionX -= 10;
  } else if (event.key === 'ArrowUp') {
    positionY -= 10;
  } else if (event.key === 'ArrowDown') {
    positionY += 10;
  }
  
  ball.style.transform = `translate(${positionX}px, ${positionY}px)`;
});

