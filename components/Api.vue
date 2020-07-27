<template>
<Table class="table table-inverse table-striped">
      <thead>
        <tr>
          <th>Code</th>
          <th>Harga</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in info" :key="index">
          <td>{{index}}</td>
          <td>{{data.rate}}</td>
          <td>{{data.description}}</td>
        </tr>
      </tbody>
    </Table>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi))
  }
}
</script>