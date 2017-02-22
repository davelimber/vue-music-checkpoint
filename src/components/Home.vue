<template>
  <div class="home">
    <div class="row">
      <div class="col m6">
        <iTunes class="itunes"> </iTunes>
      </div>
      <myTunes class="mytunes">
        <div class="col m6">
      </myTunes>
      </div>
    </div>
</template>

<script>
  import myTunesService from '../services/mytunes-service'
  import itunesService from '../services/itunes-service'
  import iTunes from './Itunes'
  import myTunes from './MyTunes'

  export default {
    name: 'home',
    components: { iTunes, myTunes},
    data() {
      return {
        lastUpdate: Date.now()
      }
    },
    methods: {
      updateData() {
        this.lastUpdate = Date.now()
      }
    }
  }

</script>


<style>
  body {
    padding-top: 20px;
    background: url('http://hyperallergic.com/wp-content/uploads/2015/11/The_Sounds_of_Earth_Record_Cover_-_GPN-2000-001978.jpg');
    background-size: cover;
    background-attachment: fixed;
  }
  
  .mytunes {
    display: inline-block;
    min-height: 500px;
    min-width: 50%;
    background: white;
  }
  
  .itunes {
    display: inline-block;
    background: antiquewhite;
    min-height: 500px;
    min-width: 50%;
  }
</style>