<template>
  <b-button
    :variant="buttonVariant"
    :size="size"
    :class="{
      'w-100': isFullWidth,
    }"
    @click="runOnClickHandler"
  >
    {{ text }}
  </b-button>
</template>

<script>
module.exports = {
  props: [
    'idx', 'text', 'variant', 'isOutlined',
    'size', 'fullWidth', 'onClickHandler',
  ],
  computed: {
    isFullWidth() {
      return eval(this.fullWidth)
    },
    buttonVariant() {
      if (eval(this.isOutlined)) return `outline-${this.variant}`

      return this.variant
    },
  },
  methods: {
    runOnClickHandler() {
      if (!this.onClickHandler || this.onClickHandler === 'undefined') return

      eval(this.onClickHandler)
    }
  },
}
</script>