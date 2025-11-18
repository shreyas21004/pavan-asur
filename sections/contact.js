window.__sections = window.__sections || {};
window.__sections.contact = `
<div class="bg-brand-medium text-white rounded-lg shadow-xl overflow-hidden">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <h2 class="text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
                Get in Touch
            </h2>
            <p class="mt-4 text-lg leading-6 text-gray-300">
                I'm open to collaborations, questions, and discussions.
            </p>
        </div>
        
        <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="space-y-6">
                <h3 class="text-2xl font-semibold">Contact Information</h3>
                <div>
                    <p class="text-lg font-medium">Dr. Pavan Kumar Asur Vijaya Kumar</p>
                    <p class="text-gray-300">Universitätsassistent (PostDoc)</p>
                    <p class="text-gray-300">Research Unit: Lightweight Design and Structural Biomechanics (ILSB)</p>
                </div>
                <div>
                    <p class="text-lg font-medium">Email</p>
                    <a href="mailto:pavan.kumar@tuwien.ac.at" class="text-brand-accent hover:underline">pavan.kumar@tuwien.ac.at</a>
                </div>
                <div class="pt-4">
                    <p class="text-lg font-medium mb-3">Find me online</p>
                    <div class="flex space-x-5">
                        <a href="https://www.linkedin.com/in/pavan-kumar-asur" target="_blank" rel="noopener noreferrer" title="LinkedIn" class="text-gray-300 hover:text-white">
                            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                        <a href="https://scholar.google.com/citations?user=0wNyJAcAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" title="Google Scholar" class="text-gray-300 hover:text-white">
                            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 24c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm-6.354-10.826l-3.646 2.104v-4.208l3.646 2.104zm.707 1.217l3.647 2.104 2.353-4.076-6 3.464v-6.928l-2.353 4.076 2.353 1.36zm10.293-1.217l-3.646-2.104v4.208l3.646-2.104zm-5.646 3.249l2.354 4.076 3.646-2.104-2.353-1.36-3.647 2.104v-4.208l-2.354-4.076 2.354 1.36 3.646 2.104v4.208z"/></svg>
                        </a>
                        <a href="https://github.com/Pavan-asur" target="_blank" rel="noopener noreferrer" title="GitHub" class="text-gray-300 hover:text-white">
                            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
            
            <div>
                <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                    <p class="hidden">
                        <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                    </p>
                    <input type="hidden" name="form-name" value="contact" />
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                        <div>
                            <label for="first-name" class="block text-sm font-medium text-gray-300">First Name</label>
                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-brand-accent focus:ring-brand-accent">
                        </div>
                        <div>
                            <label for="last-name" class="block text-sm font-medium text-gray-300">Last Name</label>
                            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-brand-accent focus:ring-brand-accent">
                        </div>
                        <div class="sm:col-span-2">
                            <label for="email" class="block text-sm font-medium text-gray-300">Email *</label>
                            <input type="email" name="email" id="email" autocomplete="email" required class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-brand-accent focus:ring-brand-accent">
                        </div>
                        <div class="sm:col-span-2">
                            <label for="subject" class="block text-sm font-medium text-gray-300">Subject</label>
                            <input type="text" name="subject" id="subject" class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-brand-accent focus:ring-brand-accent">
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block text-sm font-medium text-gray-300">Leave a message *</label>
                            <textarea id="message" name="message" rows="5" required class="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-brand-accent focus:ring-brand-accent"></textarea>
                        </div>
                    </div>
                    <div class="mt-6">
                        <button type="submit" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-accent hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
`;

