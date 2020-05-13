<template>
    <div>
        <ImageDetail> :srcList=this.thumbnailDefault :alt=this.categoryTitle></ImageDetail>
    </div>
</template>

<script>
export default {
    name: 'CategoryView',
    components: {
        ImageDetail : () => import('@/components/ImageDetail')
    },
    data: function() {
        return {
            thumbnailDefault: '',
            categoryTitle: ''
        }
    }
}
</script>