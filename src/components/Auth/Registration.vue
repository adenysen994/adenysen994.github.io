<template>
    <v-container fluid fill-height class="back">
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
          <v-card class="elevation-12">
            <v-toolbar dark color="yellow darken-2">
              <v-toolbar-title>Реєстрація</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid"  lazy-validation>
                <v-text-field prepend-icon="alternate_email" name="Email" label="Email" type="text" v-model="email" :rules="emailRules"></v-text-field>
                <v-text-field prepend-icon="lock" name="Пароль" label="Пароль" id="password" type="password" :counter="6" v-model="password" :rules="passwordRules"></v-text-field>
                <v-text-field prepend-icon="lock" name="Підтвердити пароль" label="Підтвердити пароль" id="confirm_pass" type="password" :counter="6" v-model="confirmPassword" :rules="confirmPasswordRules"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="yellow darken-2"
                @click="saveUser(); onSubmit();"
                :loading="loading"
                :disabled="!valid  || loading"
              >Створити акаунт!</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  const STORAGE_KEY = 'user-storage'
  export default {
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        valid: false,
        userdata: [],
        emailRules: [
          v => !!v || 'Введіть E-mail',
          v => /.+@.+/.test(v) || 'E-mail має бути правильним'
        ],
        passwordRules: [
          v => !!v || 'Введіть Пароль',
          v => (v && v.length >= 6) || 'Пароль має бути коротшим за 6 символів'
        ],
        confirmPasswordRules: [
          v => !!v || 'Введіть Пароль',
          v => v === this.password || 'Паролі повинні збігатися'
        ]
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    created () {
      this.userdata = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    },
    methods: {
      saveUser () {
        this.userdata.push({
          email: this.email,
          password: this.password
        })
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.userdata))
      },
      onSubmit () {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password
          }
          this.$store.dispatch('registerUser', user)
            .then(() => {
              this.$router.push('/login')
            })
            .catch(err => console.log(err))
        }
      }
    }
  }
</script>

<style scoped>
  .back {
    background-image: url("../../Assets/marketplace.jpg");
    background-size: cover;
    width: 100%;
    height: 100%;
  }
</style>
