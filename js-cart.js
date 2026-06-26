function addToCart(name, price) {

    let cart = JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    let existingItem = cart.find(
        item => item.name === name
    );

    if (existingItem) {

        existingItem.qty += 1;

    } else {

        cart.push({
            name: name,
            price: price,
            qty: 1
        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("تمت إضافة المنتج إلى السلة");

}