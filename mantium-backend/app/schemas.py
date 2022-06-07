from pydantic import BaseModel
from typing import List

class Ingredient(BaseModel):
    id: int
    name: str
    amount: float
    unit: str
    use: bool

class Ingredients(BaseModel):
    ingredients: List[Ingredient]
class PromptInput(BaseModel):
    input: str

class PromptOutput(BaseModel):
    output: str
