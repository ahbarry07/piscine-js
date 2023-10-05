function neuron(arr) {
    const result = { questions: {}, orders: {}, affirmations: {} };
  
    for (let i = 0; i < arr.length; i++) {
      const parts = arr[i].split(' - ');
      const category = parts[0].toLowerCase();
      const [statement, response] = parseStatementResponse(parts[1]);

      const categoryKey = category.replace(':', '').trim();
  
      const statementKey = statement.replace('?', '').replace('!', '').trim().toLowerCase();
  
      if (category.startsWith('questions:')) {
        if (!result.questions[statementKey]) {
          result.questions[statementKey] = { question: statement, responses: [] };
        }
        result.questions[statementKey].responses.push(response);
      } else if (category.startsWith('orders:')) {
        if (!result.orders[statementKey]) {
          result.orders[statementKey] = { order: statement, responses: [] };
        }
        result.orders[statementKey].responses.push(response);
      } else if (category.startsWith('affirmations:')) {
        if (!result.affirmations[statementKey]) {
          result.affirmations[statementKey] = { affirmation: statement, responses: [] };
        }
        result.affirmations[statementKey].responses.push(response);
      }
    }
  
    return result;
  }
  
  function parseStatementResponse(str) {
    const [statement, response] = str.split(' - ');
    return [statement.trim(), response.trim()];
  }