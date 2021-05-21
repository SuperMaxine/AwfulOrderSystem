from flask import Flask,request, jsonify
from flask_cors import CORS
import csv

app = Flask(__name__)
CORS(app, supports_credentials=True)

file_is_open = False
file = None

@app.route('/click', methods=['GET', 'POST'])
def click():
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

@app.route('/exit',methods=['GET','POST'])
def exit():
    # print("exit")
    # file.close()
    return 'fine'

if __name__ == '__main__':
    app.run()