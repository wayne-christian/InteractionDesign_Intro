// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies

var backcolors = ['red', 'green', 'blue', 'orange', 'yellow'];
var sections ='';
		








Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,
	width: 1024,
	height: 768,

	transition: 'concave', // none/fade/slide/convex/concave/zoom
	dependencies: [{
			src: 'lib/js/classList.js',
			condition: function () {
				return !document.body.classList;
			}
		}, {
			src: 'plugin/markdown/marked.js',
			condition: function () {
				return !!document.querySelector('[data-markdown]');
			}
		}, {
			src: 'plugin/markdown/markdown.js',
			condition: function () {
				return !!document.querySelector('[data-markdown]');
			}
		}, {
			src: 'plugin/highlight/highlight.js',
			async: true,
			callback: function () {
				hljs.initHighlightingOnLoad();
			}
		}, {
			src: 'plugin/zoom-js/zoom.js',
			async: true
		}, {
			src: 'plugin/notes/notes.js',
			async: true
		},
		{
			src: 'plugin/live-coding/live-coding.js',
			async: true,
			condition: function () {
				return !!document.body.classList;
			}
		}, 
		{
			src: 'plugin/menu/menu.js'
		}


	],

	menu: {
		// Specifies which side of the presentation the menu will 
		// be shown. Use 'left' or 'right'.
		side: 'left',
		transitions: false,
		themes: false,
		slides: false,
		keyboard: false
	}
});


Reveal.addEventListener( 'ready', function( event ) {
	console.log('reveal loaded');
} );


Reveal.addEventListener('jsexample1', function () {
	console.log('jsexample1 called!');
	$( "#jsexample1 #mybtn").unbind( "click" );
	$("#jsexample1 #mybtn").click(changeHeading);
       
function changeHeading() {
var ex1 = $("#jsexample1 #myheading");
var newHead= prompt("enter new header");
ex1.text(newHead);
}
	
});


var entityMap = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#39;',
	'/': '&#x2F;',
	'`': '&#x60;',
	'=': '&#x3D;'
};

function escapeHtml(string) {
	return String(string).replace(/[&<>"'`=\/]/g, function (s) {
		return entityMap[s];
	});
}


Reveal.addEventListener('pie', function () {
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '% of cant be arsed!'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'types',
        colorByPoint: true,
        data: [{
            name: 'Good Students (147)',
            y: 147
        }, {
            name: 'I struggle with simple instructions (66)',
            y: 66,
            sliced: true,
            selected: true
        }]
    }]
});
	
});



