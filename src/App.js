import React, { Component } from 'react';
import { FicheList } from "./components/fiche-list/fiche-list.component";
import { ZoneRecherche } from "./components/zoneRecherche/zone-recherche.component";
import './App.css';

class App extends Component {
    constructor() {
        super()

        this.state = {
            monstres: [],
            champsRecherche: ''
        }

    }
    gererChangement = (e) => {
    this.setState({ champsRecherche: e.target.value })
}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(reponse => reponse.json())
            .then(users => this.setState({ monstres: users}))
    }
    render() {
        const { monstres, champsRecherche } = this.state
            const monstresFiltre = monstres.filter(monstre =>
                monstre.name.toLowerCase().includes(champsRecherche.toLowerCase())
        )
        return (
            <div className="App">
                <h1>Monstres carrousel</h1>
                <ZoneRecherche
                    placeholder="Cherche monstres"
                    gererChangement={this.gererChangement}
                />
                <FicheList monstres={monstresFiltre}/>
            </div>

        )
    }
}

export default App;
