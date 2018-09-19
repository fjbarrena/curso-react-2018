import React, { Component } from "react";
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import AlbumService from "../../api/AlbumService";

class Icons extends Component {
  albumId = 0;

  constructor(props) {
    super(props);

    this.state = {
      albumId: 0,
      songTitle: "",
      songDuration: "",
      popularity: 0
    }
  }

  save() {
    console.log(this.state);
    const albumService = new AlbumService();

    albumService.addSongToAlbum(this.state.albumId,
      this.state.songTitle,
      this.state.songDuration,
      this.state.popularity);
  }


  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            AlbumId
          </div>

          <div className="col-md-8">
            <InputText value={this.albumId} onChange={(e) => this.albumId = e.target.value}  />
            <InputText value={this.state.albumId} onChange={(e) => this.setState({albumId: e.target.value})} />
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-4">
            Nombre canción
          </div>

          <div className="col-md-8">
            <InputText value={this.state.songTitle} onChange={(e) => this.setState({songTitle: e.target.value})} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            Duración
          </div>

          <div className="col-md-8">
            <InputText value={this.state.songDuration} onChange={(e) => this.setState({songDuration: e.target.value})} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            Popularidad
          </div>

          <div className="col-md-8">
            <InputText value={this.state.popularity} onChange={(e) => this.setState({popularity: e.target.value})} />
          </div>
        </div>

        <Button label="Save" onClick={() => this.save()} />
      </div>
    );
  }
}

export default Icons;
