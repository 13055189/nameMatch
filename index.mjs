const nameList = [
    'Huawen Wu 华文吴',
    'David Smith 大卫 斯密斯',
    'Yueling Zhang 月林张',
    'Annie Lee 李安妮'
];

export const handler = async (event) => {
    const userInput = event.queryStringParameters?.name || '';
    const matchedName = findBestMatch(userInput, nameList);
    return {
        statusCode: 200,
        body: JSON.stringify({ match: matchedName })
    };
};

const findBestMatch = (input, names) => {
    const normalizedInput = normalize(input);
    return names.find(name => {
        const normalizedName = normalize(name);
        return isMatch(normalizedInput, normalizedName);
    }) || 'No match found';
};

const normalize = (name) => {
    return name.toLowerCase()
               .replace(/\s+/g, '')
               .normalize('NFKD')
               .replace(/[\u0300-\u036F]/g, '');
};

const isMatch = (input, name) => {
    // Handle non-Chinese and Chinese names
    return containsAllCharacters(input, name) || containsAllCharacters(name, input);
};

const containsAllCharacters = (input, target) => {
    for (let char of input) {
        if (!target.includes(char)) {
            return false;
        }
    }
    return true;
};

export { handler as main };
