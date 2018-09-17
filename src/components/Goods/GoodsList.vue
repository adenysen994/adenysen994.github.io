<template>
    <v-container>
      <v-layout row justify-center mb-5>
        <v-flex xs12 sm6 offset-sm3>
          <h1 class="text--secondary mb-3">ТОВАРИ ОПТОМ ТА В РОЗДРІБ</h1>
          <v-flex xs12 sm6 md3>
            <v-text-field
              prepend-icon="search"
              placeholder="Пошук товарів"
              v-model="search"
              @keyup="resetPagination"
            ></v-text-field>
          </v-flex>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card
          class="elevation-10 mb-5"
          v-for="item in resultItems"
          :key="item.id"
          >
            <v-layout row>
              <v-flex xs4>
                <v-card-media
                  sm6
                  :src="item.image" height="200px">
                </v-card-media>
              </v-flex>
            </v-layout>
            <v-card-title class="headline mb-0">
              {{item.price}}
              <v-spacer></v-spacer>
              <div>
                <h3 class="headline mb-0">{{item.name}}</h3>
              </div>
            </v-card-title>
            <v-card-actions>
              <DescriptionModal :description="item.description"></DescriptionModal>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-spacer></v-spacer>
      <v-layout row justify-center mb-5>
        <v-flex xs12 sm6 offset-sm3>
          <div>
            <div>
                <v-btn v-for="(p, Index) in pagination.totalPages" :key=Index @click="setPage(p)">
                  {{p}}
                </v-btn>
            </div>
            {{pagination.startIndex}} з {{pagination.endIndex}}
          </div>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  import itemsJson from '../../Assets/Items'
  import DescriptionModal from './DescriptionModal'
  import * as _ from 'lodash'

  export default {
    itemsJson: itemsJson,
    data () {
      return {
        itemsJson: [],
        search: '',
        perPage: '2',
        pagination: {}
      }
    },
    components: {
      DescriptionModal: DescriptionModal
    },
    created () {
      this.setPage(1)
      itemsJson.then(function (data) {
        this.$options.itemsJson.Items = data.body.slice(0, 5)
      })
    },
    computed: {
      filteredItems () {
        var self = this
        return this.$options.itemsJson.Items.filter(function (item) {
          return item.name.match(self.search)
        })
      },
      resultItems () {
        return this.paginate(this.filteredItems)
      }
    },
    methods: {
      setPage (p) {
        this.pagination = this.paginator(this.$options.itemsJson.Items.length, p)
        console.log('p' + p)
      },
      paginate (itemsJson) {
        return _.slice(itemsJson, this.pagination.startIndex, this.pagination.endIndex + 1)
      },
      paginator (totalItems, currentPage) {
        const startIndex = (currentPage - 1) * this.perPage
        const endIndex = startIndex + +this.perPage - 1
        return {
          currentPage: currentPage,
          startIndex: startIndex,
          endIndex: endIndex,
          totalPages: _.range(1, Math.ceil(this.filteredItems.length / this.perPage) + 1)
        }
      },
      resetPagination () {
        this.setPage(1)
      }
    }
  }
</script>


