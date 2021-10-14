<template>
    <div class="home">
        <h3>{{count}}</h3>
        <el-button type="primary" @click="$store.commit('INCREMENT')">累加</el-button>
    </div>
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