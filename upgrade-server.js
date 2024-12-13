/** @param {import(".").NS} ns */
export async function main(ns) {
    const ram = 128;
    const prefix = ns.args[0];
    ns.upgradePurchasedServer(prefix, ram);
}
