module.exports = function converter(list, dic) {
    if (!dic) throw new Error('invalid dic');
  
    return list.map(item => {
      const converted = {};
      Object.keys(item).forEach(x => {
        if (!dic[x]) return;
  
        if (typeof dic[x] === 'string') {
          converted[dic[x]] = item[x];
          return;
        }
  
        if (Object.prototype.toString.call(dic[x]) === '[object Array]') {
          dic[x].map(y => {
            const { name, parser } = y;
  
            converted[name] = parser(item[x], item);
          });
  
          return;
        }
  
        const { name, parser } = dic[x];
  
        converted[name] = parser(item[x], item);
      });
      return converted;
    });
  };
  