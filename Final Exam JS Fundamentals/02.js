function detectEmojies(input) {
    let text = input.shift();
    let threshold = 1;
    let countEmojies = 0;
    let coolEmojies = [];

    let digits = text.match(/\d/g);
    for (let digit of digits) {
        let number = Number(digit);
        threshold *= number;
    }

    let emojiMatches = text.matchAll(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g);
    for (let emojiMatch of emojiMatches) {
        let emoji = emojiMatch[0];
        let emojiName = emojiMatch.groups.name;
        countEmojies++;

        let emojiCoolnes = 0;
        for (let i = 0; i < emojiName.length; i++) {
            emojiCoolnes += emojiName.charCodeAt(i);
        }

        if (emojiCoolnes >= threshold) {
            coolEmojies.push(emoji);
        }
    }

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${countEmojies} emojis found in the text. The cool ones are:`);
    for (let emoji of coolEmojies) {
        console.log(emoji);
    }
}