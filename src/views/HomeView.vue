<template>
<div>
  <h1>Affiche de la carte</h1>
  <my-maps></my-maps>
</div>
</template>

<script>
import MyMaps from '@/components/MyMaps.vue'


  export default {
    name: 'Home',

    components: {
        MyMaps

    },
  }
</script>
