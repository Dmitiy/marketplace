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

	const burgerMenu = document.querySelector('.btn-burger');
	const aside = document.querySelector('.aside');
	const body = document.querySelector('body');

	burgerMenu.addEventListener('click', () => {
		if (burgerMenu.classList == 'btn-burger') {
			burgerMenu.classList.add('btn-burger--close');
			aside.className = 'aside-open';
			body.style.overflow = 'hidden';
		} else {
			burgerMenu.classList.remove('btn-burger--close');
			aside.className = 'aside';
			body.style.overflow = '';
		}
	});


	const i_search = document.querySelector('.icon-search');

	i_search.addEventListener('click', function (e) {
		const el = event.target;
		const parent_box = el.parentNode;
		parent_box.classList.add('has-focus').focus();
	})

})();