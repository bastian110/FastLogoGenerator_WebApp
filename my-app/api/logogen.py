

def generate_logo(pipe,generator, company_industry, some_objects, colors):

    pipe = pipe.to("mps")
    pipe.enable_attention_slicing()

    positive=f"a brand logo of {company_industry}, {some_objects}, {colors}, modern, minimalism, vector art, 2d, best quality, centered"
    negative= "low quality, worst quality, bad composition, extra digit, fewer digits, text, inscription, watermark, label, asymmetric"

    image = pipe(prompt=positive,negative_prompt = negative,generator=generator, num_inference_steps=25, guidance_scale = 7.5,height = 512, width = 512).images[0]

    return image