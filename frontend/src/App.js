import { useState } from 'react';

import { Container } from 'react-bootstrap';

import Wizard from './components/wizard/wizard';
import AllFiles from './modules/allFiles';
import Element from './modules/element';

const wizardSteps = {
  CHOOSING: 'CHOOSING',
  ALL_DATA: 'ALL_DATA',
  ELEMENT: 'ELEMENT'
}

const options = [
  { value: wizardSteps.CHOOSING, label: 'Select a option...' },
  { value: wizardSteps.ALL_DATA, label: 'All the files' },
  { value: wizardSteps.ELEMENT, label: 'One file' },
];

function App() {
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  return (
    <Container>
      <Wizard options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />

      {selectedOption === wizardSteps.CHOOSING && <h1>Kindly select a option 👍</h1>}
      {selectedOption === wizardSteps.ALL_DATA && <AllFiles />}
      {selectedOption === wizardSteps.ELEMENT && <Element />}
    </Container>
  );
}

export default App;
