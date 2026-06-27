function addToCart(productId, price) {

    let cart = JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    let existingItem = cart.find(
        item => item.id === productId
    );

    if (existingItem) {

        existingItem.qty++;

    } else {

        cart.push({

            id: productId,

            price: price,

            qty: 1

        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    const currentLang =
        localStorage.getItem("site-language") || "ar";

    alert(
        translations[currentLang].addedToCart
    );

}