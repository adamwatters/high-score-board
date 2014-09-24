from flask import Flask, render_template, url_for, request, jsonify
from json import dumps

app = Flask(__name__)

default_data = \
[             
    {"ranking": 1, "name": "chaz", "score": 99},
    {"ranking": 3, "name": "carl", "score": 60},
    {"ranking": 2, "name": "mike", "score": 95} 
]


@app.route('/')
def high_score():
    return render_template('index.html')
    #return index.html

@app.route('/dataupdate', methods=['POST'])
def update_data():
    new_high_score = {}

    for k in request.form.keys():
        new_high_score[k] = request.form[k]

    default_data.append(new_high_score)

    return get_data()

@app.route('/getdata', methods=['GET'])
def get_data():
    return dumps(default_data)

if __name__ == '__main__':
    app.run(debug=True)
