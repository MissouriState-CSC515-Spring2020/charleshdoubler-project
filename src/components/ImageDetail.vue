<template>
    <b-row>
        <b-col class="mx-auto text-center">
            <img class="w-75" @click="clickFunc()" :src="asset" alt="image detail"/>
            <div class="w-75 mx-auto mt-3">
                
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'ImageDetail',
    props: ['asset', 'title', 'desc', 'clickFunc']
}
</script>

<style scoped>
img {
    border-radius: 15px;
}
</style>