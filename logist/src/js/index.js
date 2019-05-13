// Main js file

// another js file (example)
import './navBar.js'
import './carousel.js'
import Vue from 'vue/dist/vue.js'
import { ObserveVisibility } from 'vue-observe-visibility'


(function ($) {
    $(document).ready(function () {

        Vue.directive('observe-visibility', ObserveVisibility)
        
        new Vue({
            el: '#video',
            data: {
                show: true,
                isVisible: true,
            },
            methods: {
                visibilityChanged (isVisible) {
        
                  this.isVisible = isVisible;
                  console.log(isVisible); 
        
                  if (!isVisible) {
                    this.show = true;
                  }
                },
        
                showPlayer(e){
                    e.preventDefault()
                    this.show = false;
                }
            },
        });


         /****** call-block ******/
        $('#floating-btn').click( function(){
            $('#call-form').css('right', "14px");
        }) 

        
        $('.closed-call-form').click( function(){
            $('#call-form').css('right', "-500px");
        })


        var positionCallForm = $('#call-form').css('right');

        if ( positionCallForm = "14px") { 
            $(document).mouseup(function (e){ 
                var ourBlock = $("#call-form");
                if (!ourBlock.is(e.target) && ourBlock.has(e.target).length === 0) { 
                    $('#call-form').css('right', "-500px");
                }   
            }); 
        }
        /****** call-block ******/
        
    });
})(jQuery);