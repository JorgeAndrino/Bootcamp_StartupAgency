(() => {

const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress_filled');
const toggle = document.querySelector('.toggle');
const skipButton = document.querySelector('[data-skip]');
const ranges = document.querySelector('.player_slider');

/* Build out functions */
function togglePlay()
{
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}

function updateButton()
{
	const icon = this.paused? '>' : '||' ;
	toggle.textContent = icon;
}

function skip() 
{
	console.log(this.dataset.skip);
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate()
{
	video[this.name] = this.value;
}

(() => {

function handleProgress()
{
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) 
{
	const scrubTime = (e.offset / progress.offsetwidth) * video.duration;
    video.currentTime = scrubTime;
	console.log(e);
}

/* hook up the event listner */

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateButton);

video.addEventListener('click', togglePlay);
skipButton.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

})();