from flask import Flask
from flask import redirect, render_template, url_for, request
from gHubAPI import projects_import
import json

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/repos")
def get_repos():
    data = projects_import()
    response = app.response_class(
        response = json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response


if __name__ == "__main__":
    app.run(debug=True)



