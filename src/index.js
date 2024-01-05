function random_number() {
	const number = Math.random() * 10000000;
	const random = Math.floor(number).toString();
    document.getElementById('display_random').value = random
}

document.getElementById("random_generator").addEventListener("click", random_number);
