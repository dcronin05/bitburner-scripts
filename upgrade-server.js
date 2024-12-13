/** @param {import(".").NS} ns */
export async function main(ns) {
    const ram = ns.args[1];
    const prefix = ns.args[0];
    if(ns.upgradePurchasedServer(prefix, ram)) {
        ns.tprint(`Server ${prefix} RAM upgraded to ${ram}GB.`)
    };
}
