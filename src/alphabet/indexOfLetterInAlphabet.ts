/* This is the most useless class I could think of in the moment.
I have some ideas to make it _more_ useless, but this satisfies 
me for now. */
class LetterArray {
    letters: string[] = []
    // populateWith() should take a string to use to populate the
    // letters array
    populateWithAlphabet() {
        // Pass in instaed of hardcode?
        // No dupes? Or multiple answers?
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const alphabetAsArray: string[] = []
        for (let letter of alphabet) {
            alphabetAsArray.push(letter)
        }
        this.letters = alphabetAsArray
    }
    locateLetterInLetterArray(letter: string) {
        const oneIndexed = (n: number) => n + 1
        let indexOfLetter = -1
        this.letters.map((char, idx) => {
            if (char === letter) {
                indexOfLetter = oneIndexed(idx);
                return; // only returns out of loop
            }
        })
        return indexOfLetter;
    }
}

function withNotFoundCatch(answer: number) {
    if (answer === -1) {
        console.error("Oops, no letter matched your chosen letter.")
    } else {
        console.log(`Your letter was found at index: ${answer}`)
    }
    
}

export default function indexOfLetterInAlphabet() {
    const abc = new LetterArray()
    abc.populateWithAlphabet()
    const letter = "K" // Take input letter
    return withNotFoundCatch(abc.locateLetterInLetterArray(letter))
}