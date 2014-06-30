
function bcs_init(){
	bcs_console("ИИ "+vername+" v"+vernum+"("+verdate+")",1);

}


function bcs_console(msg){
	var timeMsg = Math.floor(gameTime / 1000);
	debug("bcs["+me+"]{"+timeMsg+"}: "+msg);
}

function eventStartLevel() {

	queue("bcs_init", 1000);
}
