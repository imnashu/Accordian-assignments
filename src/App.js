import MultiAcc from './MultiAcc';
import './style.css'
import { accData } from './data/data';

function App() {
  return (
    <div className='viewport'>
      <h1>Accordian 3RD assignment</h1>
      <div className="Maindiv">
        {accData.map(({ title, content }) => (
          <MultiAcc title={title} content={content}/>
        ))}
      </div>
    </div>
  );
}

export default App;
