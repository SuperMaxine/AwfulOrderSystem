from flask import Flask,request, jsonify
from flask_cors import CORS
import csv
import json
import os
import _thread

app = Flask(__name__)
CORS(app, supports_credentials=True)

file_is_open = False
file = None
GoOn = True

@app.route('/click', methods=['GET', 'POST'])
def click():
    global GoOn
    GoOn = True
    data = request.get_json()                # 获取 JSON 数据
    # data = pd.DataFrame(data["obj"])   # 获取参数并转变为 DataFrame 结构
    # print(data)
    # print(data["Class"])

    # if not file_is_open:
    #     file = open("data.csv",'wb')
    #     file_is_open = True
    #     csv_write = csv.writer(file)
    #     data_row = ["timestamp","Class","Id"]
    #     csv_write.writerow(data_row)
    #     data_row = [data["timestamp"],data["Class"],data["Id"]]
    #     csv_write.writerow(data_row)
    # else:
    #     csv_write = csv.writer(file)
    #     data_row = [data["timestamp"],data["Class"],data["Id"]]
    #     csv_write.writerow(data_row)

    with open("data.csv",'a+') as f:
        csv_write = csv.writer(f)
        data_row = [data["timestamp"],data["Class"],data["Id"]]
        csv_write.writerow(data_row)
    return 'OK'

def start_stream():
    cmd = ".\Release\StreamSample.exe"
    os.system(cmd)

@app.route('/start',methods=['GET','POST'])
def start():
    global GoOn
    GoOn = True
    _thread.start_new_thread(start_stream,())
    return 'fine'

@app.route('/exit',methods=['GET','POST'])
def exit():
    global GoOn
    GoOn = False
    # print("exit")
    # file.close()
    return 'fine'

@app.route('/stream', methods=["POST"])
def stream():
    data = request.get_data()
    json_re = json.loads(data)
    # print(json_re)
    with open("stream.csv",'a+') as f:
        csv_write = csv.writer(f)
        data_row = [json_re["timestamp"],json_re["x"],json_re["y"],json_re["validity"]]
        csv_write.writerow(data_row)
    if GoOn:
        response = "continue"
    else:
        response = "stop"
    # print(response)
    return response

@app.route('/ready', methods=['POST','GET'])
def ready():
    return 'READY'

if __name__ == '__main__':
    app.run()