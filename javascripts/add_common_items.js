addHeader();
addNav();
addFooter();

$( document ).ready(function(){
	$(".button-collapse").sideNav();
})

function addHeader(){
	document.querySelector ('header').innerHTML =
	'<link rel="shortcut icon" type="image/jpg" href="favicon.ico"/>'+
	'<table style="width:100%">'+
		'<tr>'+
			'<th style="width:120px">'+
				'<a href="https://gyrthmcmulin.me">'+
					'<img src="images/avatar.png" alt="Avatar"/>'+
				'</a>'+
			'</th>'+
			'<th>'+
				'<h1> Gyrth McMulin<br><small>Hendrik Wiersma</small></h1>'+
				'<h3>Programmer</h3>'+
			'</th>'+
		'</tr>'+
	'</table>'
}

function addNav() {
	document.getElementById("navigator").innerHTML =
	'<nav>'+
		'<div class="nav-wrapper">'+
		  '<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>'+
			'<ul class="left hide-on-med-and-down">'+
				'<li><a href="index.html">Main Page</a></li>'+
				'<li><a href="overgrowth.html">Overgrowth</a></li>'+
				'<li><a href="school_projects.html">School Projects</a></li>'+
				'<li><a href="moonwards.html">Moonwards</a></li>'+
				'<li><a href="blacktrace.html">Blacktrace</a></li>'+
			'</ul>'+
			'<ul class="right hide-on-med-and-down">'+
				'<li><a href="https://www.youtube.com/channel/UCS_9m_pTohKCh2kyKfk6xXw"><div class="right soc-med"><img src="images/youtube.png"></div></a></li>'+
				'<li><a href="https://twitter.com/GyrthMcMulin"><div class="right soc-med"><img src="images/twitter.png"></div></a></li>'+
				'<li><a href="https://www.linkedin.com/in/hendrik-wiersma/"><div class="right soc-med"><img src="images/linkedin.png"></div></a></li>'+
			'</ul>'+
			'<ul class="side-nav" id="mobile-demo">'+
				'<li><a href="index.html">Main Page</a></li>'+
				'<li><a href="overgrowth.html">Overgrowth</a></li>'+
				'<li><a href="school_projects.html">School Projects</a></li>'+
				'<li><a href="moonwards.html">Moonwards</a></li>'+
				'<li><a href="blacktrace.html">Blacktrace</a></li>'+
				'<li><a href="https://www.youtube.com/channel/UCS_9m_pTohKCh2kyKfk6xXw">YouTube<div class="right soc-med"><img src="images/youtube.png"></div></a></li>'+
				'<li><a href="https://twitter.com/GyrthMcMulin">Twitter<div class="right soc-med"><img src="images/twitter.png"></div></a></li>'+
				'<li><a href="https://www.linkedin.com/in/hendrik-wiersma/">LinkedIn<div class="right soc-med"><img src="images/linkedin.png"></div></a></li>'+
			'</ul>'+
		'<div>'+
	'</nav>';
}

function addFooter(){
	
}

var myvid = document.getElementById('playlist');
var player = $('#playlist')
var videos = player.data('playlist');
var activeVideo = 0;

if(myvid != null){
	myvid.addEventListener('ended', function(e) {
		// update the new active video index
		activeVideo = (++activeVideo) % videos.length;

		// update the video source and play
		myvid.src = videos[activeVideo];
		myvid.play();
	});
};
