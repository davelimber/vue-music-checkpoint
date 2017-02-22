import Vue from 'vue'

let myTunes = {}
let myLibrary = []
let testing = []

function saveMytunes() {
  localStorage.setItem('myTunes', JSON.stringify(myTunes))

}

function loadMytunes() {
  myTunes = JSON.parse(localStorage.getItem('myTunes')) || {}
}

loadMytunes()

export default {
  getSearch() {
    return searchTunes
  },

  getTracks() {
    loadMytunes()
    return myTunes

  },

  addTrack(track) {
    Vue.set(myTunes, track.track, track)
    saveMytunes()
  },

  removeTrack(track) {
    Vue.delete(myTunes, track.track)
    loadMytunes()
  },

  promoteTrack(track) {
    track.vote += 1
    Vue.set(myTunes, track.track, track)
    saveMytunes()

  },
  demoteTrack(track) {
    track.vote -= 1
    Vue.set(myTunes, track.track, track)
    saveMytunes()

  }
}

  // OCCASIONALLY YOU WILL RUN INTO ISSUES WHERE VUE WILL BE
    // UNAWARE THAT A CHANGE HAS OCCURED TO YOUR DATA
    // TO ELIMINATE THIS PROBLEM YOU CAN USE 
        // YOU CAN READ MORE ABOUT VUE.SET HERE
    // https://vuejs.org/v2/api/#Vue-set