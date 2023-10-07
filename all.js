
async function all(objs) {
    var res = {};
    for (let key in objs) {
        res[key] = await objs[key];
    }
    return res;
}