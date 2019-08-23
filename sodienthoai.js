function phonenumber(number) {
    let regex = /^[0-9]{11,}$/;
    if (regex.test(number)){
        return "số điện thoại đúng:" + number;
    } else {
        return "số điện thoại sai :" + number;
    }

}
let testphonnumber = "09848474584";
document.write(phonenumber(testphonnumber));