<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Edit Barang</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateItem">
                    <div class="form-group">
                        <label>Nama Barang:</label>
                        <input type="text" class="form-control" v-model="newItem.name" required/>
                    </div>
                    <div class="form-group">
                        <label>Harga Barang:</label>
                        <input type="number" class="form-control" v-model="newItem.price" required/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Update Barang"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import { db } from '../db';

export default {
  firebase: {
    items: db.ref('items'),
    itemsObj: {
      source: db.ref('items'),
      asObject: true
    }
  },
  data () {
    return {
      newItem: {}
    }
  },
  created() {
     let item = this.itemsObj[this.$route.params.id]
     this.newItem = {
       name: item.name,
       price: item.price
     }
  },
  methods: {
    updateItem() {
      this.$firebaseRefs.items.child(this.$route.params.id).set(this.newItem);
      this.$router.push('/list')
    }
  }
}
</script>