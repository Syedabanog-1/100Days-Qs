function fav_hobbies(hobby, desc, place, Tdetail) {
    if (hobby === void 0) { hobby = 'gardening:'; }
    if (desc === void 0) { desc = 'watering'; }
    if (place === void 0) { place = 'own home garden'; }
    if (Tdetail === void 0) { Tdetail = '2mor-eve'; }
    return console.log("\tHobby: ".concat(hobby, ", \n\tdescription: ").concat(desc, ", \n\tPlace: ").concat(place, " \n\tTime Detail: ").concat(Tdetail));
}
;
// call the function
fav_hobbies();
//call funtion for size medium
fav_hobbies("Swimming");
// call function for small size
fav_hobbies('Travelling', 'when get free', 'anywhere i liuke', 'in my spare timeon  weekend');
