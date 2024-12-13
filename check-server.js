/** @param {import(".").NS} ns */
export async function main(ns) {
    let priceUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    var target = ns.args[0]
    var max = ns.getServerMaxMoney(target);
    max = priceUSD.format(max);
    var curr = ns.getServerMoneyAvailable(target);
    curr = priceUSD.format(curr);
    var sec = ns.getServerSecurityLevel(target);
    var minSec = ns.getServerMinSecurityLevel(target);
    var weakenReqs = ns.growthAnalyze(target, 500, 2);
    ns.tprint(`${target} has ${curr} money available out of ${max} max money.`)
    ns.tprint(`${target}'s security level is ${sec} out of ${minSec}.`)
    ns.tprint(`${weakenReqs}`);
}
