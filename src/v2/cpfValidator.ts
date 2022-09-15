const removeSpecialCharacters = (cpf: string) : string => {
    return cpf.replace('.','').replace('.','').replace('-','').replace(" ","");
};

const hasSameCharacters = (cpf) : boolean => {
    return !cpf.split("").every(c => c === cpf[0]);
};

const calculateDigits = (cpf) : string => {
    let     digitSum, digitSum2;
    let     calculatedDigit1, calculatedDigit2, rest;
    let     incrementNumber;
    digitSum = digitSum2 = 0;
    calculatedDigit1 = calculatedDigit2 = rest = 0;

    for (let nCount = 1; nCount < cpf.length -1; nCount++) {
        incrementNumber = parseInt(cpf.substring(nCount -1, nCount));
        digitSum = digitSum + ( 11 - nCount ) * incrementNumber;

        digitSum2 = digitSum2 + ( 12 - nCount ) * incrementNumber;
    };

    rest = (digitSum % 11);

    calculatedDigit1 = (rest < 2) ? calculatedDigit1 = 0 : 11 - rest;
    digitSum2 += 2 * calculatedDigit1;
    rest = (digitSum2 % 11);
    if (rest < 2)
        calculatedDigit2 = 0;
    else
        calculatedDigit2 = 11 - rest;

    return calculatedDigit1 + "" + calculatedDigit2;
};

export const validateCpf = (cpf: string) : boolean => {
    if (!cpf) return false;
    if (cpf.length < 11 || cpf.length > 14) return false;

    cpf = removeSpecialCharacters(cpf);
    if (!hasSameCharacters(cpf)) return false;

    let lastDigits = cpf.substring(cpf.length-2, cpf.length);

    const calculatedDigits = calculateDigits(cpf);

    return lastDigits == calculatedDigits;
}