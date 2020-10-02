function httpGet(url){
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("Get", url, false);
    xmlHttp.send();
    return xmlHttp.responseText
}

// time_req = httpGet("http://localhost:5000/api/time")
// date = new Date(JSON.parse(time_req)['now'])

// events_req = httpGet("http://localhost:5000/api/get_events/")
events = JSON.parse(events_req)['data']

const days_in_month = {
    0: 31,
    1: 28,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31,
};

const month_names = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
};

const days_of_week = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
};