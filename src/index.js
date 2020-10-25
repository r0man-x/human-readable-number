module.exports = function toReadable (number) {
    if(number === 0)
    return 'zero'

  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  let vocabulary = {
    "one": 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen':16,
    'seventeen':17,
    'eighteen':18,
    'nineteen':19,
    'twenty':20,
    'thirty':30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90,
  }

  let hundreds = Math.floor(number/100)
  let tens = Math.floor((number - hundreds * 100)/10)
  let ones = Math.floor(number - hundreds * 100 - tens*10)
  //if number between 11 and 19 - we will have special word structure
  let shouldTensHaveIndividualWord = tens*10+ones < 20 && tens*10+ones > 9 
  
  let hundredsString = hundreds > 0 ? `${getKeyByValue(vocabulary,hundreds)} hundred` : ""
  let tensString = tens > 0 ? `${getKeyByValue(vocabulary,shouldTensHaveIndividualWord ? tens*10+ones : tens*10)}` : ''
  let onesString = ones > 0 && !shouldTensHaveIndividualWord ? `${getKeyByValue(vocabulary,ones)}` : ''

  return [hundredsString, tensString, onesString].filter(i => i.length > 0).join(" ") 
  
}
