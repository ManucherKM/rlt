<template>
    <div class="panel-inventory">
        <Wrapper>
            <div draggable="false" class="container-inventory">
                <Item v-for="item in invetoryItems" :item="item" :key="item.id" />
            </div>
        </Wrapper>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useInventoryStore } from '@/stores/inventory';

import Wrapper from '../UI/Wrapper.vue';
import Item from './Item.vue';

const invetoryItems = computed(() => useInventoryStore().invetoryItems);
</script>