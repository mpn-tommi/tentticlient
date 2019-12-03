import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <h2>Questions</h2>
      <p>
        Move to List or Form. 
      </p>
      <p><b>Important!</b> Use router links, don't write to the address bar. 
      The Navbar's Title (Router+Redux) will cause <i>browser</i> navigation
      and clear the store.</p>
    </div>
  );
}

export default App;
