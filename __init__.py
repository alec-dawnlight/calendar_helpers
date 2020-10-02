from flask import Flask, jsonify
from faker import Faker
import random
import datetime

Faker.seed(0)
random.seed(0)
fake = Faker()
app = Flask(__name__)


def generate_events(fake):
    data = []
    
    for _ in range(random.randint(0, 5)):
        start = datetime.datetime.strptime(fake.time(), "%H:%M:%S")
        hrs = start.hour
        mins = start.minute
        secs = start.second
        time_delta = datetime.timedelta(
            weeks=0,
            days=0,
            hours=(24-hrs)*random.random(),
            minutes=(60-mins)*random.random(),
            seconds=(60-secs)*random.random())
        print(time_delta)
        data.append({
            'title': ' '.join(fake.words(4)).capitalize(),
            'start': start.strftime("%H:%M:%S"),
            'end': (start + time_delta).strftime("%H:%M:%S")
        })

    return data

@app.route('/api/time')
def t():
    now = datetime.datetime.now()
    return {'now': now}


@app.route('/api/get_events/')
def get_events():

    return jsonify({'data': generate_events(fake)})