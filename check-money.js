/** @param {import(".").NS} ns */
export async function main(ns) {
    var target = ns.args[0]
    var max = ns.getServerMaxMoney(target);
    var curr = ns.getServerMoneyAvailable(target);
    ns.tprint(`${target} has ${curr} money available out of ${max} max money.`)
}
