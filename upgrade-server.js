/** @param {import(".").NS} ns */
export async function main(ns) {
    const ram = ns.args[1];
    const prefix = ns.args[0];
    const cost = ns.getPurchasedServerUpgradeCost(prefix, ram);
    let priceUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    if(ns.upgradePurchasedServer(prefix, ram)) {
        ns.tprint(`Server ${prefix} RAM upgraded to ${ram}GB.`)
    } else { ns.tprint(`Failed. Need ${priceUSD.format(cost)} to upgrade ${prefix}.`)};
}
