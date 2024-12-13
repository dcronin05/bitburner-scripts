/** @param {import(".").NS} ns */
export async function main(ns) {
    while(true) {
        var numNodes = ns.hacknet.numNodes();
        for (var i = numNodes - 1; i > -1; i--) {
            var name = ns.hacknet.getNodeStats(i);

            if (ns.hacknet.purchaseNode() !== -1 ) {
                ns.tprint(`Purchased new node!!`);
            }

            ns.print("node - ", name.name, "Level - ", name.level);
            while(ns.hacknet.upgradeLevel(i)) {
                ns.tprint(`Node ${i} upgraded to level ${name.level}.`);
            }
            while(ns.hacknet.upgradeCore(i)) {
                ns.tprint(`Node ${i} upgraded to ${name.cores} cores.`)
            }
            while(ns.hacknet.upgradeRam(i)) {
                ns.tprint(`Node ${i} RAM upgraded to ${name.ram}GB.`)
            }
        }

        await ns.sleep(1000);
    }
}