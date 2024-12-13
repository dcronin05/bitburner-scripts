/** @param {import(".").NS} ns */
export async function main(ns) {
    ns.tail();
    
    var target = ns.args[0];

    while(true) {
        await ns.sleep(1000);
        ns.print(ns.readPort(target));
    }
    
}