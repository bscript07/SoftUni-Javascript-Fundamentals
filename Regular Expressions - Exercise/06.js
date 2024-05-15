function extractEmails(text) {
    const regex = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([a-zA-Z0-9]+)(@)([a-zA-Z0-9]+([\.\-][a-zA-Z0-9]+)+))(\b|(?=\s))/g;
    const emails = text.match(regex);

    return emails.join('\n');
}