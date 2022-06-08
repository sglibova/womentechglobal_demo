# Build a Python Application with Mantium and the Power of Natural Language Processing

This demo code comes with a preconfigured repository that utilizes Python Poetry, which is my
recommended approach for building clean, organized Python applications. It requires installing the Python Poetry
package, for which you will find instructions in the setup section of this readme. 
If you are more comfortable with virtualenv and installing from requirements.txt, you also have that option!
However, I strongly suggest giving Poetry a shot because learning new things is fun, useful, and will 
help strengthen your mental map of structuring code.

Note: This repository also includes a frontend React application in `mantium-frontend` - it is not required to run or execute the Python code. In order to run it, you must have `node` and `npm`.

# Getting Started with Mantium
Welcome and thank you for joining the Mantium team for our upcoming workshop! To prepare you for participating, we have included a few steps below to help you get set up for success.

### 1. Create a Mantium Account and get a Provider API Key

For creating prompts, you will need a Mantium account and an API key for an LLM (large language model) provider - this short [Loom video](https://www.loom.com/share/cb6136ebe0694c34a3c72c3f2651678f) will take you through the process. If you do not wish to use a non-Mantium LLM provider, you are welcome to use Mantium GPT-J without an API key!

### 2. Join our Discord Community!

Join our [Discord server](https://discord.com/invite/h9NCwW6mXY) and share your ideas, teach, and learn about the world of growing AI technologies. New to coding? No problem. This is an inclusive space!

### 3. Try Out a Mantium Prompt

To get an understanding of the type of application you will be building in the workshop, we’ve included a link to an interactive demo prompt. This is the [Mantium Video Game Generator](https://share.mantiumai.com/prompt/284001e2-1345-4df9-909a-9c5ba95001c7) - all you have to do is type in a creative video game title for a game that might not yet exist, and the language model will generate a unique description! Try it out as many times as you’d like, and feel free to share any fun responses with us.

The [Mantium developer hub](https://developer.mantiumai.com/) can be found here. If you’d like to learn more, this is where you’ll find tutorials and documentation!

### 4. Prepare Your Text

Prompt Texts are short bodies of text that provide the model with a pattern for future output. During the workshop, be ready to copy and paste from the "recipes" text file attached in the root of this directory.

And that’s all you’ll need! We are looking forward to having you join us. If you are interested in building a higher-code application using Mantium and Python, continue reading the attached workshop prep document. Newcomers are absolutely welcome to tune in, although we do recommend having your machine set up for development ahead of time if you’d like to code along.

We are excited to meet you all and to help you along your AI journeys!



This demo comes with a preconfigured repository that utilizes Poetry, so no initialization is required.
To learn more about initializing your own project using Poetry, check out the additional steps below.


## POETRY INSTALL
Step 1: Install Python Poetry

`$ curl https://install.python-poetry.org | python -`

Step 2: Add Poetry Config to your ~/.bashrc, ~/.zshrc, or ~/.bashprofile

`$ export 'if [ -d "$HOME/.local/bin" ] ; then PATH="$HOME/.local/bin:$PATH" fi' >> ~/.bashrc`

Step 3: Configure Poetry to store virtual environments in the project directory root

`$ poetry config virtualenvs.in-project-dir true`


## CONFIGURE ENVIRONMENT VARIABLES
Reminder: please never use unencrypted environment variables in production, and never push them to a public repo!
Step 1: Update `.env-demo` to `.env`

`$ mv .env-demo .env`

Step 2: Replace placeholder strings in `.env` with your Mantium credentials

## DEMO SETUP USING POETRY
Step 1: Change into a directory where you keep your projects

`$ cd ~/path/to/your/projects`

Step 2: Clone this repository into your projects directory

`$ git clone url/to/this/repository`

Step 3: Change into the directory where you cloned the repository

`$ cd ~/path/to/your/projects/womentechglobal_demo`

Step 4: Change into the mantium-backend/ directory

`$ cd mantium-backend/`

Step 5: Install the dependencies using Poetry

`$ poetry install`

Step 6: Initialize the virtual environment

`$ poetry shell`

## DEMO SETUP USING VIRTUALENV + VIRTUALENV WRAPPER
Step 1: Change into a directory where you keep your projects

`$ cd ~/path/to/your/projects`

Step 2: Clone this repository into your projects directory

`$ git clone url/to/this/repository`

Step 3: Change into the directory where you cloned the repository

`$ cd ~/path/to/your/projects/womentechglobal_demo`

Step 4: Create a virtual environment

`$ mkvirtualenv mantium_python_project`

Step 5: Change into the `mantium-backend` directory

`$ cd mantium-backend`

Step 6: Initialize the virtual environment

`$ workon mantium_python_project`

Step 7: Install the dependencies using pip

`$ pip install -r requirements.txt`

If you use other methods, feel free to adapt these steps to your needs!

## RUN FRONTEND AND BACKEND (MUST HAVE NODE AND NPM TO RUN FRONTEND)
Step 1: Change into the `mantium-backend` directory

`$ cd mantium-backend/`

Step 2: Run uvicorn server using the shell script in run.sh

`$ poetry run ./run.sh`

Step 3: Change into `mantium-frontend` directory

`$ cd ../mantium-frontend/`

Step 4: Run frontend using npm

`$ npm start`

Frontend can now be viewed at `http://localhost:3000/`

Additional Steps: Check out the FastAPI documentation created at `http://localhost:8000/docs/` for how the application backend is structured!

## CREATING A PYTHON POETRY PROJECT FROM SCRATCH
Step 1: Change into a projects directory

`$ cd ~/path/to/your/projects`

 Step 2: Create a new Poetry project

`$ poetry new project_name --name application_name.python`

Step 3: Add your preferred development dependencies, for example:

`$ poetry add -D pytest pytest-cov flake8`

Step 4: Add your preferred production dependencies, for example:

`$ poetry add fastapi pydantic numpy pandas`


