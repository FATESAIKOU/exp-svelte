from flask import Flask

app = Flask(__name__)

@app.route('/foo', methods=['GET'])
def get_foo():
    return 'foo'

if __name__ == '__main__':
    app.run(debug=True)
