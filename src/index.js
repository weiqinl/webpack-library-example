import numRef from './ref.json'
import packageConfig from '../package.json'
const numberWord = () => {
  // 数字转单词
  const numToWord = (num) => {
    let returnValue = _.reduce(numRef, (accum, ref) => {
      return ref.num === num ? ref.word : accum
    }, '')
    return returnValue === '' ? '请输入0-10中的某个整数' : returnValue
  }
  // 单词转数字
  const wordToNum = (word) => {
    let resultValue = _.reduce(numRef, (accum, ref) => {
      return ref.word === word || word.toLowerCase() === ref.word.toLowerCase() ? ref.num : accum
    }, -1)
    return resultValue === -1 ? '请输入0-10中正确的单词...' : resultValue
  }

  return {
    version: packageConfig.version, // 版本号
    numToWord,
    wordToNum
  }

}

export default numberWord()