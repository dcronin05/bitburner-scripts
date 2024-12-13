/** @param {import(".").NS} ns */
export async function main(ns) {
    if(ns.singularity.upgradeHomeRam()) {
        ns.tprint("Home RAM upgraded!");
        ns.tprint();
    }
}