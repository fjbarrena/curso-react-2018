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
}

export default AlbumService;