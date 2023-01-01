<template>
    <div :class="$style.skeleton" />
</template>

<script setup>
const props = defineProps(['width', "height"])

const width = props.width;
const height = props.height;

</script>

<style lang="scss" module>
.skeleton {
    background: rgb(60, 60, 60);
    background: linear-gradient(90deg, rgba(60, 60, 60, 1) 0%, rgba(51, 51, 51, 1) 100%);
    background-size: 400% 400%;
    border-radius: 0.6rem;
    width: v-bind(width);
    height: v-bind(height);

    animation-name: skeleton;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

@keyframes skeleton {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>