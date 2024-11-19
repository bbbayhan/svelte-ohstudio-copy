export const copyToClipboard = () => {
	const email = 'bestebbayhan@gmail.com';
	navigator.clipboard
		.writeText(email)
		.then(() => {
			const message = document.getElementById('copyMessage');
			if (message) {
				message.style.visibility = 'visible';
				setTimeout(() => {
					message.style.visibility = 'hidden';
				}, 2000);
			}
		})
		.catch((err) => {
			console.error('Failed to copy email: ', err);
		});
};
