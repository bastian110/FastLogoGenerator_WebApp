from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.responses import JSONResponse
import base64
from io import BytesIO
from logogen import generate_logo
import torch
from diffusers import StableDiffusionPipeline, EulerAncestralDiscreteScheduler

app = FastAPI()

model_id = "logo-wizard/logo-diffusion-checkpoint"

# Use the DPMSolverMultistepScheduler (DPM-Solver++) scheduler here instead
pipe = StableDiffusionPipeline.from_pretrained(model_id)
pipe.scheduler = EulerAncestralDiscreteScheduler.from_config(pipe.scheduler.config)
generator = torch.Generator("mps").manual_seed(0)


origins = [
    "http://localhost:3000",  # This is the default port for Next.js development server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/generator")
def handle_data(item: dict):
    company_industry = item["company_industry"]
    some_objects = item["some_objects"]
    colors = item["colors"] 
    image = generate_logo(pipe, generator, company_industry, some_objects, colors)
    # Convert image to a base64 encoded string
    buffered = BytesIO()
    image.save(buffered, format="PNG")  # or "JPEG", etc.
    img_str = base64.b64encode(buffered.getvalue()).decode()

    return JSONResponse(content={"image": img_str})

