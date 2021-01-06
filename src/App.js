import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import coverImage from './assets/cover/cover-image.jpg';

function App() {
 const [categories, setCategories] = useState([
])
  return (
    <div>
      <Nav categories={categories}  />
      <main>
          <About coverImage={coverImage} />        
      </main>
    </div>
  );
}

export default App;