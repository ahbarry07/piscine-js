function flow(funcs) {
    return function (...args) {
      let result = [args]; // Toujours traiter le résultat comme un tableau
      for (const func of funcs) {
        result = result.map((arr) => func(...arr));
      }
      return result[0]; // Renvoyer le premier (et seul) élément du tableau
    };
  }
  