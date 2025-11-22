window.__sections = window.__sections || {};
window.__sections.codes = `
<div class="py-16 bg-white rounded-lg shadow-xl overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
            <h2 class="text-base text-brand-accent font-semibold tracking-wide uppercase">Open Source</h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Codes &amp; Repositories
            </p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Research codes and implementations for phase field modeling, fracture mechanics, and topology optimization.
            </p>
        </div>

        <div class="mt-16 max-w-5xl mx-auto space-y-12">
            <!-- Multi-Phase-Field-for-FRC-using-Puck-theory -->
            <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-start justify-between">
                    <div class="flex-1">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">
                            Multi-Phase-Field-for-FRC-using-Puck-theory
                        </h3>
                        <p class="text-gray-700 leading-relaxed mb-4">
                            The codes presented here are used in the paper "Revisiting Multi-Phase field for FRCs using Puck failure theory". The codes can be used with AT2, AT1 models. We have tested the files for version Abaqus2020, Abaqus2022, Abaqus2024. All the material properties required are presented in the pfall.f file, and the input file corresponding to each example in the paper are given.
                        </p>
                        <div class="flex items-center space-x-4">
                            <a href="https://github.com/Pavan-asur/Multi-phase-field-Puck-FRC" 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               class="inline-flex items-center px-4 py-2 rounded-lg text-base font-medium text-white bg-brand-accent hover:bg-blue-700 transition-colors duration-200">
                                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Fatigue-Solidshell -->
            <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-start justify-between">
                    <div class="flex-1">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">
                            Fatigue-Solidshell
                        </h3>
                        <p class="text-gray-700 leading-relaxed mb-4">
                            The codes presented here are used for the following paper "A Phase field fracture model for fatigue using Locking free solid shell finite elemnts: Analysis for homogenous and layered composites". The codes can be used with or without fatigue. The code is written as a UEL and UMAT for the use in abaqus. We have tested the files for version Abaqus2020, and Abaqus2022.
                        </p>
                        <div class="flex items-center space-x-4">
                            <a href="https://github.com/Pavan-asur/Fatigue-Solidshell" 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               class="inline-flex items-center px-4 py-2 rounded-lg text-base font-medium text-white bg-brand-accent hover:bg-blue-700 transition-colors duration-200">
                                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SIMP_Topology_Optimisation_FGM -->
            <div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-start justify-between">
                    <div class="flex-1">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">
                            SIMP_Topology_Optimisation_FGM
                        </h3>
                        <p class="text-gray-700 leading-relaxed mb-4">
                            The Matlab codes presented here are use for the following paper "SIMP Phase field topology optimisation framework to maximise fracture resistance in FGMs". The codes are divided intp 2 parts.
                        </p>
                        <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                            <li>Without phase field to minimise the compliance.</li>
                            <li>With Phase field method to fracture to maximise fracture resistance.</li>
                        </ul>
                        <p class="text-gray-700 leading-relaxed mb-4">
                            The main codes are in "eso_crack", and the properties of the FGM has to be changed in "crack_propogation".
                        </p>
                        <div class="flex items-center space-x-4">
                            <a href="https://github.com/Pavan-asur/SIMP_Topology_Optimisation_FGM" 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               class="inline-flex items-center px-4 py-2 rounded-lg text-base font-medium text-white bg-brand-accent hover:bg-blue-700 transition-colors duration-200">
                                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

