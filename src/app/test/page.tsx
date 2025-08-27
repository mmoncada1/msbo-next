import Navigation from "@/components/Navigation";

export default function Test() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-8">Image Test Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Hero Background</h2>
            <img 
              src="/hero-bg.jpg" 
              alt="Hero background" 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Team Meeting</h2>
            <img 
              src="/team-meeting.jpg" 
              alt="Team meeting" 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">University Building</h2>
            <img 
              src="/university-building.jpg" 
              alt="University building" 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Stock Chart</h2>
            <img 
              src="/stock-chart.jpg" 
              alt="Stock chart" 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
