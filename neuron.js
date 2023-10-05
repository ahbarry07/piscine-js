function neuron(data) {
    
    const result = {};
  
    for (const item of data) {
     
      const [questionPart, responsePart] = item.split(' - Response: ');
      const [category, label] = questionPart.split(': ');
  
      const normalizedLabel = label.toLowerCase().replace(/\s+/g, '_');
  
      const questionOrOrderData = {
        [category.toLowerCase()]: category,
        [normalizedLabel]: {
          [category.toLowerCase()]: label,
          responses: [responsePart.trim()]
        }
      };
      if (!result[category.toLowerCase()]) {
        result[category.toLowerCase()] = {};
      }
  
      Object.assign(result[category.toLowerCase()], questionOrOrderData);
    }
  
    return result;
}