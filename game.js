let score = 0;
	document.querySelector('.score').innerHTML = score;

	document.querySelector('.guitar').onclick = function(){
		score = score + 1
		document.querySelector('.score').innerHTML = score;
		alert('Good!');
        if (score == 4) 
            alert('All Done!')
		document.querySelector('.h3g').style.textDecoration = 'line-through';
		document.querySelector('.guitar').style.display = 'none';
	}
	document.querySelector('.totoro').onclick = function(){
		score = score + 1
		document.querySelector('.score').innerHTML = score;
		alert('уes!');
        if (score == 4) 
            alert('All Done!')
		document.querySelector('.h3t').style.textDecoration = 'line-through';
		document.querySelector('.totoro').style.display = 'none';
	}
	document.querySelector('.boot').onclick = function(){
		score = score + 1
		document.querySelector('.score').innerHTML = score;
		alert('Congrats!');
        if (score == 4) 
            alert('All Done!')
		document.querySelector('.h3b').style.textDecoration = 'line-through';
		document.querySelector('.boot').style.display = 'none';
	}
	document.querySelector('.plane').onclick = function(){
		score = score + 1
		document.querySelector('.score').innerHTML = score;
		alert('let\'s Go!');
        if (score == 4) 
            alert('All Done!')
		document.querySelector('.h3p').style.textDecoration = 'line-through';
		document.querySelector('.plane').style.display = 'none';
	}

