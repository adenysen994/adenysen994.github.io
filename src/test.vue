<template>

</template>


    /*export default {
      const USER_KEY = 'user-storage'

      var app = new Vue({
        el: '#app',
        data: function () {
          return {
            email: '',
            user: [],
          }
        },
        created() {
          this.user = JSON.parse(localStorage.getItem(USER_KEY) || '[]')
        },
        methods: {
          saveuser() {
            this.user.push({
              email: this.guestname
            })
            this.user = ''
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.user))
          }
        }
      )
    }
    }),
    }*/

text: '',
page: 1,

<!--<script>
new Vue({
el: '#app',
data: {
newTodo: '',
todos: [],
},
methods: {
addTodo() {
this.todos.push({ text: this.newTodo, completed: false });
this.newTodo = '';
},
},
mounted() {
console.log('App mounted!');
if (localStorage.getItem('todos')) this.todos = JSON.parse(localStorage.getItem('todos'));
},
watch: {
todos: {
handler() {
console.log('Todos changed!');
localStorage.setItem('todos', JSON.stringify(this.todos));
},
deep: true,
},
},
});
</script>-->
<!--<script>
  /* eslint-disable no-undef */

  // delivering data to template
  export default {
    name: 'searchresults',
    data () {
      return {
        things: []
      }
    },
    created () { // on ready send ajax call
      this.getMyData()
    },
    methods: {
      getMyData () {
        // local call
        let uri = '../../Assets/goods.json'
        axios.get(uri)
          .then((response) => {
            for (i = 0; i < response.data.things.length; i++) {
              // push into Vue data context
              this.things.push(response.data.things[i])
            }
          })
          .then((response) => {
            console.table(this.item)
          })
          .catch((error) => {
            console.error(error)
          })
      }
    }
  }
</script>-->
<!--
<div class="mod-search-results">
  <ul class="results" v-if="things.length">
    <li class="item" v-for="thing in things">{{ thing }}</li>
  </ul>
</div>-->

<!--
 <div class="text-xs-center" id="pagination">
            <ul class="list-group">
              <li v-for="item in colection" class="list-group-item">
                {{item}}}
              </li>
            </ul>
            <hr>
            <div class="btn-toolbar">
              <div class="btn-group">
                <button class="btn-primary"
                v-for="p in pagination.pages" @click.prevent="setPage(p)">
                </button>
              </div>
            </div>
            Displaying from indexes {{ pagination.startIndex }} to {{ pagination.endIndex }}
          </div>
<script pagination>
  export default {
    data () {
      return {
        arr: ['0', '1', '2', '3', '4', '5', '6'],
        perPage: '3',
        pagination: {}
      }
    },
      computed: {
        collection () {
          return this.paginate(this.data)
        }
      },
      methods: {
        setPage (p) {
          this.pagination = this.paginator(this.data.length, p)
        },
        paginate (data) {
          return _.slice(data, this.pagination.startIndex, this.pagination.endIndex +1)
        },
        paginator (totalItems, currentPage) {
          var startIndex = (currentPage - 1) * this.perPage,
            startIndex: startIndex
          endIndex: endIndex,
            pages: _.range(1, Math.ceil(totalItems / this.perPage) + 1)
        }
      },
      created() {
        this.setPage(1)
      }
    }
  }
</script>-->

/*computed: {
goods () {
return this.$store.getters.goods
}
}*/


computed: {
filteredItems: function () {
return this.$options.itemsJson.Items.filter(
)
function retJsn(item){
return item.name.match(this.search)

}
