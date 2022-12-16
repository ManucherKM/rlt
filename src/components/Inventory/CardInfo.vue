<template>
    <Wrapper>
        <div class="wrapper-card-info">
            <div class="wrapper-img">
                <img src="@/assets/img/info-img.png" alt="info-img" class="img" />
                <div class="glass"></div>
            </div>
            <div class="wrapper-info">
                <div class="title">
                    <Skeleton width="190px" height="26px" />
                </div>
                <div class="subtitle">
                    <div class="subtitle-skeleton">
                        <Skeleton width="155px" height="10px" />
                    </div>
                    <div class="subtitle-skeleton">
                        <Skeleton width="190px" height="10px" />
                    </div>
                    <div class="subtitle-skeleton">
                        <Skeleton width="170px" height="10px" />
                    </div>
                    <div class="subtitle-skeleton">
                        <Skeleton width="160px" height="10px" />
                    </div>
                    <div class="subtitle-skeleton">
                        <Skeleton width="140px" height="10px" />
                    </div>
                    <div class="subtitle-skeleton">
                        <Skeleton width="80px" height="10px" />
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
</template>

<script setup>
import Skeleton from '../UI/Skeleton.vue';
import Wrapper from '../UI/Wrapper.vue';
</script>