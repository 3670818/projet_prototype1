import os
from flask import Flask, render_template
import db

app = Flask(__name__)
app.config["SECRET_KEY"] = "dev"
app.config["DATABASE"] = os.path.join(app.instance_path, "flaskr.sqlite")

# Assure que le dossier instance existe
try:
    os.makedirs(app.instance_path)
except OSError:
    pass

# Initialise la base de données
db.init_app(app)


@app.route("/")
def index():
    """Page d'accueil."""
    return render_template("accueil.html")


@app.route("/allae")
def allae():
    """Page d'accueil."""
    return render_template("test.html")


@app.route("/contacter")
def contact():
    return render_template("contact.html")


@app.route("/a_propos")
def propos():
    return render_template("a_propos.html")


@app.route("/hello")
@app.route("/hello/<name>")
def hello(name=None):
    """Route hello world."""
    if name is None:
        name = "Monde"
    return render_template("hello.html", message=f"Bonjour, {name} !")


if __name__ == "__main__":
    app.run(debug=True)
