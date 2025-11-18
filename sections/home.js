window.__sections = window.__sections || {};
window.__sections.home = `
<!-- Hero Section -->
<div class="bg-white rounded-lg shadow-xl overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-12">
        <div class="md:col-span-5">
            <img class="h-80 w-full object-cover md:h-full" 
                 src="image.png" 
                 alt="Dr. Pavan Kumar Asur">
        </div>
        <div class="md:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <span class="block text-base font-semibold text-gray-500 tracking-wide uppercase">Hello there, I'm</span>
            <h1 class="mt-2 text-4xl tracking-tight font-extrabold text-brand-dark sm:text-5xl">
                Dr. Pavan Kumar Asur
            </h1>
            <h2 class="mt-3 text-2xl font-semibold text-brand-accent sm:text-3xl">
                Computational Mechanics &amp; Fracture Mechanics
            </h2>
            <p class="mt-6 text-lg text-gray-600">
                I am a Postdoctoral Researcher at the Institute of Lightweight Design and Structural Biomechanics (ILSB) at TU Wien, Austria. 
                I completed my PhD in Computational Mechanics from IMT School for Advanced Studies Lucca, Italy. My work focuses on developing new models and numerical methods to simulate the behavior of materials under different conditions.
            </p>
            <div class="mt-8 flex gap-3">
                <a href="#" onclick="showPage('publications'); return false;" class="px-6 py-3 rounded-lg shadow-md text-base font-medium text-white bg-brand-accent hover:bg-blue-700">
                    View Publications
                </a>
                <a href="#" onclick="showPage('contact'); return false;" class="px-6 py-3 rounded-lg shadow-md text-base font-medium text-brand-accent bg-blue-100 hover:bg-blue-200">
                    Get in Touch
                </a>
            </div>
        </div>
    </div>
</div>

<!-- Research Interests Section -->
<div class="mt-20 py-16 bg-white rounded-lg shadow-xl">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
            <h2 class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Research Interests
            </h2>
        </div>
        
        <div class="mt-10">
            <p class="text-xl text-gray-700 leading-8">
                I am passionate about developing mathematical and computational tools for multi-physics modeling. I am particularly interested in phase field modeling of fracture, numerical methods for coupled PDEs, topology optimization, machine learning for mechanics, and constitutive modeling of materials. I work on developing new models and numerical methods to simulate the behavior of materials under different conditions.
            </p>
        </div>
        
        <div class="mt-12">
            <h3 class="text-lg font-semibold text-gray-900 text-center">Key Areas</h3>
            <div class="mt-4 flex flex-wrap justify-center gap-3">
                <span class="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full transition-all hover:bg-blue-200 hover:shadow-md">Phase Field Modeling of Fracture</span>
                <span class="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded-full transition-all hover:bg-indigo-200 hover:shadow-md">Numerical Methods for Coupled PDEs</span>
                <span class="bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full transition-all hover:bg-green-200 hover:shadow-md">Topology Optimization</span>
                <span class="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full transition-all hover:bg-purple-200 hover:shadow-md">Machine Learning for Mechanics</span>
                <span class="bg-pink-100 text-pink-800 text-sm font-medium px-4 py-2 rounded-full transition-all hover:bg-pink-200 hover:shadow-md">Constitutive Modeling of Materials</span>
            </div>
        </div>
    </div>
</div>
`;

