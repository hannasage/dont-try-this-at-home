
interface Settings {}
type Application = () => void
type Applications = Map<string, Application>

class Cli {
    readonly applications: Applications
    readonly settings: Settings

    constructor(applications: Applications, settings: Settings) {
        this.applications = applications
        this.settings = settings
    }

    start() {
        console.log("Started")
    }

    run(keyOfApp: string) {
        const app = this.applications.get(keyOfApp)
        if (!app) return;
        app()
    }
}

const APPLICATIONS: Applications = new Map([])
const SETTINGS: Settings = {}
function main() {
    const cli = new Cli(
        APPLICATIONS, 
        SETTINGS
    )
    cli.start()
}

main()
