import { Component } from 'react';
import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

//La classe App étends de la classe parent Component et hérite de ses propriétés
class App extends Component {

  // **********************Initialisation*********************************//
  //appel du constructeur de la classe parent
  constructor(props) {
    super(props);
    //Création et initialisation de l'état
    this.state = {
      personne: {
        id: 0,
        fullName: "Awa NDOYE",
        bio: " Biographie Awa",
        imgSrc: "./personne.jpg",
        profession: " Informaticienne",
      },
      show: true,
      tempsEcoule: 0
    };
  }

  //*************************************** Méthodes********************//
  afficherProfil = () => {
    //Au clic du bouton, modification de show qui prend l'opposé de sa valeur actuelle
    this.setState({ show: !this.state.show });
  }
  componentDidMount() {
    // Utilisation de setInterval pour mettre à jour elapsedTime chaque seconde
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        tempsEcoule: prevState.tempsEcoule + 1,
      }));
    }, 1000);
  }

  //**********************************Affichage***************************//
  render() {
    // Destructuration des props (objet personne et show)
    const { fullName, bio, imgSrc, profession } = this.state.personne;
    const { show, tempsEcoule } = this.state;
    return (
      <>
        <h1 className='Tittle' style={{ textAlign: "center" }}>CheckPoint : Composant basé sur les classes</h1>
        {/* Appel de la fonction "afficherProfil" au clique du bouton */}
        <Button variant="secondary" style={{margin:'10px'}} onClick={this.afficherProfil}>Show </Button>
        {show ?
          <div >
            <Card style={{ width: '20rem', marginLeft:'10px' }}>
              <img src={imgSrc} alt="Echec" style={{ width: "18rem", height: "18rem" }} />
              <Card.Body>
                <Card.Title style={{textAlign:'center'}}><h2>{fullName}</h2></Card.Title> 
                <Card.Text>
                  <p><strong> Biographie :</strong>  {bio}</p>
                  <p> <strong>Profession :</strong> {profession}</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <p>Temps écoulé depuis le montage: <strong>{tempsEcoule} secondes</strong></p>
          </div>
          : false}
      </>
    );
  };
}
export default App;
