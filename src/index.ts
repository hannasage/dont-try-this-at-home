import indexOfLetterInAlphabet from "./alphabet/indexOfLetterInAlphabet"

interface Settings {}
// Apps must not expect the CLI to handle any return value
type Application = () => void
// Name your apps in the string using dash-case
type Applications = Map<string, Application>

class Cli {
    readonly applications: Applications
    readonly settings: Settings

    constructor(applications: Applications, settings: Settings) {
        this.applications = applications
        this.settings = settings
    }

    // Should take param of string index for application
    start() {
        this.run("letter-index-search")
    }

    run(keyOfApp: string) {
        const app = this.applications.get(keyOfApp)
        if (!app) return;
        app()
    }
}

const APPLICATIONS: Applications = new Map([
    ["letter-index-search", indexOfLetterInAlphabet]
])
const SETTINGS: Settings = {}
function main() {
    const cli = new Cli(
        APPLICATIONS, 
        SETTINGS
    )
    // Should take user input for which app to start
    cli.start()
}

// Should make run continuously
main()
