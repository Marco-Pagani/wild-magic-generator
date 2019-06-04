const table = {
    OLD:        '1.2',
    NEW:        '2.0',
    USERSUB:    'user'
}

function toggleTable(tbl) {
    switch (tbl) {
        case table.OLD:
                document.getElementById("odometer")
        case table.NEW:
                document.getElementById("odometer")
        case table.USERSUB:
                document.getElementById("odometer")
    }
}

function generateMagic() {

    var index = Math.floor(Math.random() * 10000);
    document.getElementById("odometer").innerHTML = index;
}