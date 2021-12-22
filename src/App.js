import { Component } from 'react';

import './App.css';

import Searchbar from './components/Searchbar';
import Button from './components/Button';
import Modal from './components/Modal';
import Loader from "react-loader-spinner";
import ImageGallery from './components/ImageGallery';



class App extends Component {
  render() {
    return (
      <>
        <Searchbar />
        <Button />
        <ImageGallery />
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </>
    );
  }
}

export default App;