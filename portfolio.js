/** @param {import(".").NS} ns */
export async function main(ns) {
    ns.tail();
    ns.disableLog("sleep");
    ns.disableLog("disableLog");
    ns.clearLog();

    var forecast = ns.stock.getForecast(symbol);
    var cost = ns.stock.getAskPrice(symbol)
}