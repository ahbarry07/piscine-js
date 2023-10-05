const regexp1 = /^i$/;
const regexp2 = /^you$/;
const regexp3 = /^he$/;
const regexp4 = /^she$/;
const regexp5 = /^it$/;
const regexp6 = /^we$/;
const regexp7 = /^they$/;

function pronoun(str) {
    let [obj, count1, count2,count3,count4,count5,count6, count7, word1, word2, word3, word4, word5, word6, word7] = [{}, 0,0,0,0,0,0,0,[],[],[],[],[],[],[]]
    const split = str.split(" ");
    for (let i = 0; i < split.length; i++) {
        if (regexp1.test(split[i])) {
            obj[split[i]] = {};
            if (split[i] !== undefined) {
                word1.push(split[i+1])
                obj[split[i]].word = word1
                count1++;
                obj[split[i]].count = count1;
            }
        } else if (regexp2.test(split[i])) {
            obj[split[i]] = {};
            if (split[i] !== undefined) {
                word2.push(split[i])
                obj[split[i]].word = word2
                count2++;
                obj[split[i]].count = count2;
            }
        } else if (regexp3.test(split[i])) {
            obj[split[i]] = {};
            
            if (split[i] !== undefined) {
                word3.push(split[i+1])
                obj[split[i]].word = word3
                count3++;
                obj[split[i]].count = count3;
            }
        } else if (regexp4.test(split[i])) {
            obj[split[i]] = {};
            if (split[i] !== undefined) {
                word4.push(split[i+1])
                obj[split[i]].word = word4
                count4++;
                obj[split[i]].count = count4;
            }
        } else if (regexp5.test(split[i])) {
            obj[split[i]] = {};
            if (split[i+1] !== undefined) {
                word5.push(split[i+1])
                obj[split[i]].word = word5
                count5++;
                obj[split[i]].count = count5;
            }
        } else if (regexp6.test(split[i])) {
            obj[split[i]] = {};
            if (split[i] !== undefined) {
                word6.push(split[i+1])
                obj[split[i]].word = word6
                count6++;
                obj[split[i]].count = count6;
            }
        } else if (regexp7.test(split[i])) {
            obj[split[i]] = {};
            if (split[i] !== undefined) {
                word7.push(split[i+1])
                obj[split[i]].word = word7
                count7++;
                obj[split[i]].count = count7;
            }
        }
        
    }
    return obj
}