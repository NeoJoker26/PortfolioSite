from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/flask_page')
def flask_page():
    # Flask code for the specific page
    name = "Blazej Badora"
    projects = [
        {"title": "Flask Project 1", "description": "Description of Flask Project 1"},
        {"title": "Flask Project 2", "description": "Description of Flask Project 2"}
    ]
    return render_template('flask_page.html', name=name, projects=projects)

if __name__ == '__main__':
    app.run(debug=True)