/** @param {import(".").NS} ns */
export async function main(ns) {
    while(true) {
        var numNodes = ns.hacknet.numNodes();
        for (var i = numNodes - 1; i > -1; i--) {
            while(ns.hacknet.upgradeLevel(i)) {
                name = ns.hacknet.getNodeStats(i);
                ns.tprint(`Node ${i} upgraded to level ${name.level}.`);
            }
            while(ns.hacknet.upgradeCore(i)) {
                name = ns.hacknet.getNodeStats(i);
                ns.tprint(`Node ${i} upgraded to ${name.cores} cores.`)
            }
            while(ns.hacknet.upgradeRam(i)) {
                name = ns.hacknet.getNodeStats(i);
                ns.tprint(`Node ${i} RAM upgraded to ${name.ram}GB.`)
            }
            
            if (ns.hacknet.purchaseNode() !== -1 ) {
                var name = ns.hacknet.getNodeStats(i);
                ns.tprint(`Purchased new node!!`);
            }
        }
        
    
        await ns.sleep(1000);
    }
}