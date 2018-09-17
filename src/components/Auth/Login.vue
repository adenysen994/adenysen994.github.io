<template>
    <v-container fluid fill-height class="back">
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
          <v-card class="elevation-12">
            <v-toolbar dark color="yellow darken-2">
              <v-toolbar-title>Вхід</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid" validation>
                <v-text-field prepend-icon="alternate_email" name="Email" label="Email" type="text" v-model="email" :rules="emailRules"></v-text-field>
                <v-text-field prepend-icon="pan_tool" name="Пароль" label="Пароль" id="password" type="password" :counter="6" v-model="password" :rules="passwordRules"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                 color="yellow darken-2"
                @click="onSubmit(); login();"
                 :loading="loading"
                :disabled="!valid  || loading"
              >Зайти</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        valid: false,
        emailRules: [
          v => !!v || 'Введіть E-mail',
          v => /.+@.+/.test(v) || 'E-mail має бути правильним'
        ],
        passwordRules: [
          v => !!v || 'Введіть Пароль',
          v => (v && v.length >= 6) || 'Пароль має бути коротшим за 6 символів'
        ]
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onSubmit () {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password
          }
          this.$store.dispatch('loginUser', user)
            .then(() => {
              this.$router.push('/goods')
            })
            .catch(err => console.log(err))
        }
      }
      // login () {
      //   const { username, password } = this
      //   this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
      //     this.$router.push('/goods')
      //   })
      // }
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
