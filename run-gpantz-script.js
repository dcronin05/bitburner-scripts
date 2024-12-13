/** @param {import(".").NS} ns */
export async function main(ns) {
    var script = ns.args[0];
    var target = ns.args[1];
    var threads = ns.args[2];
    var args = ns.args[3];

    ns.scp(script, target);
    ns.tprint(ns.exec(script, target, threads, args));
}