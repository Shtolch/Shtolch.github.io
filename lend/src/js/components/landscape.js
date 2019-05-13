window.Vue = require('vue')
const uuidv1 = require('uuid/v1');

Vue.component('landscape', {
    data: () => {
      return {
        comments: [
          {
            id: '59e850a0-70cb-11e9-80de-054fc6710502',
            title: 'Land Warrior 17',
            img: './assets/img/jasonx.png',
            content: ' I ve been there, that was nice meeting on battleground!'
          },
          {
            id: '064ad3f0-70cb-11e9-80de-054fc6710502',
            title: 'Land Warrior 17',
            img: './assets/img/jasonx1.png',
            content: ' I ve been there, that was nice meeting on battleground! '
          },
          {
            id: '1a0b7020-70cb-11e9-80de-054fc6710502',
            title: 'WWII',
            img: './assets/img/jasonx2.png',
            content: ' Thats awesome!'
          }
        ],
        addCommentBtn: false,
        addCommentVal: ''
      } 
    },
    watch: {
      addCommentVal(val) {
        this.addCommentBtn = (val) ? true : false;
      }
    },
    methods:{ 
      addComment() {
              if ( this.addCommentVal == "" ) {
                  return;
              }
        var itemAdd = {
          id: uuidv1(),
          title: 'WWII',
          img: './assets/img/jasonx2.png',
          content: this.addCommentVal
        }
        this.comments.unshift(itemAdd);
        this.addCommentVal = ''
      },
      removeFrom(idComment) {
        this.comments =  this.comments.filter(function(el) {
            return el.id !== idComment
        })
      },
      editFrom(comment, idComment) {     
        this.comments = this.comments.map(function(el) {
          if( el.id === idComment){
            el.content = comment
            return el
          }
          else return el
        });
      },   
    },
    template: `
      <div class="card">  
        <div class="card-images">
          <img src="./assets/img/NoPath.png" alt="landscape">
        </div>
        <div class="card-info">
          <h3>Beautiful landscape</h3>
          <a href="#"> <img src="./assets/img/cash.png" alt="donate-icon"> <span> Donate Author</span></a>
        </div>
        <div class="card-form">
          <div class="card-form-active">
              <input type="text" placeholder="Write a new comment"  v-model="addCommentVal">
              <transition name="slide-fade" >
                <button @click="addComment" v-if="addCommentBtn" id="comment-apply"> <img src="./assets/img/paper-plane.png" alt="paper-plane-icon"> Send</button>
              </transition>
          </div>
        </div> 
        <comment
          @edit="editFrom"
          @remove="removeFrom"
          v-for="(comment, index) in comments"
          v-bind:key=comment.id
          v-bind:id=comment.id
          v-bind:img=comment.img
              v-bind:content=comment.content
              v-bind:title=comment.title
        />
      </div>
  `
  })