let app = new Vue({
  el: '#app',
  data: {
    product: 'Boots',
    description: 'This is the best description ever',
    image: 'vmSocks-green-onWhite.jpg',
    inStock: true,
    onSale: false,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: 'vmSocks-green-onWhite.jpg',
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: 'vmSocks-blue-onWhite.jpg',
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      this.cart -= 1
    },
    updateProduct(variantImage) {
      this.image = variantImage
    },
  },
})
