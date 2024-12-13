/** @param {import(".").NS} ns */
export async function main(ns) {
    const ram = ns.args[1];
    const prefix = ns.args[0];
    let priceUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    const cost = ns.getPurchasedServerCost(ram);

    
    while (!ns.purchaseServer(prefix, ram)) {
        await ns.sleep(100);
    } 
    ns.tprint(`\nServer ${prefix} with ${ram}GB RAM purchased.\n`)
}