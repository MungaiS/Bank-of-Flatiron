import React from 'react';
import AccountContainer from './AccountContainer';

function App() {
  


  return (
    <div className='ui raised segment'>
      <div className='ui segment violet inverted'>
        <h2>Bank of Flatiron</h2>
      </div>
      {/* <AddTransactionForm onSubmission={updateOnSubmission} /> */}
      <AccountContainer  />
    </div>
  );
}

export default App;