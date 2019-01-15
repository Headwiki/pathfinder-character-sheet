import Api from '@/services/Api'

export default {
  fetchCharacter () {
    return Api().get('character/byname/Lia Sarenwell')
  }
}
