module.exports = function check(str, bracketsConfig) {
  let object = {};
  for (PairedBrackets of bracketsConfig) { object[PairedBrackets[1]] = PairedBrackets[0]};
  let BrClose = Object.keys(object);
  return str.split('').reduce((stack, brace) => {
    BrClose.includes(brace) && stack[stack.length - 1] === object[brace] ? stack.pop() : stack.push(brace);
    return stack;
  }, []).length === 0;
}
