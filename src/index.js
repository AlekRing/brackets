module.exports = function check(str, bracketsConfig) {
  let matchBr
  let stack = []

  if (str.length % 2 != 0) return false
  let opBr = []
  let closBr = []
  for (let i = 0; i < bracketsConfig.length; i++) {
    opBr[i] = bracketsConfig[i][0]
    closBr[i] = bracketsConfig[i][1]
  }
  
  for (let i = 0; i < str.length; i++) {
    if (i == 0) stack.push(str[i])
    else if (closBr.indexOf(str[i]) > -1) {
      matchBr = opBr[closBr.indexOf(str[i])]
      if (stack.length == 0 || (stack.pop() != matchBr)) {
        return false
      }
    } else {
      stack.push(str[i])
    }
  }
  return (stack.length == 0)
}
