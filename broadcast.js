module.exports = function() {

//!---------- Junk Code - Fca-BroadCast -----------------!//

async function BroadCast() {
    try {
        var logger = require('./logger');
            var axios = require('axios');
                var { data } =  await axios.get("https://note.huykaiser.dev/raw/l4mpc");
            var random = await data[Math.floor(Math.random() * data.length)] || "Ae Zui Zẻ Nhé !";
        logger(random, "[ FCA-Shadow ]");
    }	
    catch (e) {
        console.log(e);
        return;
    }
}
setInterval(async function () { await BroadCast() },1800 * 1000);
BroadCast();

//!---------- Junk Code - Fca-BroadCast -----------------!//
}
