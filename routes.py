from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def high_score():
    return render_template('index.html')
    #return index.html

if __name__ == '__main__':
    app.run(debug=True)
