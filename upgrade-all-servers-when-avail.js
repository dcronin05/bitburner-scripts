/** @param {import(".").NS} ns */
export async function main(ns) {
    const ram = ns.args[0];

    while (true) {
        for (var prefix of ns.getPurchasedServers()) {
            const cost = ns.getPurchasedServerUpgradeCost(prefix, ram);
            let priceUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
            if(ns.upgradePurchasedServer(prefix, ram)) {
                ns.writePort(10, `Server ${prefix} RAM upgraded to ${ram}GB.`)
            } else { ns.writePort(10, `Failed. Need ${priceUSD.format(cost)} to upgrade ${prefix}.`)};
        }
        await ns.sleep(5000);
    }
}
