from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware

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

@api_router.get("/", tags=["root"])
async def read_root():
    return {"message": "Welcome to MantiumBot Recipe Generator"}

@api_router.get("/ingredients", tags=["ingredients"])
async def get_ingredients() -> dict:
    return {"data": ingredients}



app.include_router(api_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, log_level="debug")