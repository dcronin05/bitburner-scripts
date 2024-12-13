/** @param {import(".").NS} ns */

function upload(ns, host, script, target) {
	if (host !== "home") {
		var kill = ns.scriptKill("hack-template.js", host);
		ns.print(kill);
		ns.run("deploy.js", 1, host, script, target);
		ns.tprint("launching script on ", host);
	}
}

export async function main(ns) {
	
	var start = ns.args[0];
	var hosts = ns.scan(start);
	ns.tprint("The hosts: ", hosts);
	var script = ns.args[1];
	var target = ns.args[2]
	
	for (var host of hosts) {
		upload(ns, host, script, target, "--tail");
		await ns.sleep(1000);
	}

}