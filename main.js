// resize header to size of browser window

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
        setTimeout(() => {
			splash.classList.add('display-none');
		}, 1500);
})


$(document).ready(function(){
    $('.header').height($(window).height());
})

// set modal time delay before loading

// setTimeout(function() {
// 	$('#demo-modal').modal();
// }, 1000);


$(function (){
       AOS.init({
		easing :'ease',
		   duraton: 1000
	   })
});

