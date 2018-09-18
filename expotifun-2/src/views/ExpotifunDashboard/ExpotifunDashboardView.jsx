import React, { Component } from 'react';
import axios from 'axios';
import RecommendationsService from '../../api/RecommendationsService';
import ExploreService from '../../api/ExploreService';

class ExpotifunDashboardView extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            recommendations: [],
            currentRecommendation: {},
            activeIndex: 0,
            exploreItems: []
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
        const service = new RecommendationsService();
        const exploreService = new ExploreService();

        exploreService.findAll().then(
            (result) => {
                console.log(result);
                this.setState({
                    exploreItems: result.data
                })
            }
        );

        service.findAll().then(
            (result) => {
                this.setState({
                    recommendations: result.data,
                    currentRecommendation: result.data[0],
                    activeIndex: 0
                })
            }
        )
    }

    componentWillMount() {
        this.cargaDeDatosAsincrona();    

        setInterval(() => {
            if(this.state.activeIndex === 5) {
                this.setState({
                    currentRecommendation: this.state.recommendations[0],
                    activeIndex: 0
                })
            }
            else {
                this.setState({
                    currentRecommendation: this.state.recommendations[this.state.activeIndex + 1],
                    activeIndex: this.state.activeIndex + 1
                })
            }
        }, 3000);
    }

    render() {
        return (
            <div>
                <div>
                    <img style={{width: '300px'}}  
                        src={this.state.currentRecommendation.coverImageUrl} />
                    <h6>{this.state.currentRecommendation.title}</h6>
                </div>

                <div>
                    <h2>Explorar</h2>
                </div>

                <div className="row">
                    {
                        this.state.exploreItems.map(
                            (item) => {
                                return (
                                    <div className="col-md-2" style={{backgroundColor: item.backgroundColor}}>
                                        <h6>{item.genre}</h6>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>

        );
    }
}

export default ExpotifunDashboardView;