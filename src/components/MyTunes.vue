<template>
    <div>

        <p> My Songs </p>


        <div v-for="(song, index) in userSongs">
            <div class="card-stacked">
                <div class="card-content">
                    <p> Title: {{song.title}} </p>
                    <p> Artist: {{song.artist}} </p>
                    <p> Vote: {{song.vote}} </p>
                    <audio controls preload="none">
                        <source :src="song.preview" type="audio/mp4" />
                    </audio>
                    <button @click="deleteSong(song)">Delete Song</button>
                    <button @click="upVote(song)">Up</button>
                    <button @click="downVote(song)">Down</button>
                </div>
            </div>
        </div>


    </div>

</template>

<script>
    import myTunesService from '../services/mytunes-service'
    import itunesService from '../services/itunes-service'
    import itunes from './Itunes'

    export default {
        name: 'mytunes',
        // props: [song],
              data() {
            return {
               userSongs: {}
            }
        },
        mounted(){
                this.userSongs = myTunesService.getTracks()
        },
        methods: {
            deleteSong: function (song) {
                myTunesService.removeTrack(song)
                this.$parent.updateData()
            },
            upVote: function (song) {
                myTunesService.promoteTrack(song)
            },
            downVote: function (song) {
                myTunesService.demoteTrack(song)
            },

        },

    }

</script>