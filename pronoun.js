const regexp1 = /^i$/;
const regexp2 = /^you$/;
const regexp3 = /^he$/;
const regexp4 = /^she$/;
const regexp5 = /^it$/;
const regexp6 = /^we$/;
const regexp7 = /^they$/;

function pronoun(str) {
    const word = str.split(" ");
    let obj = {}
    let count = 0
    for (let i = 0; i < word.length; i++) {
        if (
            regexp1.test(word[i]) ||
            regexp2.test(word[i]) ||
            regexp3.test(word[i]) ||
            regexp4.test(word[i]) ||
            regexp5.test(word[i]) ||
            regexp6.test(word[i]) ||
            regexp7.test(word[i])
        ) {
            obj[word[i]] = {}
            if (word[i] !== undefined) {
                obj[word[i]].word = []
                obj[word[i]].word.push(word[i + 1])
                count++;
                obj[word[i]].count = count
            }
        }
    }
    return obj
}

