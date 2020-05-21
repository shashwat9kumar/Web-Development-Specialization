const eyes = document.querySelectorAll(".pupil")


document.onmousemove = function() {
	var x = event.clientX * 100 / window.inner + "%" 
	
	
	var y = event.clienty * 100 / window.inner + "%" 
	
	
	eyes.forEach(eye => {
		eye.style.left = x;
		eye.style.top = y;
		eye.style.transform = "translate(-"+x+", -"+y+")"
	})
	
	
}