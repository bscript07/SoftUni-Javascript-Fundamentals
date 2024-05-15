function chessBoard(numberArg) {
    let chessBoard = '<div class="chessboard">\n';

    for (let i = 0; i < numberArg; i++) {
        chessBoard += ' <div>\n';

        for (let j = 0; j < numberArg; j++) {
            if ((i + j) % 2  === 0) {
                chessBoard += '<span class="black"></span>\n';
            } else {
                chessBoard += '<span class="white"></span>\n';
            }
        }
        chessBoard += ' </div>\n';
    }
    chessBoard += '</div>';
    return chessBoard;
}