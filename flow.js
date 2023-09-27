
function flow(funcs) {
    return function (...args) {
      let result = args;
      for (const func of funcs) {
        if (Array.isArray(result))  result = func(...result);
       
        if (result < 0) {
          return 0;
        }
      }
      return result;
    };
  }