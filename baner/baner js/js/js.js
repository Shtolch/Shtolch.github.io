var images = [ 
    {
        img: 'url(img/1.png)',
        direction: 'bottom'
    },
    {
        img: 'url(img/2.png)',
        direction: 'bottom'
    },
    {
        img: 'url(img/3.png)',
        direction: 'right'
    },
    {
        img: 'url(img/4.png)',
        direction: 'left'
    },
    {
        img: 'url(img/5.png)',
        direction: 'right'
    },
    {
        img: 'url(img/6.png)',
        direction: 'top'
    },


];

var i = 0
$('#background').css('background-image', images[i].img)

setInterval(function() {
   $('#background').css('background-image', images[i].img)
   i = i + 1
   if (i == images.length) { i = 0 }
        $('#banner').removeClass()
        $('#banner').addClass(images[i].direction)
        $('#banner').css('background-image', images[i].img)
}, 4000) 


    
  