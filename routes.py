from flask import Flask, render_template, url_for, request, jsonify

app = Flask(__name__)

@app.route('/')
def high_score():
    return render_template('index.html')
    #return index.html

@app.route('/dataupdate', methods=['POST'])
def update_data():
    print str(jsonify(request.form))
    return jsonify(request.form)

if __name__ == '__main__':
    app.run(debug=True)
