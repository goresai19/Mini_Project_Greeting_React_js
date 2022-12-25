//Impoting the App.css file for the css of the App.jsx
import './App.css';

//imporing the Heading component from the heading.jsx
import Heading from './heading';
//imporing the Para component from the para.jsx
import Para from './para';
//imporing the Greeting component from the Greeting.jsx
import Greeting from './Greeting';

//Creating teh funciton App
function App() {
  return (
    <>
    <div>
    <Heading className="head"></Heading>
    <Para />
    <Greeting/>
    </div>
    </>
);
}

//Exporting the function App
export default App;
