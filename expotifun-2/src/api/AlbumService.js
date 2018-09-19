import  axios  from 'axios';

class AlbumService {
    constructor() {

    }

    async findAll() {
        return axios.get('http://localhost:3000/album');
    }

    async findOne(id) {
        return axios.get('http://localhost:3000/album?id=' + id);
    }

    async getSongsOfAlbum(albumId) {
        return axios.get('http://localhost:3000/songs?albumId=' + albumId);
    }

    async addSongToAlbum(albumId, songName, songDuration, popularity) {
        axios.get('http://localhost:3000/songs?albumId=' + albumId).then(
            (album) => {
                console.log(album);
                album.data[0].songs.push(
                    {
                        name: songName,
                        duration: songDuration,
                        popularity: popularity
                    }
                );

                axios.put('http://localhost:3000/songs/' + albumId, album).then(
                    (success) => {
                        console.log("Editado correctamente");
                    }
                )
            }
        )
    }
}

export default AlbumService;