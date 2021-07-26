// go away this isnt rigged shut up
var windows = document.getElementById('windows')
var macos = document.getElementById('macos')
var linux = document.getElementById('linux')
var other = document.getElementById('other')
var h1 = document.getElementById('h1')
var desc = document.getElementById('desc')
var title = document.getElementById('title')

function hideButtons() {
	// ill take your buttons now kthx
	windows.setAttribute("style", "display: none;")
	macos.setAttribute("style", "display: none;")
	linux.setAttribute("style", "display: none")
	other.setAttribute("style", "display: none;")
}

windows.onclick = function () {
	hideButtons()
	title.innerHTML = 'wrong answer kid'
	h1.innerHTML = 'ew you suck the most'
	desc.innerHTML = 'your using the worlds WORST operating system, windows, even that other os from 1980 is better. michealsoft bimbows is tracking you 24/7, how do you feel clown? yeah, that one time you took a dickpick, microsoft most likely saw that bro <b>switch to linux bitch</b>'
}

macos.onclick = function () {
	hideButtons()
	title.innerHTML = 'go eat an apple'
	h1.innerHTML = 'you use that shit?'
	desc.innerHTML = 'that things unbearable bro, linux is way better, your the most BASIC person i have ever met, go download linux then come back and ill like you more.'
}

linux.onclick = function () {
	hideButtons()
	title.innerHTML = 'FINALLY SOMEONE THATS NOT A DIPSHIT'
	h1.innerHTML = 'ily bro no homo'
  desc.innerHTML = 'you are a really cool person, and you deserve a medal for being one of the rare people that arent stupid. you arent giving all your data to microsoft nor apple, congrats! on top of that, your using an os thats highly customizable, and you can do anything and everything you want with. <b>i use arch btw</b>'
}

other.onclick = function () {
	hideButtons()
	title.innerHTML = 'wtf'
	h1.innerHTML = 'WHAT are you DOING man'
  desc.innerHTML = 'ARE YOU OK?'
}