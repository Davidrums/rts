var s = {"col": false,"row": false};
$('td').mousedown(function(event) {
    switch (event.which) {
        case 1:
            if (window.grid[getRow(this)][getCol(this)].type.selectAble == true) {
                select(this);
            }else{
                deselect();
            }

            break;
        case 2:
            //alert('Middle Mouse button pressed.');
            break;
        case 3:
            event.preventDefault();
            return false;
            break;
        default:
            alert('You have a strange Mouse!');
    }
});

var last_sel = {"row":0,"col":0};
function select (element) {
    // set old select to false
    var col = getCol(element);
    var row = getRow(element);
    if (grid[row][col] == grid[window.s.col][window.s.row]) {
        deselect();
        return true;
    };
    window.grid[last_sel.row][last_sel.col].selected = false;

    //get clicked on.


    //execute it all
    console.log(col+":"+row)
    window.grid[row][col].selected = true;
    window.s.row = row;
    window.s.col = col;
    last_sel.col = col;
    last_sel.row = row;
    update(window.grid);
}

function deselect () {
    window.grid[window.s.row][window.s.col]= false;
    update(window.grid);
}