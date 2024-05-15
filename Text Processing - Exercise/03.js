function extractFile(path) {
    const directories = path.split('\\');
    const file = directories.pop();
    const comma = file.lastIndexOf('.');

    const fileName = file.substring(0, comma);
    const extension = file.substring(comma + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}