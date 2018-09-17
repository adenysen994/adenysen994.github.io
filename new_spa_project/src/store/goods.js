export default {
  state: {
    goods: [
      {
        tittle: 'Fanta',
        description: 'drink',
        id: '1'
      },
      {
        tittle: 'Coca-Cola',
        description: 'drink',
        id: '2'
      },
      {
        tittle: 'Pepsi',
        description: 'drink',
        id: '3'
      },
      {
        tittle: 'Oreo',
        description: 'cookies',
        id: '4'
      },
      {
        tittle: 'Snikers',
        description: 'bar',
        id: '5'
      },
      {
        tittle: 'Lays',
        description: 'chips',
        id: '6'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    goods (state) {
      return state.goods
    }
  }
}
