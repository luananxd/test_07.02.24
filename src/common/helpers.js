export const getCoinsDescription = (quantity) => {
  if (quantity % 10 === 1) {
    return 'монета'
  }
  
  if (quantity % 10 > 1 && quantity % 10 < 5) {
    return 'монеты'
  }
  return 'монет'
}

export const getComponentDescription = (componentId, quantity) => {
  switch(componentId) {
    case '1':
      if (quantity % 10 === 1) {
        return 'биорука';
      }
      
      if (quantity % 10 > 1 && quantity % 10 < 5) {
        return 'биоруки';
      }

      return 'биорук';

    case '2':
      if (quantity % 10 === 1) {
        return 'микрочип'
      }
      
      if (quantity % 10 > 1 && quantity % 10 < 5) {
        return 'микрочипа'
      }
      return 'микрочипов'

    
    case '3':
    if (quantity % 10 === 1) {
      return 'души'
    }
    
    if (quantity % 10 > 1 && quantity % 10 < 5) {
      return 'души'
    }

    return 'душ'
  }
}
