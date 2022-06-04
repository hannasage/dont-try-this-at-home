"use strict";
class Cli {
    constructor(applications, settings) {
        this.applications = applications;
        this.settings = settings;
    }
    start() {
        console.log("Started");
    }
    run(keyOfApp) {
        const app = this.applications.get(keyOfApp);
        if (!app)
            return;
        app();
    }
}
const APPLICATIONS = new Map([]);
function main() {
    const cli = new Cli(new Map(), {});
    cli.start();
}
main();
