export default function Page() {
    return(

            <div className=" overflow-auto mx-auto space-y-7">
                    
            <div>                
            {/* Font Family */}
            <p class="font-sans ...">font-sans ...</p>
            <p class="font-serif ...">font-serif ...</p>
            <p class="font-mono ...">font-mono ...</p>
            
            </div>

            <div> 
            {/* Font Size */}
            <p className="text-xs">text-xs</p>
            <p className="text-sm">text-sm</p>
            <p className="text-base">text-base</p>
            <p className="text-lg">text-lg</p>
            <p className="text-xl">text-xl</p>
            <p className="text-2xl">text-2xl</p>
            <p className="text-3xl ">text-3xl</p>
            {/* ... other font sizes as required ... */}
            </div>

            <div> 
            {/* Font Weight */}
            <p className="font-light">font-light</p>
            <p className="font-normal">font-normal</p>
            <p className="font-medium">font-medium </p>
            <p className="font-bold">font-bold</p>
            {/* ... other font weights as required ... */}
            </div>

            <div> 
            {/* Line Height */}
            <p className="leading-tight">leading-tight</p>
            <p className="leading-normal">leading-normal</p>
            <p className="leading-loose">leading-loose</p>
            </div>

            <div> 
            {/* Color */}
            <p className="text-gray-200">text-gray-200</p>
            <p className="text-gray-400">text-gray-400</p>
            <p className="text-gray-600">text-gray-600</p>
            <p className="text-gray-800">text-gray-800</p>
            <p className="text-gray-900">text-gray-900</p>
            </div>

            <div> 
                {/* Width and Height */}
                <div className="w-1/2 h-32 bg-blue-200">w-1/2 h-32</div>
                <div className="w-2/3 h-32 bg-blue-300">w-1/2 h-32</div>
            </div>

            <div className="w-1/2"> 
                {/* Box Shadows */}
                <div className="shadow-md p-4">Box Shadow: Medium</div>
                <div className="shadow-lg p-4">Box Shadow: Large</div>
                <div class="shadow-xl p-4">Box Shadow: xl</div>
                <div class="shadow-2xl p-4">Box Shadow: 2xl</div>
            {/* ... other shadows as required ... */}
            </div>

            <div> 
                {/* Border Radius */}
                <div className="rounded bg-green-200 p-4">Border Radius: Default</div>
                <div className="rounded-lg bg-green-300 p-4">Border Radius: Large</div>
                {/* ... other border radii as required ... */}
            </div>
            
            <div> 
                {/* Border Width */}
                <div className="border border-gray-300 p-4">Border Width: Default</div>
                <div className="border-t-4 border-green-400 p-4">Top Border Width: 4</div>
                {/* ... other borders as required ... */}
            </div>

            <div>
                <div class="divide-y-2 divide-slate-200 ...">
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                </div>
            </div>

            <div> 
            {/* Opacity */}
            <div className="opacity-50 bg-black p-4 text-white">Opacity: 50%</div>
            <div className="opacity-75 bg-black p-4 text-white">Opacity: 75%</div>
            </div>

            <div className="divide-y-2 "> 
            {/* Padding &  Margin */}
            <div className="p-1">Padding: 1 / 4 </div>
            <div className="p-2">Padding: 2 / 8px </div>
            <div className="p-3">Padding: 3 / 12px </div>
            <div className="p-4">Padding: 4 / 16px </div>
            <div className="p-6">Padding: 6 / 24px </div>
            <div className="p-8">Padding: 8 / 32px </div>
            <div className="p-16">Padding: 16 / 64px </div>
            <div className="p-24">Padding: 24 / 96px </div>
            <div className="p-32">Padding: 32 / 128 </div>
            <div className="p-48">Padding: 48 / 192 </div>
            <div className="p-64">Padding: 64 / 256 </div>
            <div className="p-96">Padding: 96 / 384 </div>
            <div className="p-128">Padding: 128 / 512 </div>
            {/* ... other paddings as required ... */}
            </div>

            </div>
    )
}