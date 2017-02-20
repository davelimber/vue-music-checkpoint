<template>
    <div>

        <p> My Songs </p>


        <div v-for="(song, index) in userSongs">
            <div class="card-stacked">
                <div class="card-content">
                    <p> {{song.title}} </p>
                    <p> {{song.artist}} </p>
                    <audio controls preload="none">
                        <source :src="song.preview" type="audio/mp4" />
                    </audio>
                    <button @click="deleteSong">Delete Song</button>
                </div>
            </div>
        </div>


    </div>

</template>

<script>
    import myTunesService from '../services/mytunes-service'
    import itunesService from '../services/itunes-service'

    export default {
        name: 'mytunes',
        data() {
            return {
                userSongs: myTunesService.getTracks()
            }
        },
        methods: {
            deleteSong: function (song) {
                myTunesService.removeTrack(song)
            }

        }
    }

</script>