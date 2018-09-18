import React, { Component } from 'react';
import axios from 'axios';
import RecommendationsService from '../../api/RecommendationsService';

class ExpotifunDashboardView extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            recommendations: []
        }
    }

    async cargaDeDatosSincrona() {
        let service = new RecommendationsService();
        let resultSync = [];

        resultSync = await service.findAll();

        this.setState({
            recommendations: resultSync.data
        })
    }

    cargaDeDatosAsincrona() {
        let service = new RecommendationsService();
        

        service.findAll.then(
            (result) => {
                this.setState({
                    recommendations: result.data
                })
            }
        )
    }

    componentWillMount() {
        this.cargaDeDatosSincrona();    
    }

    render() {
        return (
            <div>
                Hola caracola
                <br />
                {JSON.stringify(this.state)}
            </div>
        );
    }
}

export default ExpotifunDashboardView;