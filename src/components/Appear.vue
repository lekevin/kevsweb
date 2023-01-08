<template>
    <transition appear :css="false" 
    @before-enter="beforeEnter" @enter="enter">
    <slot />
    </transition>
</template>

<script lang="ts">
    export default {
        props: {
            duration: {
                type: Number,
                default: 500
            },
            delay: {
                type: Number,
                default: 100
            },
            transition: Array
        },
        methods: {
            beforeEnter(el: any) {
                el.style.opacity = 0;

                if(this.transition)
                    el.style.transform = 'translate(' + this.transition.join(',') + ')';

            },
            enter(el: any) {
                let transitions = 'opacity' + this.duration + 'ease-in-out' + this.delay + 'ms';
                
                if(this.transition)
                    transitions += ', transform ' + this.duration + 'ms ease-in-out ' + this.delay + 'ms';

                el.style.transition = transitions;

                getComputedStyle(el);

                setTimeout(() => {
                    el.style.opacity = 1;
                    el.style.transform = 'initial';
                });
            }
        }
    }
</script>