/////////////////////////////////////////////////////////////////////////////////
/// Global vars
/////////////////////////////////////////////////////////////////////////////////

let mainFont;

const vue_ui = {
	bawxes: ["One", "Two", "Three"],
	number: 0,
}

/////////////////////////////////////////////////////////////////////////////////
/// Scenes
/////////////////////////////////////////////////////////////////////////////////

let currentScene;

const testScene = {
	init()
	{

	},

	update()
	{

	},

	draw()
	{
		clear_to_color(canvas, makecol(40, 40, 40));
		textout_centre(canvas, font, vue_ui.number, 320, 180, 24, makecol(200, 200, 200));
	},
};

function vueTest()
{
	console.log("called from within Vue");
}




/////////////////////////////////////////////////////////////////////////////////
/// main
/////////////////////////////////////////////////////////////////////////////////

function init()
{
	allegro_init_all("canvas", 640, 360);
	// mainFont = load_font("./fonts/Scaly Sans.otf");
	currentScene = testScene;
	//load a dummy image till there's sprites
    // sentrySprite = load_bmp('./sentry.png');
}

function scenesInit()
{
	testScene.init();
	// testEl = document.getElementById('testInput');
	// testEl.value = "butt";
}

function main()
{
	init();

	ready( function() {
		scenesInit();

		loop(function(){
			currentScene.update();
			currentScene.draw();
		}, BPS_TO_TIMER(60));
	});

	return 0;
}
END_OF_MAIN();