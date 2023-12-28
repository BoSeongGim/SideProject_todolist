from flask import Flask

app = Flask(__name__)

@app.route("/members")
def members():
    return {"members": ["Memeber1","Members2","Memeber3"]}

if __name__ == "__main__":
    app.run(debug=True)


