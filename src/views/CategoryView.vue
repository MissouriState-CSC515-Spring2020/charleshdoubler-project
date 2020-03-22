<template>
    <b-row>
        <vue-headful
            title="Basketball"
            description="Categories"
        />
        <b-col class="pl-5 pr-5 pt-3 text-center">
            <h2>category: {{this.category}}</h2>
            <b-row>
                <b-col v-for="i in 4" :key="i" class="p-2" cols="10" sm="5" md="3" lg="3">
                    <image-detail
                        :asset="require('@/assets/Sport-Basketball.jpg')"
                        :clickFunc="routeToSingleView"
                    />
                </b-col>
                <b-col cols="12">
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
import ImageDetail from '@/components/ImageDetail' 
export default {
    name: 'CategoryView',
    components: {
        ImageDetail
    },
    methods: {
        routeToSingleView() {
            this.$router.push('/about')
        }
    }
}
</script>