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
    console.log(myTunes[0])
    saveMytunes();
  },

  removeTrack(track) {
    Vue.delete(myTunes, track.id)
    saveMytunes()
  },

  promoteTrack(track) {
    track.vote += 1
    Vue.set(myTunes, track.id, track)
    saveMytunes()

  },
  demoteTrack(track) {
    track.vote -= 1
    Vue.set(myTunes, track.id, track)
    saveMytunes()

  },
  sortTunes() {
    // console.log(myTunes)
    var objkeys = Object.values(myTunes)
    var sort_by = function (field, reverse, primer) {

      var key = primer ?
        function (x) { return primer(x[field]) } :
        function (x) { return x[field] };

      reverse = !reverse ? 1 : -1;

      return function (a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
      }
    }
    objkeys.sort(sort_by('vote', true, parseInt));
    console.log(objkeys)
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

