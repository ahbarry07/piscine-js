
function flow(funcs) {
    return function (...args) {
      let result = args;
      for (const func of funcs) {
        result = func(...result);
  
        if (result < 0) {
          return 0;
        }
      }
      return result;
    };
  }