/** @param {import(".").NS} ns */
export async function main(ns) {
    // Defines the "target server", which is the server
    // that we're going to hack. In this case, it's "n00dles"
    var target = ns.args[0];

    // If we have the BruteSSH.exe program, use it to open the SSH Port
    // on the target server
    if (ns.fileExists("BruteSSH.exe", "home")) {
        ns.brutessh(target);
    }
    
    if (ns.fileExists("FTPCrack.exe", "home")) {
        ns.ftpcrack(target);
    }

    if (ns.fileExists("relaySMTP.exe", "home")) {
        ns.relaysmtp(target);
    }

    if (ns.fileExists("HTTPWorm.exe", "home")) {
        ns.httpworm(target);
    }

    if (ns.fileExists("SQLInject.exe", "home")) {
        ns.sqlinject(target);
    }

    // Get root access to target server
    ns.nuke(target);

    let priceUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

    // Infinite loop that continously hacks the target server
    while(true) {
        var scriptHost = ns.getHostname();
        var hack = await ns.hack(target);
        var logMsg = `${priceUSD.format(hack)} hacked from ${target} by hack-target.js running on ${scriptHost}`;

        ns.print(logMsg);
        ns.writePort(1, logMsg);
    }
}