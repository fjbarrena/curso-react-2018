import React, { Component } from 'react';
import AlbumService from '../../api/AlbumService';
import {DataTable, Column} from 'primereact/datatable';

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
        const service = new AlbumService();

        service.getSongsOfAlbum(album.id).then(
            (canciones) => {
                console.log(canciones);

                this.setState({
                    songs: canciones.data[0].songs,
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
                    
                    <DataTable value={this.state.songs}>
                        <Column field="name" header="Nombre" />
                        <Column field="duration" header="Duración" />
                        <Column field="popularity" header="Pop" />
                    </DataTable>
                </div>
            </div>
        );
    }
}

export default AlbumsView;