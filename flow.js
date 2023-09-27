
function flow(funcs) {
    return function (...args) {
      let result = args;
      for (const func of funcs) {
        if (Array.isArray(result)) {
          result = result.map((item) => func(item));
        } else {
          result = func(result);
        }
      }
      return result;
    };
  }
  
  
  
  
  
  