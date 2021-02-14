document.addEventListener('DOMContentLoaded', () => {
	const imgLightBox = document.querySelectorAll('.galeria_img');
	M.Materialbox.init(imgLightBox, {
		inDuration: 500,
		outDuration: 1000
	});
});


