import Vue from 'vue'
import Router from 'vue-router'
import Character from '@/components/Character'
import NewCharacter from '@/components/NewCharacter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/character',
      name: 'character',
      component: Character
    }, {
      path: '/character/new',
      name: 'newCharacter',
      component: NewCharacter
    }
  ]
})
