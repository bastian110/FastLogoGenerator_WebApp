# AI Logo Generator

## Description
This project is  merging artificial intelligence with creative design, harnessing the power of Data Science and Machine Learning to revolutionize logo design. 
By leveraging the Stable Diffusion model through the Hugging Face API, it significantly surpasses the logo generation capabilities of earlier explored models like GAN and WGAN, 
marking a substantial leap in quality and creativity. This Diffusion model, informed by deep insights into design principles and aesthetics from extensive datasets, excels in producing unique logos 
finely tuned to user-provided descriptions. The project also features a user-friendly web application built with Next.js and FastApi, enabling easy and direct generation of logos. 
This integration showcases the transformative potential of machine learning in creative tasks, proving that the right application of AI not only enhances design processes but also redefines them.

## Installation

### Prerequisites
- Python 3.8+
- Node.js 14.x+
- npm/yarn

## Steps
### Clone the repository:
```bash
git clone bastian110/FastLogoGenerator_WebApp
```
### Install Python dependencies:
```bash
pip install -r requirements.txt
```
### Set up the web application:
```bash
cd webapp
npm install
```
## Usage
### Generating Logos
Start the FastAPI server:
```bash
uvicorn app:app --reload
Run the Next.js application:
```

```bash
cd webapp
npm run dev
```

Open your browser and navigate to the provided URL.
Enter your logo description and generate logos instantly.

## Features

AI-powered logo generation based on text descriptions.
Comparison benchmarks between GAN, WGAN, and Stable Diffusion models.
Interactive web application for easy logo creation.

Framework & API Used:
AI and Machine Learning: Matplotlib, PyTorch, torchvision, NumPy, OpenCV, pandas, scikit-learn, Hugging-Face, Stable diffusion.
Web Development: Next.js, Tailwind CSS, FastAPI
