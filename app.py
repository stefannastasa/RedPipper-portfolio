from flask import Flask
from flask import redirect, render_template, url_for, request
from gHubAPI import projects_import
import json

app = Flask(__name__)

@app.route("/")
def index():
    data = projects_import();
    return render_template("index.html", repos = data)



if __name__ == "__main__":
    app.run(debug=True)



