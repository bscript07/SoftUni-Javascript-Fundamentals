function songs(input) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let arr = [];
    let numSongs = input.shift();
    let typeSong = input.pop();

    for (let i = 0; i < numSongs; i++) {
        let [type, name, time] = input[i].split('_');
        let song = new Song(type, name, time);
        arr.push(song);
    }

    if (typeSong === 'all') {
        arr.forEach((i) => console.log(i.name));
    } else {
        let filter = arr.filter((i) => i.type === typeSong);
        filter.forEach((i) => console.log(i.name));
    }
}