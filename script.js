function find() {
	event.preventDefault();
	let num = document.getElementById("num");
	let msg = document.getElementById("msg");
	
	if(num.value==="")
	{
		alert("please enter a number");
		msg.innerHTML="";
		num.focus();
		return;
	}
	let n = parseInt(num.value);
	if (n < 0) {
		alert("please enter a positive number");
		msg.innerHTML="";
		num.focus();
		return;
	}

	let fact = 1;
	for (let i = 1; i <= n; i++) {
		fact *= i;
	}

	msg.innerHTML = `Factorial of ${n} is ${fact}`;
}
