const readableDigits = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
const readableDozens = ['','','twen','thir','fo','fif','six','seven','eigh','nine'];

module.exports = function toReadable (number) {
      
    let hundreds = parseInt(number / 100);
    let dozens = parseInt((number - hundreds * 100) / 10);
    let digits = number - hundreds * 100 - dozens * 10;
    let readableNumber = '';
    if (hundreds > 0) {
        readableNumber += readableDigits[hundreds] + ' hundred ';
    }
    if (dozens > 1) {
        if (dozens == 4) {
            readableNumber += readableDozens[dozens] + 'rty';
        } else {
        readableNumber += readableDozens[dozens] + 'ty';
        }
    }
    if (dozens == 1 & digits > 2) {
        if (digits == 4) {
            readableNumber += readableDozens[digits] + 'urteen';
        } else {
        readableNumber += readableDozens[digits] + 'teen';
        }
    }
    if (digits > 0 && (dozens > 1) || dozens == 0) {
        if (dozens > 1) {
            readableNumber += ' ' + readableDigits[digits];
        } else {
            readableNumber += readableDigits[digits];
        }
    }
    if (digits >= 0 && digits < 3 && dozens == 1) {
        readableNumber +=  readableDigits[dozens * 10 + digits];
    }

    
    if (number == 0) {
        return ('zero');
    } else
        return readableNumber.trim();

    }
