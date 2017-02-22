import Vue from 'vue'

let myTunes = {}
let myLibrary = []
let testing = []

function saveMyLib(song) {
console.log(myTunes)

  // myLibrary.push(song)
  // console.log('myLibrary')
  // console.log(myLibrary)
  // var x = JSON.stringify(myLibrary)
  // console.log('this is x ')
  // console.log(x)
  // testing.push(myLibrary)
  saveMytunes()

  console.log('testing')
  console.log(myTunes)
}


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
    loadMytunes()
    return myTunes

  },
  addTrack(track) {
    var vm = this
    // track.added = true
    // track.vote = 0
    Vue.set(myTunes, track.track, track)
    saveMytunes()


    console.log('in addTrack')

  },
  removeTrack(track) {
    console.log('starting on removeTrack')
    console.log(track)
    Vue.delete(myTunes, track.track)
    saveMytunes()
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