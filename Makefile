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