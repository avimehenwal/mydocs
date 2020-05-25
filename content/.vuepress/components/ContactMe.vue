<template>
  <div class="w3-container">
    Do not feel shy, say hello, ask a question or hire me

  <form class="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin">
    <h2 class="w3-center">Contact Us</h2>

    <div class="w3-row w3-section">
      <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-user"></i></div>
        <div class="w3-rest">
          <input class="w3-input w3-border" name="last" type="text" placeholder="Name" v-model="name">
        </div>
    </div>

    <div class="w3-row w3-section">
      <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-envelope-o"></i></div>
        <div class="w3-rest">
          <input class="w3-input w3-border" name="email" type="text" placeholder="Email" v-model="email">
        </div>
    </div>

    <div class="w3-row w3-section">
      <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-pencil"></i></div>
        <div class="w3-rest">
          <textarea rows="10" cols="50" placeholder="Say hello, give your feedback or Hire Me" v-model="text" > </textarea>
        </div>
    </div>

    <button class="w3-button w3-block w3-section w3-blue w3-ripple w3-padding">Send</button>

  </form>

  </div>
</template>

<script>

// db.collection('messages').get()
// .then((snapshot) => {
//   snapshot.forEach((doc) => {
//     console.log(doc.id, '=>', doc.data());
//   });
// })
// .catch((err) => {
//   console.log('Error getting documents', err);
// })
// const postsCollection = db.collection('posts')
// const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')

export default {
  data () {
    return {
      name: null,
      email: null,
      text: null
    }
  },
  created: {
  },
  mounted() {
    this.addScriptInHead("/__/firebase/7.14.2/firebase-app.js")
    this.addScriptInHead("/__/firebase/7.14.2/firebase-analytics.js")
    this.addScriptInHead("/__/firebase/init.js")
    // this.addScriptInHead()
    this.fb()
  },
  methods: {
    addScriptInHead (src_url) {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', src_url)
      document.head.appendChild(recaptchaScript)
      console.log('Added to HEAD', src_url)
    },
    fb () {
      firebase.initializeApp({
        apiKey: "AIzaSyBAf_TVXfL-KTOUNX-JMMP0SKPpdFyjEtM",
        authDomain: "named-messenger-249020.firebaseapp.com",
        databaseURL: "https://named-messenger-249020.firebaseio.com",
        projectId: "named-messenger-249020",
        storageBucket: "named-messenger-249020.appspot.com",
        messagingSenderId: "813561716328",
        appId: "1:813561716328:web:f8639e19b977b065e3e5dd",
        measurementId: "G-03L1JFS732"
      })
      var query = firebase.firestore().collection('messages')
      console.log(query)
    }
  }
}
</script>

