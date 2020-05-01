<template>
    <div>
        <ImageDetail> :srcList=this.thumbnailList alt="Vue Logo"></ImageDetail>
    </div>
</template>

<script>
export default {
    name: 'HomeView',
    data: function() {
        return {
            thumbnailList: []
        }
    },
    components: {
        ImageDetail : () => import('@/components/ImageDetail')
    },
    methods: {
        getThumbnails: function () {
            let sessionKeys = Object.keys(sessionStorage);
            let list = [];
            for (let i = 0; i < sessionKeys.length; ++i) {
                let item = sessionStorage.getItem(sessionKeys[i]);
                let jsonArray = JSON.parse(item);
                for (let i = 0; i < 2; ++i) {
                    list[list.length] = jsonArray[i].snippet.thumbnails.high.url;
                }
            }
            this.thumbnailList = list;
        }
    },
    mounted: function() {
        this.getThumbnails();
    }
}
</script>
<style scoped>
</style>