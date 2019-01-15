<template>
  <div>
    <h1>Character</h1>
    <div>
      <pre>
        {{ character }}
      </pre>
    </div>
  </div>
</template>
<script>
import CharacterService from '@/services/CharacterService'
export default {
  name: 'character',
  data: () => ({
    character: ''
  }),
  mounted () {
    this.getCharacter()
  },
  methods: {
    async getCharacter () {
      const response = await CharacterService.fetchCharacter()
      this.character = response.data
    }
  }
}
</script>

