function httpGet(url){
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("Get", url, false);
    xmlHttp.send();
    return xmlHttp.responseText
}

time_req = httpGet("http://localhost:5000/api/time")
date = new Date(JSON.parse(req)['now'])

events_req = httpGet("http://localhost:5000/api/get_events/")
