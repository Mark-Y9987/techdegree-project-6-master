// --------------****VARIABLES AND ARRAYS****---------------------

const vid = document.querySelector('video');
const captionID = true;

const caption = [
	document.getElementById('caption-0'),
	document.getElementById('caption-1'),
	document.getElementById('caption-2'),
	document.getElementById('caption-3'),
	document.getElementById('caption-4'),
	document.getElementById('caption-5'),
	document.getElementById('caption-6'),
	document.getElementById('caption-7'),
	document.getElementById('caption-8'),
	document.getElementById('caption-9'),
	document.getElementById('caption-10'),
	document.getElementById('caption-11'),
	document.getElementById('caption-12'),
	document.getElementById('caption-13'),
	document.getElementById('caption-14'),
	document.getElementById('caption-15')
];
const spans = document.querySelectorAll('span');

const capTimeArray = [
	0.24,
	4.13,
	7.53,
	11.27,
	13.96,
	17.94,
	22.37,
	26.88,
	32.1,
	34.73,
	39.43,
	42.35,
	46.3,
	49.27,
	53.76,
	57.78,
	59.68
];

//-----------------------------------------------------------------------

//----------------------- ****FUNCTIONS****------------------------------

// Keep track of current video time and highlight appropriate text

function transcriptHighlight() {
	if (captionID) {
		for (i = 0; i < capTimeArray.length - 1; i += 1) {
			if (this.currentTime >= capTimeArray[i] && this.currentTime <= capTimeArray[i + 1]) {
				const caption = document.getElementById(`caption-${i}`);
				caption.style.color = 'orange';
			} else {
				const caption = document.getElementById(`caption-${i}`);
				caption.style.color = 'black';
			}
		}
	}
}

// ------------------------------------------------------------------------

// Initialize Media Element Player

$('video').mediaelementplayer({
	useDefaultControls: true,
	stretching: 'responsive',
	startLangauge: 'en'
});

// Check the video's current time and execute the function

vid.addEventListener('timeupdate', transcriptHighlight);

// Click transcipt text to skip to that part of the video

for (let i = 0; i < caption.length; i++) {
	caption[i].addEventListener('click', function(event) {
		event.preventDefault();
		vid.play();
		vid.pause();
		vid.currentTime = capTimeArray[i];
		vid.play();
	});
}
