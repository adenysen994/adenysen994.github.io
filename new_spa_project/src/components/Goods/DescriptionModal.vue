<template>
    <v-dialog width="400px" v-model="modal">
      <v-btn flat color="orange" slot="activator">Опис</v-btn>

      <v-card>
        <v-container>
          <v-layout row>
            <v-flex xs12>
              <v-card-title>
                <h1 class="text--primary">Опис</h1>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex xs12>
              <v-card-text>
                {{description}}
              </v-card-text>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row>
            <v-flex xs12>
              <v-card-actions>
                <v-btn flat @click="onCancel">Закрити</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    props: ['description'],
    data () {
      return {
        modal: false
      }
    },
    methods: {
      onCancel () {
        this.modal = false
      }
    }
  }
</script>

<style></style>
