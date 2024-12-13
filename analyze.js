/** @param {import(".").NS} ns */
export async function main(ns) {
  var target = ns.args[0];
  var cash = ns.getServerMoneyAvailable(target);
  var sec = ns.getServerSecurityLevel(target);
  while(true) {
    var newCash = ns.getServerMoneyAvailable(target);
    var newSec = ns.getServerSecurityLevel(target);
    if(newCash !== cash){
        let priceUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
        //   ns.tprint(`${target} security level is ${sec} and it has ${cash} money available.`)
        ns.tprint(`${target} has $${priceUSD.format(cash)} available.`)
        cash = newCash;
        sec = newSec
    }

    await ns.sleep(1000);
  }
}