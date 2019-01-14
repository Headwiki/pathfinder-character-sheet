<template>
  <div>
    <h1>Character</h1>
    <div>{{ character }}</div>
  </div>
</template>
<script>
const axios = require('axios')
const API_URL = 'http://localhost:5000/api/character/byname/Lia%20Sarenwell'
export default {
  name: 'Character',
  data: () => ({
    error: '',
    character: 'a'
  }),
  mounted () {
    axios
      .get(API_URL)
      .then(response => {
        response.json()
      })
      .then(result => {
        if (!result) {
          this.character = 'empty'
        } else {
          this.character = result
        }
      })
  },
  methods: {}
}
</script>

