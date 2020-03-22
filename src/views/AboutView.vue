<template>
    <b-row>
        <vue-headful
            title="Basketball"
            description="About"
        />
        <b-col class="pl-5 pr-5 pt-3 text-center">
            <image-detail
            :asset="require('@/assets/Sport-Basketball.jpg')"
            :clickFunc="routeToSingleView"
            title="Basketball"
            desc="Basketball Picture "
            />
        </b-col>
    </b-row>
</template>

<script>
import ImageDetail from '@/components/ImageDetail' 
export default {
    name: 'AboutView',
    components: {
        ImageDetail
    },
    methods: {
        routeToSingleView() {
            this.$router.push('/home')
        }
    }
}
</script>

<style scoped>
</style>
