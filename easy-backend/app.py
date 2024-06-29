from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/foo', methods=['GET'])
def get_foo():
    return jsonify({"result": "foo"})

if __name__ == '__main__':
    app.run(debug=True)
