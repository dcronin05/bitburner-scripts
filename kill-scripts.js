/** @param {import(".").NS} ns */
export async function main(ns) {
    if (ns.scriptKill(ns.args[0], ns.args[1])) {
        ns.tprint(`${ns.args[0]} was killed on ${ns.args[1]}.`)
    };
}