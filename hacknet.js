/** @param {import(".").NS} ns */
export async function main(ns) {
    ns.tail();
    ns.disableLog("sleep");
    ns.disableLog("disableLog");
    ns.clearLog();
    
    var target = ns.args[0];

    while(true) {
        await ns.sleep(1000);
        var data = ns.readPort(target);
        if (data !== "NULL PORT DATA") {
            ns.print(data);
        };
    }
}