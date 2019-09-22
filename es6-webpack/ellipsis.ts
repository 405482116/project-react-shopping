export function replaceLastWord(rpl:string, str:string) {
  const regx = /\s*\w+(\W+)?$/g
  return str.replace(regx, rpl)
}

export function ellipsis(str:string, max: number): string {
  let s = str;
  // Here change to dom height logic.
  if (s.length > max) {
    if (s.length > max + 10) {
      // Here change to height rate mutiply string length.
      const rate = 0.256 // const rate = height/clientHeight
      const i = Math.floor(rate * s.length)
      console.log(i)
      s = s.substring(0, i)
    }
    s = replaceLastWord('...', s)
    return ellipsis(s, max)
  } else {
    return s
  }
}