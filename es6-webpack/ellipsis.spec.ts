import { assert } from "chai";
import { replaceLastWord, ellipsis } from "./ellipsis";

describe ('ellipsis test suite.', () => {
  it('replace last word should okay', () => {
    const result = replaceLastWord('...', 'This is a very long word.');
    assert.equal(result, 'This is a very long...')
    const result1 = replaceLastWord('...', result);
    assert.equal(result1, 'This is a very...')
    const result2 = replaceLastWord('...', result1);
    assert.equal(result2, 'This is a...')
  });

  it ('test ellipsis function works okay', () => {
    const result = ellipsis('This is a very long word. This is a very long word. This is a very long word.', 20)
    assert.equal(result, 'This is a very...')
  });
});