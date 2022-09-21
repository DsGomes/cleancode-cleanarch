const removeSpecialCharacters = (cpf: string) : string => {
    return cpf.replace('.','').replace('.','').replace('-','').replace(" ","");
};

const hasCpfLength = (cpf) : boolean => {
    return cpf.length == 11;
}

const hasSameCharacters = (cpf) : boolean => {
    return !cpf.split("").every(c => c === cpf[0]);
};

const calculateDigits = (cpf, factor) : number => {
    let digitSum = 0;

    for(const digit of cpf)
        if (factor > 1) digitSum += digit * factor--;

    const rest = (digitSum % 11);
    return (rest < 2) ? 0 : 11 - rest;
};

export const validateCpf = (cpf: string) : boolean => {
    if (!cpf) return false;
    cpf = removeSpecialCharacters(cpf);
    if (!hasCpfLength(cpf)) return false;
    if (!hasSameCharacters(cpf)) return false;

    const calculatedDigit1 = calculateDigits(cpf, 10);
    const calculatedDigit2 = calculateDigits(cpf, 11);

    let lastDigits = cpf.substring(cpf.length-2, cpf.length);
    return lastDigits == `${calculatedDigit1}${calculatedDigit2}`;
}