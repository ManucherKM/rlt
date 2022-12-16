<template>
    <div class="wrapper-item">
        <div @drag="drag" @drop="drop" v-if="isRender">
            <img class="img" :src="img" alt="img-item">
            <div class="amount">
                {{ props.amount }}
            </div>
        </div>
        <div @drag="drag" @drop="drop" v-else class="empty-img"></div>
    </div>
</template>

<script setup>
import { useInventoryStore } from '@/stores/inventory';
const props = defineProps(["img", "amount", "id"]);

const { img, id, amount } = props;

let isRender = true;

if (!img || !id || !amount) {
    isRender = false;
}

const items = useInventoryStore();


// function drop(e) {
//     console.log(e);
// }

function drag() {
    console.log(items.change());
}

</script>