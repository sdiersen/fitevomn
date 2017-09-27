$ = require 'jquery'

do fill = (item = 'The best part of our member\'s day everyday') ->
	$('.tagline').append "#{item}"
fill