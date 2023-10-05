function neuron(data) {
   
    const mutatedData = {
      questions: {},
      orders: {}
    };
  
    for (const line of data) {
      
      const [questionOrOrder, response] = line.split(": ");
  
      if (questionOrOrder.startsWith("Questions: ")) {
        const question = questionOrOrder.substring("Questions: ".length);
  
        if (mutatedData.questions[question]) {
          mutatedData.questions[question].responses.push(response);
        } else {
          mutatedData.questions[question] = {
            question,
            responses: [response]
          };
        }
      }
  
      else if (questionOrOrder.startsWith("Orders: ")) {
        const order = questionOrOrder.substring("Orders: ".length);
  
        if (mutatedData.orders[order]) {
          mutatedData.orders[order].responses.push(response);
        } else {
          mutatedData.orders[order] = {
            order,
            responses: [response]
          };
        }
      }
    }
  
    return mutatedData;
  }