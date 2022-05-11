# Build a Python Application with Mantium and the Power of Natural Language Processing

This demo code comes with a preconfigured repository that utilizes Python Poetry, which is my
recommended approach for building clean, organized Python applications. It requires installing the Python Poetry
package, for which you will find instructions in the setup section of this readme. 
If you are more comfortable with virtualenv and installing from requirements.txt, you also have that option!
However, I strongly suggest giving Poetry a shot because learning new things is fun, useful, and will 
help strengthen your mental map of structuring code.

This demo comes with a preconfigured repository that utilizes Poetry, so no initialization is required.
To learn more about initializing your own project using Poetry, check out the additional steps below.


### Demo video for setting up Python Poetry here

## POETRY INSTALL
Step 1: Install Python Poetry
$ curl https://install.python-poetry.org | python -
Step 2: Add Poetry Config to your ~/.bashrc, ~/.zshrc, or ~/.bashprofile
$ export 'if [ -d "$HOME/.local/bin" ] ; then PATH="$HOME/.local/bin:$PATH" fi' >> ~/.bashrc
Step 3: Configure Poetry to store virtual environments in the project directory root
$ poetry config virtualenvs.in-project-dir true

## DEMO SETUP USING POETRY
Step 3: Change into a directory where you keep your projects
$ cd ~/path/to/your/projects
Step 4: Clone this repository into your projects directory
$ git clone url/to/this/repository
Step 5: Change into the directory where you cloned the repository
$ cd ~/path/to/your/projects/mantium_python_project
Step 6: Install the dependencies using Poetry
$ poetry install
Step 7: Initialize the virtual environment
$ poetry shell

## DEMO SETUP USING VIRTUALENV + VIRTUALENV WRAPPER
Step 3: Change into a directory where you keep your projects
$ cd ~/path/to/your/projects
Step 4: Clone this repository into your projects directory
$ git clone url/to/this/repository
Step 5: Change into the directory where you cloned the repository
$ cd ~/path/to/your/projects/mantium_python_project
Step 6: Create a virtual environment
$ mkvirtualenv mantium_python_project
Step 7: Initialize the virtual environment
$ workon mantium_python_project
Step 8: Install the dependencies using pip
$ pip install -r requirements.txt

If you use other methods, feel free to adapt these steps to your needs!

## SETTING UP A POETRY PROJECT FROM SCRATCH
Step 1: Change into a projects directory
$ cd ~/path/to/your/projects
Step 2: Create a new Poetry project
$ poetry new project_name --name application_name.python
Step 3: Add your preferred development dependencies, for example:
$ poetry add -D pytest pytest-cov flake8
Step 4: Add your preferred production dependencies, for example:
$ poetry add fastapi pydantic numpy pandas


