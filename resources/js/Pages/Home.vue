<template lang="pug">
    div.home
        h3 {{count}}
        button(@click="$store.commit('INCREMENT')") Add
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'home',
        computed: {
            ...mapState({
                count: state => state.count
            })
        }
    }
</script>