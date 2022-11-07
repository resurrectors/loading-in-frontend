from flask import Flask, jsonify
import time

app = Flask(__name__)


@app.route('/',methods=['GET'])
def keep_alive():
    print('before timer')
    time.sleep(10)
    print('after timer')
    response = jsonify(message="Backend is working : Welcome to Timepass")
    # Enable Access-Control-Allow-Origin
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route('/list',methods=['GET'])
def get_list():
    print('before timer')
    time.sleep(15)
    print('after timer')
    ls = ['shu','bha','pat','lll']
    response = jsonify(message = "Backend is working : Getting list details", ls = ls)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

if __name__ == "__main__":
    app.run(debug=True)
