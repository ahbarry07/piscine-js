function neuron(arr) {
    // Créez un objet vide pour stocker les résultats
    const result = { questions: {}, orders: {} };
  
    // Parcourez le tableau d'entrée
    for (let i = 0; i < arr.length; i++) {
      const [category, rest] = arr[i].split(': ');
      const [statement, response] = rest.split(' - Response: ');
  
      // Normalisez les clés
      const categoryKey = category.toLowerCase().replace(':', '').trim();
      const statementKey = statement.toLowerCase().replace('?', '').replace('!', '').trim().replace(/ /g, '_');
  
      // Créez l'objet pour la catégorie si elle n'existe pas
      if (!result[categoryKey]) {
        result[categoryKey] = {};
      }
  
      // Ajoutez la déclaration et la réponse
      result[categoryKey][statementKey] = { [categoryKey]: statement, responses: [response] };
    }
  
    return result;
  }