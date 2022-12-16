<template>
    <div class="panel-inventory">
        <Wrapper>
            <div class="container-inventory">
                <Item :amount="1" :img="img" :id="Date.now()" />
                <Item :amount="1" :img="img" :id="Date.now()" />
                <Item :amount="1" :img="img" :id="Date.now()" />
                <Item :amount="1" :img="img" :id="Date.now()" />
                <Item :amount="1" :img="img" :id="Date.now()" />
                <Item :amount="1" :img="img" :id="Date.now()" />
                <Item :amount="1" :img="img" :id="Date.now()" />
                <Item :amount="1" :img="img" :id="Date.now()" />
                <Item :amount="1" :img="img" :id="Date.now()" />
                <Item :amount="1" :img="img" :id="Date.now()" />
                <Item :amount="1" :img="img" :id="Date.now()" />
                <Item :amount="1" :img="img" :id="Date.now()" />
                <Item :amount="1" img="" :id="Date.now()" />
                <Item :amount="1" img="" :id="Date.now()" />
                <Item :amount="1" img="" :id="Date.now()" />
                <Item :amount="1" img="" :id="Date.now()" />
                <Item :amount="1" img="" :id="Date.now()" />
                <Item :amount="1" img="" :id="Date.now()" />
                <Item :amount="1" img="" :id="Date.now()" />
                <Item :amount="1" img="" :id="Date.now()" />
                <Item :amount="1" img="" :id="Date.now()" />
                <Item :amount="1" img="" :id="Date.now()" />
                <Item :amount="1" img="" :id="Date.now()" />
                <Item :amount="1" img="" :id="Date.now()" />
                <Item :amount="1" img="" :id="Date.now()" />
            </div>
        </Wrapper>
    </div>
</template>

<script setup>
import Wrapper from '../UI/Wrapper.vue';
import Item from './Item.vue';

import img from "@/assets/img/img-item.png";
</script>