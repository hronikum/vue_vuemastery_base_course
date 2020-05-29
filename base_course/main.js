Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: false,
    },
  },
  template: `
  <div class="product">
      <div class="product-image">
        <img :src="image" >
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-show="inStock">In Stock</p>
        <span v-show="onSale">On Sale!</span>
        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul> 
        <div v-for="(variant, index) in variants" 
          :key="variant.variantId" 
          class="color-box" 
          :style="{ backgroundColor: variant.variantColor }"
          @mouseover="updateProduct(index)">
        </div>
        
        <button @click="addToCart" 
        :disabled="!inStock"
        :class="{disabledButton: !inStock}">Add to Cart</button>
        <button @click="removeFromCart"
        :class="{disabledButton: cart <= 0 || !inStock}"
        :disabled="cart <= 0 || !inStock">Remove from Cart</button>

        <div class="cart">
          <p>Cart({{ cart }})</p>
        </div>
       
      </div>
    </div>
  `,
  data() {
    return {
      brand: 'Vue mastery',
      product: 'Boots',
      description: 'This is the best description ever',
      selectedVariant: 0,
      onSale: false,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: 'vmSocks-green-onWhite.jpg',
          variantQuantity: 10,
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: 'vmSocks-blue-onWhite.jpg',
          variantQuantity: 0,
        },
      ],
      cart: 0,
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      this.cart -= 1
    },
    updateProduct(index) {
      this.selectedVariant = index
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    shipping() {
      if (this.premium) {
        return 'Free'
      }
      return '2.99'
    },
  },
})

let app = new Vue({
  el: '#app',
  data: {
    premium: true,
    inStock: true,
  },
})
