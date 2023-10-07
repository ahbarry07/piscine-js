
async function queryServers(serverName, q){

    let path1 = `/${serverName}?q=${q}`
    let path2 = `/${serverName}_backup?q=${q}`
    return Promise.race([getJSON(path1), getJSON(path2)])
}

async function gougleSearch(q){
    let timeout = new Promise((resolve) =>
        setTimeout(resolve, 80, Error('timeout'))
    );
    let web = queryServers('web', q),
    image = queryServers('image', q),
    video = queryServers('video', q);

    const res = await Promise.race([timeout, Promise.all([web, image, video])]);
    if (res instanceof Error) {
        throw res;
    }
    return { image: res[1], video: res[2], web: res[0] };
}
