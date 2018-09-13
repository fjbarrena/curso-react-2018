import React, { Component } from 'react';
import PerfilUsuario from './PerfilUsuario';
class ListadoUsuarios extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usuarios: [
                {
                    "portraitUrl" : "http://th09.deviantart.net/fs70/PRE/i/2013/056/c/f/i_am_the_danger___walter_white_portrait_by_markvano-d5w8ixy.jpg", 
                    "name": "Walter White",
                    "bio": "Walter Hartwell White, también conocido como Heisenberg, es un personaje ficticio, protagonista de la serie de televisión estadounidense Breaking Bad. El personaje es interpretado por el actor Bryan Cranston."
                },
                {
                    "portraitUrl": "https://pbs.twimg.com/profile_images/2603710564/dp3ln37ptpcb6lhz54ql.jpeg",
                    "name": "Saul Goodman",
                    "bio": "ames Morgan 'Jimmy' McGill, also known as Saul Goodman and Gene Takovic, is a fictional character who appears in the television series Breaking Bad and serves as the title character of its spin-off prequel series Better Call Saul. He is portrayed by Bob Odenkirk, and was created by Vince Gilligan and Peter Gould.[1] Saul's name is a play on the phrase 's all good, man."
                },
            ]
        }
    }

    clickImagen = () => {
        alert('El control ha sido transferido')
    }

    render() {
        return (
            <div>
                {
                this.state.usuarios.map((item) => {
                    return (<PerfilUsuario 
                            name={item.name} 
                            portraitUrl={item.portraitUrl}
                            bio={item.bio} 
                            clickHandler={this.clickImagen}
                            />
                        )
                })
                }
                
            </div>
        );
    }
}

export default ListadoUsuarios;