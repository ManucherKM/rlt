<template>
    <div class="wrapper-inventory">
        <div class="interaction">
            <div class="card-info">
                <CardInfo />
            </div>
            <div class="inventory">
                <Inventory />
            </div>
        </div>
        <div v-if="isMessage" class="notification">
            <Message />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Message from '../Message.vue';
import CardInfo from './CardInfo.vue';
import Inventory from './Inventory.vue';

const isMessage = ref(true);
</script>