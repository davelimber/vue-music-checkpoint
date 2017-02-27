<template>
    <div>
        <p> Itunes Search </p>
        <div class="text-white">
            <input type="text" v-model="userSearch" v-on:keyup.enter="getMusic" placeholder="enter artist or song">
            <button type="submit" @click="getMusic">Search</button>
        </div>
        <div v-for="song in searchResults">
            <div class="card-stacked">
                <div class="card-content">
                    <p> {{song.title}} </p>
                    <p> {{song.artist}} </p>
                    <audio controls preload="none">
                        <source :src="song.preview" type="audio/mp4" />
                    </audio>
                    <button @click="addMusic(song)">Add Song</button> {{song.title}}
                </div>
            </div>
        </div>
    </div>


    </div>

</template>

<script>
    import myTunesService from '../services/mytunes-service'
    import itunesService from '../services/itunes-service'
    import mytunes from './MyTunes'

    export default {
        name: 'itunes',
        data() {
            return {
                userSearch: '',
                searchResults: [],
                userSelection: [],
            }
        },
        methods: {
            getMusic() {
                itunesService.getMusicByArtist(this.userSearch)
                    .then(res => {
                        res.json().then(tracks => {
                            console.log(tracks)
                            this.searchResults = tracks.results.map(function (song) {
                                return {
                                    title: song.trackName,
                                    albumArt: song.artworkUrl60,
                                    artist: song.artistName,
                                    collection: song.collectionName,
                                    price: song.collectionPrice,
                                    preview: song.previewUrl,
                                    id: song.trackId
                                }
                            })
                        })
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            addMusic(song) {
                if (myTunesService.checkTrack(song) === false) {
                    myTunesService.addTrack(song)
                }
                this.$parent.updateData()
            }
        }
    }

</script>