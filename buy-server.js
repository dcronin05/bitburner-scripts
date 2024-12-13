/** @param {import(".").NS} ns */
export async function main(ns) {
    const ram = ns.args[1];
    const prefix = ns.args[0];
    let priceUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    const cost = ns.getPurchasedServerCost(ram);

    if (ns.purchaseServer(prefix, ram)) {
        ns.tprint(`\nServer ${prefix} with ${ram}GB RAM purchased.\n`)
    } else { ns.tprint(`Failed. Need ${priceUSD.format(cost)} to purchase ${prefix} with ${ram}GB RAM.`)};
}
