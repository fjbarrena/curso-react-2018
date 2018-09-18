import React, { Component } from 'react';
import AlbumService from '../../api/AlbumService';

class AlbumsView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: [],
            selectedAlbum: {},
            songs: []
        }
    }

    componentWillMount() {
        const albumService = new AlbumService();

        albumService.findAll().then(
            (res) => {
                this.setState({
                    albums: res.data
                })
            }
        )
    }

    loadAlbumData = (album) => {
        console.log("loadAlbumData");
        console.log(album);
        const service = new AlbumService();

        service.getSongsOfAlbum(album.id).then(
            (canciones) => {
                this.setState({
                    songs: canciones.data,
                    selectedAlbum: album
                })
            }
        )
    }
    render() {
        return (
            <div>
                <div id="listaAlbumes" className="row">
                    {
                        this.state.albums.map(
                            (album) => { return (
                                <div className="col-md-4">
                                    <img src={album.coverImageUrl}
                                         style={{width: "200px"}} 
                                         onClick={() => this.loadAlbumData(album)}/>
                                </div>
                            )}
                        )
                    }
                </div>

                <div id="listaCanciones" className="row">
                    Album seleccionado {this.state.selectedAlbum.title}
                </div>
            </div>
        );
    }
}

export default AlbumsView;