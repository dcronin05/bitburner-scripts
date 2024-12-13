/** @param {import(".").NS} ns */
export async function main(ns) {
    ns.disableLog("sleep");
    ns.disableLog("getServerMoneyAvailable");
    while(true) {
        await ns.sleep(1000);

        let priceUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
        var target = ns.args[0]
        var cash = priceUSD.format(ns.getServerMoneyAvailable(target)) + "\n";
        var fileName = "./server_info_" + target + ".txt";
        var sec = ns.formatNumber(ns.getServerSecurityLevel(target)) + "\n";

        ns.clearLog();
        ns.print(`${target} value = ${cash}`)
        ns.print(`${target} security = ${sec}`)
        ns.write(fileName, cash + sec, "w")
    }
}
