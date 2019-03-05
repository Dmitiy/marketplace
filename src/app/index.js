(() => {
	console.log('ok');

	const inputs = document.querySelectorAll('.input');

	inputs.forEach(function (item) {
		item.addEventListener('focus', onFocus, true);
		item.addEventListener('blur', onBlur, true);
	})


	function onFocus(event) {
		const el = event.target;
		const input_box = el.parentNode;

		input_box.classList.remove('has-error')
	}

	function onBlur(event) {
		const el = event.target;
		const input_box = el.parentNode;

		if (el.value === '') {
			input_box.classList.add('has-error')
			input_box.classList.remove('has-value')
		} else {
			input_box.classList.remove('has-error')
			input_box.classList.add('has-value')
		}
	}

})();