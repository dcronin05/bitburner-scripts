/** @param {import(".").NS} ns */
export async function main(ns) {
    const ram = ns.args[1];
    const prefix = ns.args[0];
    // for (let i = 0; i < 5; ++i) {
    if (ns.purchaseServer(prefix, ram)) {
        ns.tprint(`\nServer ${prefix} with ${ram}GB RAM purchased.\n`)
    } else { ns.tprint("\nPurchase failed.\n\n")}
    // }
}
