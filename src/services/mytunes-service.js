import Vue from 'vue'

let myTunes = []
let myLibrary = []


function saveMytunes() {
  localStorage.setItem('myTunes', JSON.stringify(myTunes))

}

function loadMytunes() {
  myTunes = JSON.parse(localStorage.getItem('myTunes')) || {}
}

loadMytunes()

export default {
  getTracks() {
    loadMytunes()
    return myTunes
  },

  addTrack(track) {
    Vue.set(myTunes, track.id, track)
    track.vote = 0
    saveMytunes();
    // loadMytunes();
  },

  removeTrack(track) {
    Vue.delete(myTunes, track.id)
    saveMytunes()
  },

  promoteTrack(track) {
    track.vote += 1
    Vue.set(myTunes, track.id, track)
    saveMytunes()
    // loadMytunes()


  },
  demoteTrack(track) {
    track.vote -= 1
    Vue.set(myTunes, track.id, track)
    saveMytunes()
    // loadMytunes()
  },
  sortTunes() {
    console.log(myTunes)
    // var objkeys = Object.values(myTunes)
    // console.log(objkeys)
    // console.log(objkeys[0].vote)
    // objkeys = objkeys.sort(function (a, b) {
    //   return b.votes - a.votes
    // })
    // console.log(objkeys)
    // myTunes = objkeys
    // console.log(myTunes)
    saveMytunes()
 
  },
  checkTrack(track) {
    var ids = track.id
    var objkeys = Object.keys(myTunes)
    for (var i = 0; i < objkeys.length; i++) {
      if (objkeys[i] == ids) {
        return Materialize.toast('That song is already on your playlist', 4000);
      }
    } return false
  }
}

