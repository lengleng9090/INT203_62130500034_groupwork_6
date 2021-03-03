const constraints = {
    username: {
        presence: true,
        length: {
            minimum: 6,
            message: "must be at least 6 characters"
          }
    },
    password: {
        presence: true,
        length: {
            minimum: 6,
            message: "must be at least 6 characters"
          }
    
    },
    email: {
        presence: true,
        email: true
    },
    confirmPassword: {
        equality: "password"
      }
}

const app = {
    data() {
        return {
            username: null,
            password: null,
            confirmPassword:null,
            email:null,
            errors: null,
            firstname: 'Thanapat',
            lastname: 'Loharattanavisit',
            imageurl: './images/profile.jpg',
            age: 20,
            birthday: '08/05/2000',
            caption: 'I like a sandwich.'
        }
    },
    methods: {
        checkForm(){
            this.errors = validate({username: this.username,
                                    password: this.password,
                                    email:this.email,
                                    confirmPassword:this.confirmPassword
                                    },
                                    constraints)
            if(!this.errors){
                alert("Registered successfully.")
            }
        }
    }
}
var mountedApp = Vue.createApp(app).mount('#app');