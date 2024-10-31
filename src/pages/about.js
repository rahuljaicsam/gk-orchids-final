export function renderAbout() {
  return `
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">About Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p class="text-gray-600 mb-4">GKOrchids is a leading pharmaceutical company based in India, dedicated to providing high-quality medical solutions. With years of experience and a commitment to excellence, we strive to improve healthcare accessibility across the globe.</p>
            <p class="text-gray-600 mb-4">Our state-of-the-art facilities and research centers are equipped with the latest technology to ensure the highest quality standards in pharmaceutical manufacturing.</p>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">Our Values</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <span class="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                <span>Quality Excellence</span>
              </li>
              <li class="flex items-center">
                <span class="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                <span>Innovation</span>
              </li>
              <li class="flex items-center">
                <span class="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                <span>Patient Safety</span>
              </li>
              <li class="flex items-center">
                <span class="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                <span>Global Standards</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}