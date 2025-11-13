from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI(title="GreenAR API - CSV Version")

# Allow frontend access
origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load data (supports both .csv and .xlsx)
df = pd.read_csv("plants.csv")

@app.get("/")
def root():
    return {"message": "Welcome to GreenAR API (CSV Data Source)"}

@app.get("/plants")
def get_all_plants():
    """Return all plants"""
    return df.to_dict(orient="records")

@app.get("/plants/{city}")
def get_plants_by_city(city: str):
    """Filter plants by city/region (case-insensitive)"""
    result = df[df["City"].str.contains(city, case=False, na=False)]
    return result.to_dict(orient="records")

@app.get("/plant/{name}")
def get_plant_by_name(name: str):
    """Get single plant by name"""
    result = df[df["Name"].str.contains(name, case=False, na=False)]
    if not result.empty:
        return result.iloc[0].to_dict()
    return {"error": "Plant not found"}
