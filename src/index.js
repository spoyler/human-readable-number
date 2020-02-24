
const StringNumber = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
     'ten',
     'eleven',
     'twelve',
     'thirteen',
     'fourteen',
     'fifteen',
     'sixteen',
     'seventeen',
     'eighteen',
     'nineteen'
]

const StringDec = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
]

function GetHundres(number) 
{
    let hundred = Math.floor(number / 100);
    if (hundred > 0)
        return StringNumber[hundred] + ' hundred'; 
    
    return '';
}

function GetDec(number)
{
    if (number == 0)
        return StringNumber[number];

    if (number - Math.floor(number / 100)*100 == 0)
        return '';
    
    let res = '';

    if (number > 100)
        res += ' ';
    
    let dec = number % 100;

    if (dec < 20){
        res += StringNumber[dec];
        return res;
    }

    let big_dec = Math.floor(dec / 10).toFixed();

    res += StringDec[big_dec - 2];
    let ed = dec - big_dec * 10;
    if (ed)
    {
        res += ' ';
        res += StringNumber[ed];
    }
    return res;
}

module.exports = function toReadable (number) {
    let res = GetHundres(number);
    res += GetDec(number); 
    return res;
}
