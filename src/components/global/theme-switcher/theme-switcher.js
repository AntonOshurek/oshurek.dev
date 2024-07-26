const tchemeControl = () => {
	const fieldset = document.querySelector('.theme-switcher');
	const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)');

	function setupSwitcher() {
		const savedScheme = getSavedScheme();

		if (savedScheme && savedScheme !== null) {
			const currentRadio = document.querySelector(`.theme-switcher__radio[value=${savedScheme}]`);

			currentRadio.checked = true;
		}

		fieldset.addEventListener('change', (evt) => {
			const target = evt.target;
			setScheme(target.value);
		});
	}

	function setScheme(scheme) {
		switchMedia(scheme);

		if (scheme === 'auto') {
			clearScheme();
		} else {
			saveScheme(scheme);
		}
	}

	function switchMedia(scheme) {
		if (scheme === 'auto') {
			document.querySelector('html').setAttribute('data-theme', getSystemScheme());
		} else {
			document.querySelector('html').setAttribute('data-theme', scheme);
		}
	}

	function getSystemScheme() {
		const darkScheme = darkSchemeMedia.matches;

		return darkScheme ? 'dark' : 'light';
	}

	function getSavedScheme() {
		return localStorage.getItem('color-scheme');
	}

	function saveScheme(scheme) {
		localStorage.setItem('color-scheme', scheme);
	}

	function clearScheme() {
		localStorage.removeItem('color-scheme');
	}

	setupSwitcher();
};

window.addEventListener('DOMContentLoaded', () => {
	tchemeControl();
});
