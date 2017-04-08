<!--定义空行模板-->
<template id="space-template">
    <div>
        <div class="space spaceline"></div>
    </div>
</template>
<script type="text/javascript">
    export default {
        name: 'space',
        template: '#space-template',
    };
</script>
<style scoped>
    div {
        margin: 0;
        padding: 0;
    }
    
    .space {
        /*height: 0.52rem;*/
        height: 13px;
        width: 100%;
        background:#f1f1f1;
    }
    
    .spaceline {
        position: relative;
    }
    
    .spaceline:before,
    .spaceline:after {
        width: 200%;
        height: 200%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        content: "";
        -webkit-transform: scale(0.5);
        -webkit-transform-origin: 0 0;
        transform: scale(0.5);
        transform-origin: 0 0;
        border: none;
    }
    
    .spaceline:before {
        /*border-top: 0.04rem solid #e5e5e5;*/
        border-top: 1px solid #e5e5e5;
    }
    
    .spaceline:after {
        /*border-bottom: 0.04rem solid #e5e5e5;*/
        border-bottom: 1px solid #e5e5e5;
    }
</style>