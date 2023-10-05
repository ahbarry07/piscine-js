const regexp1 = /^i$/;
const regexp2 = /^you$/;
const regexp3 = /^he$/;
const regexp4 = /^she$/;
const regexp5 = /^it$/;
const regexp6 = /^we$/;
const regexp7 = /^they$/;

function findNextWord(word) {
    const pronouns = /^(i|you|he|she|it|they|we)$/i;
    if (pronouns.test(word)) {
        return ;
    } else {
        return word.replace(/,/, "");
    }
    
}

function pronoun(str) {
    let [obj, count1, count2, count3, count4, count5, count6, count7, word1, word2, word3, word4, word5, word6, word7] = [{}, 0, 0, 0, 0, 0, 0, 0, [], [], [], [], [], [], []]
    const split = str.split("\n").join(' ').split(' ');
    for (let i = 0; i < split.length; i++) {
        if (regexp1.test(split[i].toLowerCase().toLowerCase())) {
            obj[split[i].toLowerCase()] = {};
            if (split[i+1] !== undefined) {
                let check = findNextWord(split[i+1].toLowerCase())
                if (check !== undefined){
                    word1.push(check)
                }
            }
            obj[split[i].toLowerCase()].word = word1
            count1++;
            obj[split[i].toLowerCase()].count = count1;
        } else if (regexp2.test(split[i].toLowerCase().toLowerCase())) {
            obj[split[i].toLowerCase()] = {};
            if (split[i+1] !== undefined) {
                let check = findNextWord(split[i+1].toLowerCase())
                if (check !== undefined){
                    word2.push(check)
                }
            }
            obj[split[i].toLowerCase()].word = word2
            count2++;
            obj[split[i].toLowerCase()].count = count2;
        } else if (regexp3.test(split[i].toLowerCase().toLowerCase())) {
            obj[split[i].toLowerCase()] = {};
            if (split[i+1] !== undefined) {
                let check = findNextWord(split[i+1].toLowerCase())
                if (check !== undefined){  
                    word3.push(check)
                }
            }
            obj[split[i].toLowerCase()].word = word3
            count3++;
            obj[split[i].toLowerCase()].count = count3;
        } else if (regexp4.test(split[i].toLowerCase().toLowerCase())) {
            obj[split[i].toLowerCase()] = {};
            if (split[i+1] !== undefined) {
                let check = findNextWord(split[i+1].toLowerCase())
                if (check !== undefined){
                    word4.push(check)
                }
            }
            obj[split[i].toLowerCase()].word = word4
            count4++;
            obj[split[i].toLowerCase()].count = count4;
        } else if (regexp5.test(split[i].toLowerCase().toLowerCase())) {
            obj[split[i].toLowerCase()] = {};
            if (split[i + 1] !== undefined) {
                let check = findNextWord(split[i+1].toLowerCase())
                if (check !== undefined){
                    word5.push(check)
                }
            }
            obj[split[i].toLowerCase()].word = word5
            count5++;
            obj[split[i].toLowerCase()].count = count5;
        } else if (regexp6.test(split[i].toLowerCase().toLowerCase())) {
            obj[split[i].toLowerCase()] = {};
            if (split[i+1] !== undefined) {
                let check = findNextWord(split[i+1].toLowerCase())
                if (check !== undefined){
                    word6.push(check)     
                }
            }
            obj[split[i].toLowerCase()].word = word6
            count6++;
            obj[split[i].toLowerCase()].count = count6;
        } else if (regexp7.test(split[i].toLowerCase().toLowerCase())) {
            obj[split[i].toLowerCase()] = {};
            if (split[i+1] !== undefined) {
                let check = findNextWord(split[i+1].toLowerCase())
                if (check !== undefined){
                    word7.push(check)
                }
            }
            obj[split[i].toLowerCase()].word = word7
            count7++;
            obj[split[i].toLowerCase()].count = count7;
        }

    }
    return obj
}

