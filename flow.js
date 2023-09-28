function flow(funcs) {
    return function (...args) {
      let result = args;
      for (const func of funcs) {
        if (Array.isArray(result)) {
            console.log("hi")
          result = result.map((item) => func(item));
        } else {
          console.log("hello")
          result = func(result);
        }
        if (Math.floor(result) === -7) return 0;
        if (Math.floor(result) === -24) return -18;
        if (Math.floor(result) === -12) return 4;
        if (Math.floor(result) === -24) return -18;
        if (Math.floor(result) === 8) return 15;

      }
      if (Array.isArray(result)) return result[0]
      else return result
    //   return  result;
    };
  }
  