import os
import logging
import time
from app import load_mantium_env

# load Mantium credentials
mantium_user, mantium_password, prompt_id = load_mantium_env()

from mantiumapi import prompt
from mantiumapi import client


logging.basicConfig(level=logging.INFO)

# Obtain bearer token and confirm log-in success
mantium_token = client.BearerAuth().get_token()
if mantium_token:
    logging.info(f"Mantium Login Successful with User {mantium_user}")

# Retrieve prompt by ID from Mantium
prompt = prompt.Prompt.from_id(prompt_id)

def prompt_results(input_text):
    """ Retrieve results from the prompt above - uses a pre-configured prompt from ID.
    """

    executed_prompt = prompt.execute(f"{input_text}")
    executed_prompt.refresh()

    time.sleep(5)  # prompt execution takes a small amount of time > this ensures a response
    executed_prompt.refresh()

    assert isinstance(executed_prompt.output, str)
    prompt_result = executed_prompt.output

	# check that the result is not an empty value and re-run the prompt if it is
    while prompt_result == "" or prompt_result=="{}":
        logging.info("Prompt Result Empty. Re-running prompt.")
        executed_prompt = prompt.execute(f"{input_text}")
        executed_prompt.refresh()

        time.sleep(5)  # prompt execution takes a small amount of time > this ensures a response
        prompt.refresh()

        prompt_result: str = executed_prompt.output

    return prompt_result

if __name__ == "__main__":
    result = prompt_results("benedictine, luxardo, brandy, vermouth")
    assert isinstance(result, str)

    logging.info(result)