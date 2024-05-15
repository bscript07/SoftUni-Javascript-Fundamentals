function matchPhoneNumbers(phoneNumbers) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

    let text = phoneNumbers.shift();
    let result = text.match(pattern);

    console.log(result.join(', '));
}