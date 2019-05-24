module.exports = function converter(list, dic) {
    if (!dic)
        throw new Error("invalid dic")

    return list.map(item => {
        const converted = {};

        Object.keys(item).forEach(x => {
            converted[dic[x]] = item[x]
        })

        return converted;
    });
}