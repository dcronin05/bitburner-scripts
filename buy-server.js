/** @param {import(".").NS} ns */
export async function main(ns) {
    const ram = ns.args[1];
    const prefix = ns.args[0];
    // for (let i = 0; i < 5; ++i) {
        ns.purchaseServer(prefix, ram);
    // }
}
