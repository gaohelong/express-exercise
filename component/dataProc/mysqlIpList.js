const listProc = (list) => {
    let res = [];

    list.forEach((v, k, arr) => {
        res.push(v.id);
    });

    return res;
};

module.exports = {
    listProc
};
