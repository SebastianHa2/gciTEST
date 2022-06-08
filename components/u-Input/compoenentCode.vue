<template>

    <label for="input-live">{{ value }}:</label>
    <b-form-input
      id="input-live"
      v-model="name"


      placeholder=:"placeholder"
      trim
    ></b-form-input>


</template>

<script>
module.exports = {
  props: ['value', 'customClass', 'customStyle', 'placeholder', 'model'],
}
</script>

