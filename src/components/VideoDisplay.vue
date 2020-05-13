<template>
    <div class="row" id="photoInformation">
        <div class="offset-1 col-10" id="photoHeader">
            <div class="row">
                <h2 class="col-12">{{ title }}</h2>
                <div class="col-12">
                    <iframe class="w-100" height="450" :src=src 
                      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                     allowfullscreen></iframe>
                </div>
            </div>
            <div class="col-9 offset-2">
                <description :descriptionText=descriptionText :channelTitle=channelTitle :dimensions=dimensions
                :tags=tags :downloadUrl=downloadUrl></description>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'CustomFrame',
    props: {
        src: String,
        title: String,
        descriptionText: String,
        channelTitle: String,
        dimensions: String,
        tags: String,
        downloadUrl: String
    }
}
</script>
<style scoped>
</style> 