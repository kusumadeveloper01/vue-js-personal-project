<template>
    <h1>create product</h1>
    <div id="editorjs"></div>
    <button>save product</button>
</template>

<script setup>
import { onMounted } from 'vue';

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';

let editor

onMounted(() => {
    editor = new EditorJS({
        holder: 'editorjs',

        tools: {
            header: {
                class: Header,
                inlineToolbar: ['link']
            },
            list: {
                class: List,
                inlineToolbar: true
            },
            embed: {
                class: Embed,
                inlineToolbar: false,
                config: {
                    services: {
                        youtube: true,
                        coub: true
                    }
                }
            }
        },
    });
})

</script>

<style></style>