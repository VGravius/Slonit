function processString(input, maxLength) {
    function capitalize(str) {
        if (str.length === 0) return str;
        return str[0].toUpperCase() + str.slice(1);
    }
    function truncate(str, length) {
        if (str.length <= length) return str;
        const truncated = str.slice(0, length);
        const lastSpaceIndex = Math.max(truncated.lastIndexOf(' '), truncated.lastIndexOf(','),
                                        truncated.lastIndexOf('.'), truncated.lastIndexOf('!'),
                                        truncated.lastIndexOf('?'), truncated.lastIndexOf(':'),
                                        truncated.lastIndexOf(';')
                                    );
        if (lastSpaceIndex !== -1) {
            return str.slice(0, lastSpaceIndex) + '...';
        }
        return truncated + '...';
    }
    function isSubstring(str1, str2) {
        return str1.includes(str2) || str2.includes(str1);
    }
    const capitalized = capitalize(input);
    const truncated = truncate(input, maxLength);
    return {
        capitalized: capitalized, truncated: truncated, isSubstring: function(str) {
            return isSubstring(input, str);
        }
    };
}
const result = processString("это пример строки, которая слишком длинная для отображения.", 40);
console.log(result.capitalized); // "Это пример строки, которая слишком длинная для отображения."
console.log(result.truncated); // "Это пример строки, которая..."
console.log(result.isSubstring("пример")); // true
console.log(result.isSubstring("другая строка")); // false
