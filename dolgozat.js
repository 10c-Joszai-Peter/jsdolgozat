//Clean up after your dog

function crap(x, bags, cap){
    var yard = x.reduce( (a, b) => a.concat(b) );
    return yard.includes('D') ? 'Dog!!' : bags * cap - yard.filter( val => val === '@' ).length > 0 ? 'Clean' : 'Cr@p';
  }

  //Highest and lowest

  function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }

  //Find the divisors!

  function divisors(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
    return res.length ? res : integer + ' is prime'
  };


//Difference of Volumes of Cuboids

function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
  }