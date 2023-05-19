const adjectives = ['Cyber', 'Green', 'Evil'];
const nouns = ['Zerox', 'Gun', 'Poet'];

export function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}
