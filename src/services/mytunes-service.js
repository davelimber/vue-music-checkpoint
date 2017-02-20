import Vue from 'vue'

let myTunes = {}


function saveMytunes() {
  localStorage.setItem('myTunes', JSON.stringify(myTunes))

}

function loadMytunes() {
  myTunes = JSON.parse(localStorage.getItem('myTunes')) || {}
}

loadMytunes()

export default {
  getSearch() {
    console.log('in getSearch function')
    return searchTunes
  },

  getTracks() {
    console.log('myTunes get export')
    console.log('this is the export' + myTunes)
    // loadMytunes()
    return myTunes

  },
  addTrack(track) {

    Vue.set(myTunes, track.id, track)
    saveMytunes(track)

  },
  // addTrack(track) {
  //   myTunes.track1 = track
  //   console.log('added mytunes' + myTunes)
  //   // Vue.set(myTunes, track.id, track)
  //   // saveMytunes()
  //   console.log('added track')

  // },
  removeTrack(track) {
    Vue.delete(myTunes, track.trackId)
    saveMytunes()
  },
  promoteTrack() { },
  demoteTrack() { }
}

  // OCCASIONALLY YOU WILL RUN INTO ISSUES WHERE VUE WILL BE
    // UNAWARE THAT A CHANGE HAS OCCURED TO YOUR DATA
    // TO ELIMINATE THIS PROBLEM YOU CAN USE 
        // YOU CAN READ MORE ABOUT VUE.SET HERE
    // https://vuejs.org/v2/api/#Vue-set