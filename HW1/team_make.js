const team = [];
function teamMake (team) {
if (confirm('Add a new player')) {
  let i = 0
  if (confirm('Do you want to add new player?')) {
  do {
      const name = prompt('Your name', '');
      const age = prompt('Your age', '');
      const yearsPlaying = prompt('Your experience', '');
      const player = {name, age, yearsPlaying};
      team.push(player);
      i += 1;
      } while (i < 10)
   } else {
   alert(team.length + ' players are ready to play!')
   }
} else {
  alert('You must add minimum one player!');
  }  
}

teamMake(team);
console.log(team);
console.log(team.length);