// Minimal functional component for Hello World with a React icon
// Uses TypeScript and react-icons, following project rules
import { FaReact } from 'react-icons/fa';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <FaReact size={48} className="text-blue-500 mb-4" />
      <div>Hello World</div>
    </div>
  );
};

export default App;
