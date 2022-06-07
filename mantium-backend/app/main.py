import run_prompt

from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional

from ingredient_list import INGREDIENTS

app = FastAPI(title="Mantium RecipeBot", openapi_url="/openapi.json")

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_router = APIRouter()


# Root
@api_router.get("/", tags=["root"])
async def root():
    return {"message": "Welcome to MantiumBot Recipe Generator"}

# All Ingredients
@api_router.get("/ingredients", tags=["ingredients"], status_code=200)
async def get_ingredients() -> dict:
    return INGREDIENTS

# Get Ingredient by ID
@api_router.get("/ingredients/{id}", tags=["ingredients"], status_code=200)
async def get_ingredient(*, id: int) -> dict:
    result = [ingredient for ingredient in INGREDIENTS if ingredient["id"] == id]
    if result:
        return result[0]

# Search Ingredients by Keyword
@api_router.get("/search/", tags=["ingredients"], status_code=200)
def search_recipes(
    keyword: Optional[str] = None, max_results: Optional[int] = 10
) -> dict:
    """
    Search for ingredient based on label keyword
    """
    if not keyword:
        # we use Python list slicing to limit results
        # based on the max_results query parameter
        return {"results": INGREDIENTS[:max_results]}

    results = filter(lambda ingredient: keyword.lower() in ingredient["name"].lower(), INGREDIENTS)
    return {"results": list(results)[:max_results]}


### This is where we call to Mantium with an input. TODO: make this a GET request
prompt_input = None
# call to mantium_call to return the results of the prompt to post
prompt_output = run_prompt.prompt_results(prompt_input)


app.include_router(api_router)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, log_level="debug")