'use strict'

import 'bootstrap'
// const indexDisplay = require('./templates/index-gigs.handlebars')
// const events = require('./events.js')
// const api = require('./api.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#recordings-page').hide()
  $('#calendar-page').hide()
  $('#contact-page').hide()
  $('#bio-page').hide()
  $('#students-page').hide()
  document.getElementById('recordings-page').style.display = 'none'
  document.getElementById('calendar-page').style.display = 'none'
  document.getElementById('bio-page').style.display = 'none'
  document.getElementById('students-page').style.display = 'none'
  document.getElementById('contact-page').style.display = 'none'
  // events.addHandlers()
  const blurbs = function () {
    setTimeout(function () {
      $('#blurb3').removeClass('disappear')
    }, 1000)
    setTimeout(function () {
      $('#spotify-player').removeClass('disappear')
      $('#blurb2').removeClass('disappear')
    }, 2000)
    setTimeout(function () {
      $('#blurb4').removeClass('disappear')
    }, 2500)
    setTimeout(function () {
      $('#blurb5').removeClass('disappear')
    }, 3000)
  }
  $(document).ready(function () {
    blurbs()
  })
  // setTimeout(function () {
  //   $('#spotify-player').removeClass('disappear')
  //   $('#blurb2').removeClass('disappear')
  // }, 1000)
  // setTimeout(function () {
  //   $('#blurb3').removeClass('disappear')
  // }, 2000)
  // setTimeout(function () {
  //   $('#blurb4').removeClass('disappear')
  // }, 2500)

  // const sortByDate = function (gigs) {
  //   return gigs.sort(function compareNumbers (a, b) {
  //     return (new Date(a.date).getTime()) - (new Date(b.date).getTime())
  //   })
  // }

  // let apiUrl
  // const apiUrls = {
  //   production: 'https://mighty-tundra-49432.herokuapp.com',
  //   development: 'http://localhost:4741'
  // }
  //
  // if (window.location.hostname === 'localhost') {
  //   apiUrl = apiUrls.development
  // } else {
  //   apiUrl = apiUrls.production
  // }
  //
  // const indexGigs = () => {
  //   return $.ajax({
  //     url: apiUrl + '/gigs',
  //     method: 'GET'
  //   })
  // }
  //
  // indexGigs()
  //   .then((responseData) => $('.gigs-container').html(indexDisplay({ gigs: sortByDate(responseData.gigs) })))
  //   // .then((responseData) => $('#signInSuccess').html(editGigs({ gigs: responseData.gigs.reverse() })))
  //   .then(() => {
  //     $('.calendar-loader').hide()
  //     $('.calendar-load').hide()
  //   })
  //   .catch(console.log)

  const showAndHideContent = function (show) {
    const pagesArr = ['home', 'recordings', 'calendar', 'bio', 'students', 'contact']
    const hiddenPagesArr = pagesArr.filter(page => page !== show)
    hiddenPagesArr.forEach(page => {
      $(`#${page}`).removeClass('selected')
      $(`#${page}-page`).hide()
      $('body').removeClass(`${page}-background`)
    })
    $(`#${show}`).addClass('selected')
    $(`#${show}-page`).show()
    $('body').addClass(`${show}-background`)
    $('#overlay').removeClass('overlay')
    $('.navbar-toggler').attr('aria-expanded', 'false')
  }

  const onClickRecordings = function () {
    $('#mvt-2').addClass('disappear')
    $('#mvt-3').addClass('disappear')
    showAndHideContent('recordings')
    $('#mvt-1').removeClass('disappear')
    $('#mvt-2').removeClass('disappear')
    $('#mvt-3').removeClass('disappear')
    // const flipPlayers = function () {
    //   setTimeout(function () {
    //     $('#mvt-1').removeClass('disappear')
    //   }, 1500)
    //   setTimeout(function () {
    //     $('#mvt-2').removeClass('disappear')
    //   }, 2000)
    //   setTimeout(function () {
    //     $('#mvt-3').removeClass('disappear')
    //   }, 2500)
    // }
    // $(document).ready(function () {
    //   flipPlayers()
    // })
    // setTimeout(function () {
    //   $('#spotify-player').removeClass('disappear')
    // }, 1500)
  }

  const onClickStudents = function () {
    showAndHideContent('students')
  }

  const onClickContact = function () {
    showAndHideContent('contact')
  }

  const onClickCalendar = function () {
    showAndHideContent('calendar')
  }

  const onClickBio = function () {
    showAndHideContent('bio')
    $('#overlay').addClass('overlay')
  }

  const onClickHome = function () {
    showAndHideContent('home')
  }

  const adjustNavPadding = function () {
    setTimeout(function () {
      const isExpanded = $('.navbar-toggler').attr('aria-expanded')
      console.log(isExpanded)
      if (isExpanded === 'true') {
        // alert('expanded')
        $('#students').addClass('padded-item')
      } else {
        $('#students').removeClass('padded-item')
        // alert('not expanded')
      }
    }, 1000)
  }

    // const onSignIn = function (event) {
    //   $('.load-log').removeClass('disappear')
    //   event.preventDefault()
    //   const data = getFormFields(this)
    //   console.log('sign in data', data)
    //   api.signIn(data)
    //     .then(signInSuccess)
    //     .catch(console.log)
    // }

    // const indexGigs = function () {
    //   api.indexGigs()
    //     .then((responseData) => $('#handlebar-gigs').html(editGigs({ gigs: responseData.gigs.reverse() })))
    //     .catch(console.log)
    //   $('.initLog').hide()
    //   $('#signInSuccess').removeClass('disappear')
    //   $('.login-background').addClass('login-background2')
    //   $('.login-background2').removeClass('login-background')
    // }

    // const signInSuccess = function (data) {
    //   store.user = data.user
    //   indexGigs()
    // }

    // class Gig {
    //   constructor (data) {
    //     this.gig = {
    //       title: data.title,
    //       date: data.date.toString(),
    //       time: data.time,
    //       place: data.place,
    //       text: data.text
    //     }
    //   }
    // }

    // const onCreateGig = function (event) {
    //   event.preventDefault()
    //   const data = getFormFields(this)
    //   console.log('date parse: ', Date.parse(data.gig.date))
    //   const gig = new Gig(data.gig)
    //   api.createGig(gig)
    //     .then(indexGigs)
    //     .then(() => alert('success'))
    // }

    // const onEditGig = function (event) {
    //   event.preventDefault()
    //   const data = getFormFields(this)
    //   console.log('form fields', data)
    //   const gig = new Gig(data.gig)
    //   const gigId = $(event.target).data('id')
    //   api.updateGig(gig, gigId)
    //     .then(indexGigs)
    //     .then(() => alert('success'))
    // }
    //
    // const onDeleteGig = function (event) {
    //   event.preventDefault()
    //   const gigId = $(event.target).data('id')
    //   console.log('Delete gigId', gigId)
    //   api.deleteGig(gigId)
    //     .then(indexGigs)
    //     .then(() => alert('success'))
    // }

  $('.navbar-toggler').on('click', adjustNavPadding)
  $('#recordings').on('click', onClickRecordings)
  $('#home').on('click', onClickHome)
  $('#calendar').on('click', onClickCalendar)
  $('#bio').on('click', onClickBio)
  $('#students').on('click', onClickStudents)
  $('#contact').on('click', onClickContact)
  // $('#sign-in').on('submit', onSignIn)
  // $('#create-gig').on('submit', onCreateGig)
  // $('#handlebar-gigs').on('submit', '.update-gig', onEditGig)
  // $('#handlebar-gigs').on('click', '.delete-btn', onDeleteGig)
})
