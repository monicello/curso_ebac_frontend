<script>
export default {
  data() {
    return {
      num1: 0,
      num2: 0,
      operacao: '+',
    }
  },
  computed: {
    resultado() {
      const n1 = parseFloat(this.num1)
      const n2 = parseFloat(this.num2)
      switch (this.operacao) {
        case '+':
          return n1 + n2
        case '-':
          return n1 - n2
        case '*':
          return n1 * n2
        case '/':
          return n1 / n2
        default:
          return 0
      }
    }
  },
  methods: {
    calcular() {
    }
  }
}
</script>
  <template>
  <div class="container text-center mt-5">
    <h1>Calculadora Aritmética</h1>
    <input type="number" class="me-3" v-model="num1" @input="calcular">
    
    <select class="text-center mt-3" v-model="operacao" @change="calcular">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
      
    </select>
    <input class="ms-3" type="number" v-model="num2" @input="calcular">
    <div class="mt-3">Resultado: {{ resultado }}</div>
  </div>
</template>


<style scoped>

  h1 {
    color: darkcyan;
  }

  label {
    color: rgb(95, 95, 226);
  }
</style>
