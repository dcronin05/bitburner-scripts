/** @param {import(".").NS} ns */
export async function main(ns) {
    var target = ns.args[0];
    var newName = ns.args[1];

    if (ns.renamePurchasedServer(target, newName)) {
        ns.tprint(`Server ${target} renamed to ${newName}.`)
    };
  }