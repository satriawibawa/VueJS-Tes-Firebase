<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Menu Tambah</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Nama Barang:</label>
                        <input type="text" class="form-control" v-model="newItem.name" required/>
                    </div>
                    <div class="form-group">
                        <label>Harga Barang:</label>
                        <input type="number" class="form-control" v-model="newItem.price" required/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Tambah"/>
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
    items: db.ref('items')
  },
  data () {
    return {
      newItem: {
          name: '',
          price: ''
      }
    }
  },
  methods: {
      addItem() {
        this.$firebaseRefs.items.push({
            name: this.newItem.name,
            price: this.newItem.price
        })
        this.newItem.name = '';
        this.newItem.price = '';
        this.$router.push('/list')
      }
    }
}
</script>