window.Vue = require('vue')

Vue.component('comment', {
    props: {
		img: String,
		title: String,
    content: String,
    id: String,      
  },
  data: () => {
    return {
      isActiveSeting: false,
      isVisible: 'comment',
      editCommentContent: ''
    }
  }, 
  methods:{
    editComment() {     
      this.editCommentContent = this.content
      this.isVisible = 'editForm'
    },
    editApplly(){
      this.$emit('edit', this.editCommentContent, this.id);
      this.isVisible = 'comment'
    },
    removeComment() {
      this.$emit('remove', this.id);    
    },
    showWarning() {
      this.isVisible = 'warning'
    },
    noRemoveComment() {
      this.isVisible = 'comment'
    }
  },
  template: `
  <div>
    <transition tag="div" name="coment-group" mode="out-in">
      <div class="card-comments" :key="id" v-if="isVisible === 'comment'" @click="isActiveSeting = !isActiveSeting" :class="{ active: isActiveSeting}">
        <transition name="coment-group" mode="out-in">
          <div class="setings" v-if="isActiveSeting">
            <button @click="showWarning"> <img src="./assets/img/remove.png" alt="remove-icon"> Remove</button>
            <button @click="editComment"> <img src="./assets/img/edit.png" alt="edit-icon"> Edit</button>
          </div>
        </transition>
        <img  v-bind:src="img" alt="avatar">
        <div class="card-comments-text">
            <span>{{title}}</span>
            <p>{{content}}</p>
        </div>
      </div>
      <div class="card-form-delete" v-else-if="isVisible === 'warning'">
        <p>Delete comment?</p>
        <button @click="noRemoveComment">No</button>
        <button id="card-form-delete-apply" @click="removeComment">Yes</button>
      </div>
      <div class="card-form-edit" v-else>
        <input type="text" placeholder="Write a new comment" id="edit-comment" v-model="editCommentContent">
        <button @click="editApplly"> <img src="./assets/img/paper-plane.png" alt="paper-plane-icon"> Send</button>
      </div>
  </transition>
  </div>
`
})