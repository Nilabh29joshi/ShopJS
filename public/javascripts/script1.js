document.querySelectorAll(".update-cart").forEach(button => {
    button.addEventListener("click", function () {
      const itemId = this.closest("li").getAttribute("data-id");
      const action = this.getAttribute("data-action");

      fetch("/update-cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId, action })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          updateCartUI(data.cart);
        }
      })
      .catch(error => console.error("Error:", error));
    });
  });

  function updateCartUI(cart) {
    cart.forEach(item => {
      const listItem = document.querySelector(`li[data-id='${item.id}']`);
      if (listItem) {
        listItem.querySelector(".quantity-display").value = item.quantity;
        listItem.querySelector(".update-cart[data-action='decrease']").disabled = item.quantity <= 1;
      }
    });

    // Update total price
    document.getElementById("cart-total").innerText = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }