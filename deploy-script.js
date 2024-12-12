/** @param {import(".").NS} ns */

function upload(ns, host, script, target) {
	if (host !== "home") {
		ns.scriptKill("hack-template.js", host);
		ns.run("deploy.js", 1, host, script, target);
		ns.tprint("launching script on ", host);
	}
}

export async function main(ns) {
	
	var target = ns.args[0];
	var hosts = ns.scan(target);
	ns.tprint("The hosts: ", hosts);
	
	for (var host of hosts) {
		upload(ns, host, ns.args[1], ns.args[2]);
		await ns.sleep(1000);
	}

}