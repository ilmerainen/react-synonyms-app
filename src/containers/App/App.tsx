import React from 'react';

import SynonymsEditor from "components/SynonymsEditor/styled";
import {StoreProvider} from "store/store";

function App() {
  return (
    <StoreProvider>
      <SynonymsEditor/>
    </StoreProvider>
  );
}

export default App;
