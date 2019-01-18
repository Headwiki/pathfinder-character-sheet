<template>
  <form action="">
    <fieldset class="">
      <legend>Character Info</legend>
      <div>
        <label for="characterName">Character Name</label>
        <input type="text" name="characterName" id="characterName" size="15">
      </div>
      <div>
        <div class="inline-block">
          <label for="gender">Gender</label>
          <select name="gender" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="right">
          <label for="age">Age</label>
          <input type="text" name="age" id="age" size="3">
        </div>
      </div>
      <div>
        <div class="inline-block">
          <label for="height">Height</label>
          <input type="text" name="height" id="height" size="3"> feet
        </div>
        <div class="inline-block right">
          <label for="weight">Weight</label>
          <input type="text" name="weight" id="weight" size="3"> lbs
        </div>
      </div>
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
    display: inline-grid;
    grid-row-gap: 15px;
  }

  fieldset > div {
    grid-column-gap: 25px;
  }

  label {
    margin-right: 5px;
  }

  form {
    display: inline-grid;
  }
  
  .inline-grid {
    display: grid;
    grid-row-gap: 15px;
  }

  .nowrap {
    white-space: nowrap;
  }

  .column {
    grid-column-gap: 25px;
  }

  .inline-block {
    display: inline-block;
  }

  .right {
    float: right;
  }

</style>
