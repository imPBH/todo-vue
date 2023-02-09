<template>
  <div class="content-wrapper">
    <div class="input-wrapper">
        <input type="text" placeholder="New task">
        <div class="icon-wrapper">
            <fa icon="fa-regular fa-square-plus" class="add-icon"/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'InputComponent'
}
</script>

<style lang="scss">
.content-wrapper {
    display: flex;
}

.input-wrapper {
    display: flex;
    align-items: center;
    height: 2.5rem;
    background:rgba(255, 255,255, 0.158);
    border-radius: 100px;
    padding: 0.8em;

    input {
        background:rgba(0,0,0, 0.5);
        border: none;
        outline: none;
        border-radius: 100px;
        height: 100%;
        width: 24em;
        padding: 0;
        margin-right: 0.8em;
        color: white;
        text-align: center;
    }

    .icon-wrapper {
        border-radius: 100px;
        background:rgba(255,255,255,0.6);
        display: flex;
        justify-content: center;
    }
    
    .add-icon {
        
        padding: 0.5rem 0.5rem;
        height: 1.5rem;
        width: 1.5rem;
        transition: 0.1s ease;

        &:hover {
            transition: 0.1s ease;
            height: 2rem;
            width: 2rem;
            cursor: pointer;
        }
    }
}
</style>