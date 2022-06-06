from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

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


ingredients = [
    {
        "id": "4",
        "name": "anchovies",
        "amount": "4",
        "unit": "oz",
        "use": True
    },
    {
        "id": "5",
        "name": "butter",
        "amount": "8",
        "unit": "oz",
        "use": True
    },

]


@app.get("/ingredients", tags=["ingredients"])
async def get_ingredients() -> dict:
    return {"data": ingredients}


@app.get("/", tags=["root"])
async def read_root():
    return {"message": "Welcome to MantiumBot Recipe Generator"}