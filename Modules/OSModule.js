const os = require("os");

console.log("Platform :", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);
console.log("Memory:", os.totalmem() / (1024 * 1024 * 1024), "GB");
console.log("Free Memory:", os.freemem() / (1024 * 1024 * 1024), "GB");
console.log("Home Directory:", os.homedir());
console.log("Uptime:", os.uptime() / 60, "minutes");
console.log("Hostname:", os.hostname());
console.log("Username:", os.userInfo().username);
console.log("OS Version:", os.release());
console.log("User:", os.userInfo());
console.log("Temp Dir:", os.tmpdir());