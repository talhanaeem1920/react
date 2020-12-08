import { useState } from 'react';
import '../stylesheets/App.scss';
import Input from '../components/Input';
import ImageList from '../components/ImageList';


function App(props) {
  const [pics, setPics] = useState([]);  
  const baseUrl = 'https://api.unsplash.com/search/photos?page=1&query=';

  const fetchPics = (url,query) => {
    fetch(`${url}${query}`, {
        headers: {
            'Authorization': 'Client-ID 26c032ac2708bcab4ff754dac0fb5b5a5410fb9bcc5e7c9f895e387cb62d8dc2'
        }
    })
        .then(result => result.json())
        .then(data => setPics(data.results))
        .catch(error => console.log(error));
};

const handleSubmit = (e,query) => {
    e.preventDefault();
    fetchPics(baseUrl,query);
};
  return (
    <div className="App">
      <Input  handleSubmit={handleSubmit}/>
      <ImageList pics={pics} />
    </div>

  );
}

export default App;
