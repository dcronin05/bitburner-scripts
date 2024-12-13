/** @param {import(".").NS} ns */
function getPS(ns, procs) {
    for (var proc of procs) {
        var script = proc.filename;
        var pid = proc.pid;
        var args = proc.args;
        var threads = proc.threads;
        try {
            var ram = ns.formatRam(ns.getRunningScript(pid).ramUsage * threads, 0);
        } catch (error) {
            var ram = 0;
        }
        var output = `  ${pid}\t${script}  -  ${threads} thrds  -  ${args}  -  ${ram}`
        ns.print(output);
    }
    ns.print("\n")
}

/** @param {import(".").NS} ns */
export async function main(ns) {
    ns.tail();
    var target = ns.args[0];
    ns.disableLog("sleep");
    ns.disableLog("getServerUsedRam");
    ns.disableLog("getServerMaxRam");
    
    while(true) {
        ns.clearLog();
        var procs = ns.ps(target);
        var used = ns.formatRam(ns.getServerUsedRam(target));
        var max = ns.formatRam(ns.getServerMaxRam(target));
        ns.print(`Used/Total  -  ${used}/${max}\n\n`)
        getPS(ns, procs);
        await ns.sleep(1000);
    }
}