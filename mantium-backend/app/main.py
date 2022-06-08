from .run_prompt import prompt_results
from .ingredient_list import INGREDIENTS
from .schemas import Ingredient, Ingredients, PromptInput, PromptOutput

from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional


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
@api_router.get("/ingredients/{id}", tags=["ingredients"], status_code=200, response_model=Ingredient)
async def get_ingredient(*, id: int) -> dict:
    result = [ingredient for ingredient in INGREDIENTS if ingredient["id"] == id]
    if result:
        return result[0]

# Search Ingredients by Keyword
@api_router.get("/search/", tags=["ingredients"], status_code=200, response_model=Ingredients)
def search_ingredients(
    keyword: Optional[str] = None, max_results: Optional[int] = 10
) -> dict:
    """
    Search for ingredient based on label keyword
    """
    if not keyword:
        # we use Python list slicing to limit results
        # based on the max_results query parameter
        return {"ingredients": INGREDIENTS[:max_results]}

    results = filter(lambda ingredient: keyword.lower() in ingredient["name"].lower(), INGREDIENTS)
    return {"ingredients": list(results)[:max_results]}

# Add Ingredient
@api_router.post("/ingredients", tags=["ingredients"], status_code=201, response_model=Ingredient)
def add_ingredient(*, ingredient: Ingredient) -> dict:
    """
    Add an ingredient to the list
    """
    ingredient_id = len(INGREDIENTS) + 1
    ingredient_entry = Ingredient(
        id=ingredient_id,
        name=ingredient.name,
        amount=ingredient.amount,
        unit=ingredient.unit,
        use=ingredient.use,
    )
    INGREDIENTS.append(ingredient_entry.dict())
    return ingredient_entry

# Delete Ingredient
@api_router.delete("/ingredients/{id}", tags=["ingredients"], status_code=200, response_model=Ingredients)
def delete_ingredient(*, id: int) -> dict:
    """
    Delete an ingredient from the list
    """
    ingredient_entry = [ingredient for ingredient in INGREDIENTS if ingredient["id"] == id]
    if ingredient_entry:
        INGREDIENTS.remove(ingredient_entry[0])
        print(INGREDIENTS)
        return {"ingredients": INGREDIENTS}

# Use Recipe Prompt
@api_router.post("/recipe", tags=["recipe"], status_code=201, response_model=PromptOutput)
def get_recipe(*, ingredients_list: Ingredients) -> dict:

    # INGREDIENTS.append(add_ingredient)
    # print(INGREDIENTS)
    print(ingredients_list.schema_json(indent=2))
    ingredients = [f'{ingredient["amount"]} {ingredient["unit"]} {ingredient["name"]}' for ingredient in ingredients_list]
    print(ingredients)

    ingredients_input = str()
    for ingredient in ingredients:
        ingredients_input += ingredient + " "

    print(ingredients_input)

    prompt_output = prompt_results(ingredients_input)

    print(prompt_output, type(prompt_output))

    return {"recipe": prompt_output}

###############################################################################
app.include_router(api_router)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, log_level="debug")