setup_poetry:
	@echo "Installing Python Poetry..."
	curl https://install.python-poetry.org | python -
	@echo "Adding Poetry to PATH in ~/.bashrc..."
	@echo export #Poetry Config \
	if [ -d "$HOME/.local/bin" ] ; then
    PATH="$HOME/.local/bin:$PATH" >> ~/.bashrc
	fi
	@echo "Confirming Poetry installation version..."
	poetry --version
	@echo "Configuring Poetry environments to be stored in project root..."
	poetry config virtualenvs.in-project true

initialize_project:
	@echo "Initializing Mantium Python Project..."
	poetry new mantium_python_project --name nlp_app.py

install_deps:
	@echo "Installing dev dependencies..."
	poetry add --dev pytest=="*" pytest-cov=="*" \
	blue==0.5.2 flake8=="*" flake8-debugger=="*" \
	flake8-pytest-style=="*" isort=="*" mypy=="*" \
	pep8-naming=="*" pyupgrade=="*" bandit=="*" pip-audit=="*"
	@echo "Install dependencies complete."
	@echo "Installing app dependencies..."
	poetry add fastapi=="*" mantiumapi=="*"
	@echo "Install app dependencies complete."
	@echo "To enable a virtual environment with the above dependencies, run `poetry shell`."
	@echo "To exit the virtual environment, run `exit`."



test:
    pytest --cov-report term-missing --cov-report html --cov-branch \
           --cov project_x/

lint:
    @echo
    isort --diff -c .
    @echo
    blue --check --diff --color .
    @echo
    flake8 .
    @echo
    mypy .
    @echo
    bandit -r project_x/
    @echo
    pip-audit

format:
    isort .
    blue .
    pyupgrade --py310-plus **/*.py