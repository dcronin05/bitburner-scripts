/** @param {import(".").NS} ns */
function scan_analyze(ns, targets, checked) {
    for (var target of targets) {
        if (!checked[target]) {
            var connections = ns.scan(target);
            checked[target] = connections;
            ns.print(target + " - " + checked[target])
            scan_analyze(ns, connections, checked);
        }
    }
    return checked;
}

/** @param {import(".").NS} ns */
export async function main(ns) {
    ns.tail();
    ns.disableLog("disableLog");
    ns.disableLog("sleep");
    ns.disableLog("scan");
    ns.clearLog();

    var servers = ns.scan("home");
    var scanned = {};

    scanned = scan_analyze(ns, servers, scanned);
}
