<template>
  <form action="">
    <fieldset>
      <legend>Character Info</legend>
      <label for="characterName">Character Name</label>
      <input type="text" name="characterName" id="characterName">
    </fieldset>
  </form>
</template>
<script>
export default {
  name: 'newCharacter',
  data: () => {
    return ({})
  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style>
  fieldset {
    display: inline-block;
  }

  label {
    margin-right: 5px;
  }
</style>
