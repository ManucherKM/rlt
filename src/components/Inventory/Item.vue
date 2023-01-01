<template>
    <div @dragstart="startDrag" @dragover="overDrag" @dragend="endDrag" @dragenter="enterDrag" @dragleave="leaveDrag"
        :draggable="isDraggable" :class="styles">
        <div v-if="!isEmptyItem">
            <img class="img" :src="item.img" alt="img-item" />
            <div class="amount">
                {{ item.amount }}
            </div>
        </div>
        <div v-else class="empty-img"></div>
    </div>
</template>

<script setup>
import { useInventoryStore } from '@/stores/inventory';
import { ref } from 'vue';
const { item } = defineProps(["item"]);

const invetoryItems = useInventoryStore();

const isEmptyItem = ref(false);
const isDraggable = ref(true);

if (!item.img || !item.id || !item.amount) {
    isEmptyItem.value = true;
    isDraggable.value = false;
}

const styles = ref("wrapper-item");

function endDrag() {
    styles.value = "wrapper-item";
    invetoryItems.change()
}

function startDrag(e) {
    styles.value = "wrapper-item opacity item-active";
    invetoryItems.updatePrev(item);
}

function enterDrag() {
    styles.value = "wrapper-item item-hover";
    invetoryItems.updateNext(item);
}

function leaveDrag() {
    styles.value = "wrapper-item";
}

function overDrag(e) {
    e.stopPropagation();
}

</script>