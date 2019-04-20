from flask import Flask, request, jsonify, render_template, make_response
import os
import dialogflow
import requests
import json
import pusher

data = {}

app = Flask(__name__)

def detect_intent_text(project_id, session_id, text, language_code):
    session_client = dialogflow.SessionsClient()
    print('==========' + 'session_client' + '==========')
    session = session_client.session_path(project_id, session_id)

    if text:
        text_input = dialogflow.types.TextInput(
            text=text, language_code=language_code)
        query_input = dialogflow.types.QueryInput(text=text_input)
        response = session_client.detect_intent(
            session=session, query_input=query_input)

        return response.query_result.fulfillment_text

# function for responses
def results():
    global data
    # build a request object
    data = request.get_json(force=True)
    # print(req['queryResult']['fulfillmentText'])
    # return a fulfillment response
    return str(data)

@app.route('/webhook', methods=['GET', 'POST'])
def webhook():
    return make_response(jsonify(results()))

@app.route('/o', methods=['GET'])
def o():
    #return json.dumps(data["queryResult"]["fulfillmentMessages"][0]["text"]["text"][0], ensure_ascii=False)
    return json.dumps(data["message"])

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send_message', methods=['POST'])
def send_message():
    message = request.form['message']
    project_id = os.getenv('DIALOGFLOW_PROJECT_ID')
    fulfillment_text = detect_intent_text(project_id, "unique", message, 'en')
    print('=========='+str(fulfillment_text) + '==========')
    response_text = { "message": fulfillment_text }
    return jsonify(response_text)


if __name__ == "__main__":
    app.run()