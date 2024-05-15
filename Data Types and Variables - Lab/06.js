function gramophone(band,album,song) {
    let sumTime = (album.length * band.length) * song.length / 2;

    let rotation = Math.ceil(sumTime / 2.5);
    console.log(`The plate was rotated ${rotation} times.`);
}