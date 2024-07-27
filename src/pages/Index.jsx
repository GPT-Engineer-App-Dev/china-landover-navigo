import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Welcome to China</h1>
        <img src="/placeholder.svg" alt="Great Wall of China" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg mb-8" />
        <p className="text-lg mb-6">
          China, the world's most populous country, boasts a rich history spanning thousands of years. From the Great Wall to the Forbidden City, China's cultural heritage is vast and diverse.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Key Facts</h2>
            <ul className="list-disc list-inside">
              <li>Capital: Beijing</li>
              <li>Population: Over 1.4 billion</li>
              <li>Official Language: Mandarin Chinese</li>
              <li>Currency: Renminbi (Yuan)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Popular Attractions</h2>
            <ul className="list-disc list-inside">
              <li>The Great Wall of China</li>
              <li>The Forbidden City</li>
              <li>The Terracotta Army</li>
              <li>Li River and Guilin</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
