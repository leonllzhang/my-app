/*在.vue中引入*/
<template>
    <dnd-container :layout.sync="layout">
        <dnd-box v-for="(box,i) in layout" :boxId="box.id" :key="'box '+i">
            {{box.id}}
        </dnd-box>
    </dnd-container>      
</template>

<script>
// import Container and Box components
import { Container, Box } from '@dattn/dnd-grid'
// minimal css for the components to work properly
import '@dattn/dnd-grid/dist/dnd-grid.css'

export default {
    components: {
        DndContainer: Container,
        DndBox: Box      
    },
    data() {
      return {
        layout: [
            {
                id: 'box-a',
                hidden: false,
                pinned: false,
                position: {
                    x: 0,
                    y: 0,
                    w: 4, // Multiplier for virtual grid width
                    h: 2 // Multiplier for virtual grid height
            }
            },
            {
                id: 'box-b',
                hidden: false,
                pinned: false,
                position: {
                    x: 4,
                    y: 0,
                    w: 2,
                    h: 1
                }
            }
        ]
      }
    },
}
</script>