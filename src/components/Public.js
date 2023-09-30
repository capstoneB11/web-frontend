

const Public = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="mb-8">
            <img 
                src="https://picsum.photos/200/300" 
                alt="Welcome" 
                className="rounded-lg shadow-md w-full" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Hello, get started!</h1>
          <p className="text-gray-600 mb-6">Welcome to our awesome platform.</p>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700">Register</button>
            <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Sign In</button>
          </div>
        </div>
      </div>
    );
  };

export default Public