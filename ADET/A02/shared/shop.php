<div class="row">
    <?php
    $products = [
        [
            "id" => 1,
            "name" => "Flat Sintra Board",
            "desc" => "Elegant custom sintra",
            "img" => "sintra.png",
            "variants" => [
                ["name" => "A5", "price" => 60.00, "desc" => "(A5)14.8x21cm", "img" => "sintra_a5.png"],
                ["name" => "A4", "price" => 100.00, "desc" => "(A4)21x29.7cm", "img" => "sintra_a4.png"],
                ["name" => "A3", "price" => 150.00, "desc" => "(A3)29.7x42cm", "img" => "sintra_a3.png"]
            ]
        ],
        [
            "id" => 2,
            "name" => "Money Garland",
            "desc" => "Graduation Money Garland",
            "img" => "money_garland.png",
            "variants" => [
                ["name" => "blue-8", "price" => 100.00, "desc" => "Blue, 8 slots", "img" => "money_blue_8.png"],
                ["name" => "blue-10", "price" => 130.00, "desc" => "Blue, 10 slots", "img" => "money_blue_10.png"],
                ["name" => "pink-8", "price" => 100.00, "desc" => "Pink, 8 slots", "img" => "money_pink_8.png"],
                ["name" => "pink-10", "price" => 130.00, "desc" => "Pink, 10 slots", "img" => "money_pink_10.png"],
                ["name" => "purple-8", "price" => 100.00, "desc" => "Purple, 8 slots", "img" => "money_purple_8.png"],
                ["name" => "purple-10", "price" => 130.00, "desc" => "Purple, 10 slots", "img" => "money_purple_10.png"],
                ["name" => "brown-8", "price" => 100.00, "desc" => "Brown, 8 slots", "img" => "money_brown_8.png"],
                ["name" => "brown-10", "price" => 130.00, "desc" => "Brown, 10 slots", "img" => "money_brown_10.png"],
                ["name" => "yellow-8", "price" => 100.00, "desc" => "Yellow, 8 slots", "img" => "money_yellow_8.png"],
                ["name" => "yellow-10", "price" => 130.00, "desc" => "Yellow, 10 slots", "img" => "money_yellow_10.png"]
            ]
        ],
        [
            "id" => 3,
            "name" => "Garland Lei",
            "desc" => "Graduation Garland Lei",
            "img" => "garland_lei.png",
            "variants" => [
                ["name" => "blue", "price" => 50.00, "desc" => "Blue, Length: 1.5m", "img" => "garland_lei_blue.png"],
                ["name" => "pink", "price" => 50.00, "desc" => "Pink, Length: 1.5m", "img" => "garland_lei_pink.png"],
                ["name" => "purple", "price" => 50.00, "desc" => "Purple, Length: 1.5m", "img" => "garland_lei_purple.png"]
            ]
        ],
        [
            "id" => 4,
            "name" => "Polaroid Intax",
            "desc" => "Classy instant photos",
            "img" => "polaroid.png",
            "variants" => [
                ["name" => "mini", "price" => 50.00, "desc" => "Mini size, Pack of 10", "img" => "polaroid_mini.png"],
                ["name" => "wide", "price" => 60.00, "desc" => "Wide size, Pack of 6", "img" => "polaroid_wide.png"],
                ["name" => "square", "price" => 80.00, "desc" => "Square size, Pack of 10", "img" => "polaroid_square.png"]
            ]
        ],
        [
            "id" => 5,
            "name" => "Chip Bag",
            "desc" => "Cutesy Chip Bag",
            "img" => "chip_bag.png",
            "variants" => [
                ["name" => "graduation chip bag Small", "price" => 10.00, "desc" => "Graduation, Size: Half a4", "img" => "chip_bag_gradHalf.png"],
                ["name" => "mother's day chip bag Small", "price" => 10.00, "desc" => "Mother's day, Size: Half a4", "img" => "chip_bag_mdHalf.png"],
                ["name" => "birth day chip bag Small", "price" => 10.00, "desc" => "Birth day, Size: Half a4", "img" => "chip_bag_bdayHalf.png"],
                ["name" => "graduation chip bag Big", "price" => 20.00, "desc" => "Graduation, Size: a4", "img" => "chip_bag_grad.png"],
                ["name" => "mother's day chip bag Big", "price" => 20.00, "desc" => "Mother's day, Size: a4", "img" => "chip_bag_md.png"],
                ["name" => "birth day chip bag Big", "price" => 20.00, "desc" => "Birth day, Size: a4", "img" => "chip_bag_bday.png"]
            ]
        ],
        [
            "id" => 6,
            "name" => "Loot Bag",
            "desc" => "Elegant candy bags",
            "img" => "loot_bag.png",
            "variants" => [
                ["name" => "Customize loot bag", "price" => 35.00, "desc" => "Size: 6x8in", "img" => "loot_bag_custom.png"]
            ]
        ],
        [
            "id" => 7,
            "name" => "Fuzzy Flower Bouquet",
            "desc" => "Timeless fuzzy flowers",
            "img" => "bouquet.png",
            "variants" => [
                ["name" => "customize", "price" => 500.00, "desc" => "Height: 12in", "img" => "custom_bouquet.png"]
            ]
            ],
        [
            "id" => 8,
            "name" => "Mini Photo Strips",
            "desc" => "Photo Strip at the back of Mobile",
            "img" => "photoStrips.png",
            "variants" => [
                ["name" => "white", "price" => 15.00, "desc" => "white - 3.5 x 1.2", "img" => "white_photoStrips.png"],
                ["name" => "black", "price" => 15.00, "desc" => "black - 3.5 x 1.2", "img" => "black_photoStrips.png"]
                ]
        ]
    ];

    foreach ($products as $product):
        ?>
        <div class="col-md-4 mb-4">
            <div class="card h-100" id="product-<?php echo $product['id']; ?>">
                <img src="assets/images/<?php echo $product['img'] ?>" class="product-img"
                    alt="<?php echo $product['name'] ?>">
                <div class="card-body">
                    <h5 class="card-title"><?php echo $product['name'] ?></h5>
                    <p class="card-text"><?php echo $product['desc'] ?></p>
                    <p class="card-text">Starting at ₱<?php echo number_format($product['variants'][0]['price'], 2) ?></p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#productModal<?php echo $product['id']; ?>">
                        Add to Cart
                    </button>
                    <?php if (array_filter($_SESSION['cart'], fn($item) => $item['product_id'] == $product['id'])): ?>
                        <span
                            class="badge bg-light-pink ms-2"><?php echo array_sum(array_map(fn($item) => $item['quantity'], array_filter($_SESSION['cart'], fn($item) => $item['product_id'] == $product['id']))); ?></span>
                    <?php endif; ?>
                </div>
            </div>

           <!-- Product Specification Modal -->
           <div class="modal fade" id="productModal<?php echo $product['id']; ?>" tabindex="-1"
                aria-labelledby="productModalLabel<?php echo $product['id']; ?>" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="productModalLabel<?php echo $product['id']; ?>">
                                <?php echo $product['name']; ?></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src="assets/images/<?php echo $product['variants'][0]['img']; ?>"
                                class="img-fluid mb-3 variant-img" id="variant-img-<?php echo $product['id']; ?>"
                                alt="Variant Image">
                            <p><strong>Description:</strong> <?php echo $product['desc'] ?></p>
                            <div class="mb-3">
                                <label for="variant-<?php echo $product['id']; ?>" class="form-label">Choose
                                    Variant:</label>
                                <select class="form-select" id="variant-<?php echo $product['id']; ?>"
                                    onchange="updateVariant(<?php echo $product['id']; ?>)">
                                    <?php foreach ($product['variants'] as $variant): ?>
                                        <option value="<?php echo $variant['name']; ?>"
                                            data-img="assets/images/<?php echo $variant['img']; ?>"
                                            data-price="<?php echo number_format($variant['price'], 2); ?>">
                                            <?php echo $variant['desc']; ?> -
                                            ₱<?php echo number_format($variant['price'], 2); ?>
                                        </option>
                                    <?php endforeach; ?>
                                </select>
                            </div>
                            <p><strong>Price:</strong> <span
                                    id="price-<?php echo $product['id']; ?>">₱<?php echo number_format($product['variants'][0]['price'], 2); ?></span>
                            </p>
                            <div class="mb-3">
                                <label for="quantity-<?php echo $product['id']; ?>" class="form-label">Quantity:</label>
                                <input type="number" class="form-control w-25 d-inline"
                                    id="quantity-<?php echo $product['id']; ?>" name="quantity" min="1" value="1">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <form method="post" style="display:inline;">
                                <input type="hidden" name="product_id" value="<?php echo $product['id'] ?>">
                                <input type="hidden" name="variant" id="hidden-variant-<?php echo $product['id']; ?>"
                                    value="<?php echo $product['variants'][0]['name']; ?>">
                                <input type="hidden" name="quantity" id="hidden-quantity-<?php echo $product['id']; ?>">
                                <button type="submit" name="add_to_cart" class="btn btn-primary"
                                    onclick="document.getElementById('hidden-quantity-<?php echo $product['id']; ?>').value = document.getElementById('quantity-<?php echo $product['id']; ?>').value; 
                                             document.getElementById('hidden-variant-<?php echo $product['id']; ?>').value = document.getElementById('variant-<?php echo $product['id']; ?>').value;">
                                    Add to Cart
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <?php endforeach; ?>
</div>

<script>
    function updateVariant(productId) {
        const variantSelect = document.getElementById(`variant-${productId}`);
        const priceSpan = document.getElementById(`price-${productId}`);
        const variantImg = document.getElementById(`variant-img-${productId}`);
        const selectedOption = variantSelect.options[variantSelect.selectedIndex];
        const price = selectedOption.getAttribute('data-price');
        const img = selectedOption.getAttribute('data-img');
        
        priceSpan.textContent = `₱${price}`;
        variantImg.src = img;
    }
</script>