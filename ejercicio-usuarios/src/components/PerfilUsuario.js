import React, { Component } from 'react';
class PerfilUsuario extends Component {
    constructor(props) {
        super(props);

        console.log(props);
    }

    mostrarBio = () => {
        alert(this.props.bio);
    }

    render() {
        return (
            <div style={{display: 'block', height: '200px'}}>
                <div style={{float: 'left', width:'50%'}}>
                    <img width="100px" src={this.props.portraitUrl} 
                         onClick={this.props.clickHandler}/>
                </div>
                <div style={{float: 'right', width:'49%'}}>
                    <h1 onClick={this.mostrarBio}>{this.props.name}</h1>
                </div>
            </div>
        );
    }
}

export default PerfilUsuario;