import numRef from './ref.json'

const numberWord = () => {
  const numToWord = (num) => {
    let returnValue = _.reduce(numRef, (accum, ref) => {
      return ref.num === num ? ref.word : accum
    }, '')
    return returnValue === '' ? '请输入0-10中的某个整数' : returnValue
  }

  const wordToNum = (word) => {
    let resultValue = _.reduce(numRef, (accum, ref) => {
      return ref.word === word || word.toLowerCase() === ref.word.toLowerCase() ? ref.num : accum
    }, -1)
    return resultValue === -1 ? '请输入0-10中正确的单词...' : resultValue
  }

  return {
    numToWord,
    wordToNum
  }

}

export default numberWord()