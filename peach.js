function generateID(a, g) {
    let id = a + g + parseInt(Math.random() * 10)
                    + parseInt(Math.random() * 10)
                    + parseInt(Math.random() * 10)
                    + parseInt(Math.random() * 10)
                    + parseInt(Math.random() * 10)
                    + parseInt(Math.random() * 10)
                    + parseInt(Math.random() * 10);

    for (let endNum = 0; endNum <= 9; endNum++){
        checkId = id + endNum;
        console.log(checkId);
        if(checkTWID(checkId)){
            let bid = document.getElementById("bid").value = checkId;
            break;
        }
    }
}

function checkTWID(checkId){
    let id = checkId;
    let ret = false;
    let regex = /^[A-Z][12][0-9]{8}$/; // "/ /"為正規表示法 ; {8}意思是[0-9]乘於8次 ; $結尾
    let letters = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
    if(id.match(regex)!= null){
        let c1 = id.charAt(0);
        let n12 = letters.indexOf(c1) + 10;
        let n1 = parseInt(n12 / 10);
        let n2 = n12 % 10;
        let n3 = parseInt(id.substr(1,1));
        let n4 = parseInt(id.substr(2,1));
        let n5 = parseInt(id.substr(3,1));
        let n6 = parseInt(id.substr(4,1));
        let n7 = parseInt(id.substr(5,1));
        let n8 = parseInt(id.substr(6,1));
        let n9 = parseInt(id.substr(7,1));
        let n10 = parseInt(id.substr(8,1));
        let n11 = parseInt(id.substr(9,1));
        let sum = n1 * 1 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2 + n10 * 1 + n11 * 1;
        ret = sum % 10 == 0;
    }
    return ret;
}

function createTWID(){
    let letters = "ABCDEFGHI";
    let a = letters.charAt(parseInt(Math.random()*8));
    let g = parseInt(Math.random() * 2 + 1);
    generateID(a, g);
}

// 只選地區
function createTWIDByArea(area){
    let a = document.getElementById("selectArea").value;
    let g = parseInt(Math.random() * 2 + 1);
    generateID(a, g);
}

// 只選性別
function createTWIDByGender(gender){
    let letters = "ABCDEFGHI";
    let a = letters.charAt(parseInt(Math.random()*8));
    let g;
    let radios = document.getElementsByName('genderGroup');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            g = radios[i].value;
            break;
        }
    }
    generateID(a, g);
}

// 都選
function createTWIDByAll(area, gender){
    let a = document.getElementById("selectArea").value;
    let g;
    let radios = document.getElementsByName('genderGroup');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            g = radios[i].value;
            break;
        }
    }
    generateID(a, g);
}