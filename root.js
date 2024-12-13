/** @param {import(".").NS} ns */
export async function main(ns) {
    ns.tail();
    ns.disableLog("disableLog");
    ns.disableLog("sleep");
    var target = ns.args[0];

    while(true) {
        for (var server of servers) {
            var used = ns.formatRam(ns.getServerUsedRam(server));
            var max = ns.formatRam(ns.getServerMaxRam(server));
            ns.print(`  ${server}\tUsed/Total: ${used}/${max}`)
        }
        ns.print("\n")
        await ns.sleep(1000);
        ns.clearLog();

        
    }
}
