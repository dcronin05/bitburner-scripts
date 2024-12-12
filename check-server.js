/** @param {import(".").NS} ns */
export async function main(ns) {
    var target = ns.args[0]
    var max = ns.getServerMaxMoney(target);
    var curr = ns.getServerMoneyAvailable(target);
    var sec = ns.getServerSecurityLevel(target);
    var minSec = ns.getServerMinSecurityLevel(target);
    ns.tprint(`${target} has ${curr} money available out of ${max} max money.`)
    ns.tprint(`${target}'s security level is ${sec} out of ${minSec}.`)
}
