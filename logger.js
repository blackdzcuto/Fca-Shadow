const chalk = require('chalk');
function randomColor() {
    var color = "";
    for (var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    } 
   return "#" + color;
};

module.exports = (str, end) => {
	console.log(chalk.bold.hex(randomColor()).bold(`${end || '[ FCA-Shadow ]'} > `) + str);
};
module.exports.onLogger = (str,end,ctscolor) => { 
	var checkbutdak = ctscolor.replace("#",'');
	if (ctscolor.indexOf('#') != 1) {
		console.log(chalk.bold.hex(randomColor()).bold(`${end || '[ FCA-Shadow ]'} > `) + str);
	}
	else if (!isNaN(checkbutdak)) {
		console.log(chalk.bold.hex(randomColor()).bold(`${end || '[ FCA-Shadow ]'} > `) + str);
	} 
	console.log(chalk.bold.hex(randomColor()).bold(`${end || '[ FCA-Shadow ]'} > `) + str);
}
