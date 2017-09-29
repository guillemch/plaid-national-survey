<template>
  <div class="languages">
    <ul>
      <li><a href="">Cymraeg</a></li>
      <li class="active"><a href="">English</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'language-switcher'
}
</script>

<style lang="scss" scoped>
@import '../variables';

.languages {
  margin-left: auto;

  ul {
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    list-style: none;
    border-right: 1px $gray solid;

    a {
      display: block;
      color: $darkest-gray;
      text-decoration: none;
      padding: 1rem .75rem;

      &:hover {
        background: #fff;
      }
    }

    &.active a {
      font-weight: bold;
    }

    &:last-child {
      border-right: 0;
    }
  }
}
</style>
