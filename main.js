let to_19 = [
    "zero", "un", "deux", "trois", "quatre", "cinq", "six",
    "sept", "huit", "neuf", "dix", "onze", "douze", "treize",
    "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf" 
];

let tens = [
    "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt","quatre-vingt-dix"
];
let denom = [ "","mille", "million" ];

let septen =['', 'soixante et onze','soixante-douze', 'soixante-treize', 'soixante-quatorze', 'soixante-quinze', 'soixante-seize'];
let neuten = ['','quatre-vingt-onze','quatre-vingt-douze','quatre-vingt-treize','quatre-vingt-quatorze', 'quatre-vingt-quinze', 'quatre-vingt-seize'];
// convert a value < 100 to French.
function convert_nn(val) {
    if (val < 20)
    return to_19[val];
    /*if (val > 70 && val < 77)
    return septen[val];
    if (val > 90 && val < 97)
    return neuten[val];
    */
    if(val == 100)
    return "cent";

    for (v = 0; v < tens.length; v++) {
        dcap = tens[v];
        dval = 20 + 10 * v;

       // console.log('dcap: '+ dcap +' et dval : '+dval )

        if (dval + 10 > val) {

            if (val%10 != 0){
                if (val > 70 && val < 77){
                    return  dcap = septen[val%10];
    
                }else if(val > 90 && val < 97) {
                    return dcap = neuten[val%10];
                }
                return dcap + " " + to_19[val%10];
                
            }   
            return dcap; 
        }
    }
    return "Should never get here, less than 100 failure";
}
// convert a value < 1000 to french, special cased because it is the level that kicks
// off the < 100 special case. The rest are more general. This also allows you to
// get strings in the form of "forty-five hundred" if called directly.
function convert_nnn( val) {
    word = "";
    rem = val / 100;
    mod = val%100;
    if (rem > 0) {
        if (rem > 1)
            word = to_19[rem] + " cent";
        else
            word = "cent";
        if (mod > 0) {
            word += " "; 
        }
        else
        word += "s";
    }
    if (mod > 0) {
        word += convert_nn(mod);
    }
    return word;
}

console.log(convert_nnn(7120));