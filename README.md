# Build a Python Application with Mantium and the Power of Natural Language Processing

This demo code comes with a preconfigured repository that utilizes Python Poetry, which is my
recommended approach for building clean, organized Python applications. It requires installing the Python Poetry
package, for which you will find instructions in the setup section of this readme. 
If you are more comfortable with virtualenv and installing from requirements.txt, you also have that option!
However, I strongly suggest giving Poetry a shot because learning new things is fun, useful, and will 
help strengthen your mental map of structuring code.

# Getting Started with Mantium
Welcome and thank you for joining the Mantium team for our upcoming workshop! To prepare you for participating, we have included a few steps below to help you get set up for success.

1. Create a Mantium Account and get a Provider API Key
For creating prompts, you will need a Mantium account and an API key for an LLM (large language model) provider. This short loom video will take you through the process!

You’ll also find a text transcription of this video attached below.

2. Join our Discord Community!
Join our discord server and share your ideas, teach, and learn about the world of growing AI technologies. New to coding? No problem. This is an inclusive space!

3. Try Out a Mantium Prompt
To get an understanding of the type of application you will be building in the workshop, we’ve included a link to an interactive demo prompt. This is the Mantium Video Game Generator - all you have to do is type in a creative video game title for a game that might not yet exist, and the language model will generate a unique description! Try it out as many times as you’d like, and feel free to share any fun responses with us.

The Mantium developer hub can be found here. If you’d like to learn more ahead of time, this is where you’ll find tutorials and documentation!

4. Prepare Your Text
Prompts are short bodies of text that provide the model with a pattern for future output. During the workshop, be ready to copy and paste from the "ice cream flavors" text file attached, or from your own <1000 word English prompt that you prepared ahead of time.

And that’s all you’ll need! We are looking forward to having you join us. If you are interested in building a higher-code application using Mantium and Python, continue reading the attached workshop prep document. Newcomers are absolutely welcome to tune in, although we do recommend having your machine set up for development ahead of time if you’d like to code along.

We are excited to meet you all and to help you along your AI journeys!




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


