# Build a Python Application with Mantium and the Power of Natural Language Processing

This demo code comes with a preconfigured repository that utilizes Python Poetry, which is my
recommended approach for building clean, organized Python applications. It requires installing the Python Poetry
package, for which you will find instructions in the setup section of this readme. 
If you are more comfortable with virtualenv and installing from requirements.txt, you have that option!
However, I strongly suggest giving Poetry a shot because learning new things is fun, useful, and will 
help strengthen your mental map of structuring code.

This demo comes with a preconfigured repository that utilizes Poetry, so no initialization is required.
To learn more about initializing your own project using Poetry, follow the steps below.


### Demo video for setting up Python Poetry here

## POETRY INSTALL
Step 1: Install Python Poetry
$ curl https://install.python-poetry.org | python -
Step 2: Add Poetry Config to your ~/.bashrc, ~/.zshrc, or ~/.bashprofile
$ export 'if [ -d "$HOME/.local/bin" ] ; then PATH="$HOME/.local/bin:$PATH" fi' >> ~/.bashrc

## POETRY SETUP
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

## VIRTUALENV SETUP FOR THIS DEMO
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