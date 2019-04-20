from flask import Flask, request, jsonify, render_template, make_response
import os
import dialogflow
import requests
import json
import pusher

app = Flask(__name__)

def detect_intent_text(project_id, session_id, text, language_code):
    session_client = dialogflow.SessionsClient()
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
    # build a request object
    req = request.get_json(force=True)
    #print(req)
    print(req['queryResult']['fulfillmentText'])
    # return a fulfillment response
    return {'fulfillmentText': 'This is a response from webhook.'}

@app.route('/webhook', methods=['GET', 'POST'])
def webhook():
    #print(make_response(jsonify(results())))
    return make_response(jsonify(results()))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send_message', methods=['POST'])
def send_message():
    message = request.form['message']
    project_id = os.getenv('DIALOGFLOW_PROJECT_ID')
    fulfillment_text = detect_intent_text(project_id, "unique", message, 'th')
    # response_text = { "message": fulfillment_text }

    response = jsonify({ "message": fulfillment_text })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

    #return jsonify(response_text)


if __name__ == "__main__":
    app.run()