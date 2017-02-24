<template>
    <div>
        <p> Itunes Search </p>

        <input type="text" v-model="userSearch" v-on:keyup.enter="getMusic" placeholder="enter artist or song">
        <button type="submit" @click="getMusic">Search</button>


        <div v-for="(song, index) in searchResults" :key="song">
            <div class="card-stacked">
                <div class="card-content">
                    <p> {{song.title}} </p>
                    <p> {{song.artist}} </p>
                    <audio controls preload="none">
                        <source :src="song.preview" type="audio/mp4" />
                    </audio>

                    <button @click="addMusic(index, song)">Add Song</button> {{song.title}}
                </div>
            </div>
        </div>
    </div>


    </div>

</template>

<script>
    import myTunesService from '../services/mytunes-service'
    import itunesService from '../services/itunes-service'

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
                var vm = this
                itunesService.getMusicByArtist(this.userSearch)

                    .then(function (response) {
                        var songList = response.results.map(function (song) {
                            return {
                                track: song.trackId,
                                title: song.trackName,
                                albumArt: song.artworkUrl60,
                                artist: song.artistName,
                                collection: song.collectionName,
                                price: song.collectionPrice,
                                preview: song.previewUrl
                            };
                        })
                        vm.searchResults = songList
                    })
            },

            addMusic(index, song) {
                song.vote = 0
                myTunesService.addTrack(song)
                myTunesService.getTracks()
            }
        },
    }

</script>