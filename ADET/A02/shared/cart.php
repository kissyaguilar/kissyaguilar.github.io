<?php
if (isset($_POST['add_quantity'])) {
    $cart_key = $_POST['cart_key'];
    if (isset($_SESSION['cart'][$cart_key])) {
        $_SESSION['cart'][$cart_key]['quantity'] += 1; 
    }
}
?>

<h2>Your Cart</h2>
<?php if (empty($_SESSION['cart'])): ?>
    <div class="card">
        <div class="card-body">
            <p>Your shopping cart is empty</p>
            <a href="?page=shop" class="btn btn-primary">Continue Shopping</a>
        </div>
    </div>
<?php else:
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
                ["name" => "yellow-8", "price" => 100.00, "desc" => "Yellow, 8 slots", "img" => "money_yellow_8.png"],
                ["name" => "yellow-10", "price" => 130.00, "desc" => "Yellow, 10 slots", "img" => "money_yellow_10.png"],
                ["name" => "brown-8", "price" => 100.00, "desc" => "Brown, 8 slots", "img" => "money_brown_8.png"],
                ["name" => "brown-10", "price" => 130.00, "desc" => "Brown, 10 slots", "img" => "money_brown_10.png"]
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
                ["name" => "purple", "price" => 50.00, "desc" => "Pink, Length: 1.5m", "img" => "garland_lei_purple.png"]
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
                ["name" => "Customize loot bag", "price" => 35.00, "desc" => "Size: 6x8in", "img" => "loot_bag_bd.png"]
            ]
        ],
        [
            "id" => 7,
            "name" => "Fuzzy Flower Bouquet",
            "desc" => "Timeless fuzzy flowers",
            "img" => "bouquet.png",
            "variants" => [
                ["name" => "customize", "price" => 500.00, "desc" => "Message via fb page", "img" => "custom_bouquet.png"]
            ]
        ],
        [
            "id" => 8,
            "name" => "Mini Photo Strips",
            "desc" => "Photo Strip at the back of Mobile",
            "img" => "photoStrips.png",
            "variants" => [
                ["name" => "white", "price" => 15.00, "desc" => "3.5 x 1.2", "img" => "white_photoStrips.png"],
                ["name" => "black", "price" => 15.00, "desc" => "3.5 x 1.2", "img" => "black_photoStrips.png"]
            ]
        ]
    ];
    $total = 0;

    // Receipt section
    if (isset($_GET['action']) && $_GET['action'] == 'receipt' && isset($_SESSION['payment_method'])):
        $payment_method = $_SESSION['payment_method'];
        $receipt = "Kiss's Prints & Crafts Receipt\n\n";
        $receipt .= "Date: " . date('Y-m-d H:i:s') . "\n";
        $receipt .= "Payment Method: " . $payment_method . "\n\n";
        $receipt .= "Items Purchased:\n";
        foreach ($_SESSION['cart'] as $cart_key => $item) {
            $product_id = $item['product_id'];
            $variant_name = $item['variant'];
            $qty = $item['quantity'];
            // Find the variant to get the price and description
            $variant = array_filter($products[$product_id - 1]['variants'], fn($v) => $v['name'] === $variant_name);
            $variant = reset($variant); // Get the first matching variant
            $price = $variant['price'] ?? 0;
            $variant_desc = $variant['desc'] ?? $variant_name;
            $subtotal = $price * $qty;
            $receipt .= sprintf("%s (%s) x%d - ₱%.2f\n", $products[$product_id - 1]['name'], $variant_desc, $qty, $subtotal);
            $total += $subtotal;
        }
        $receipt .= "\nTotal: ₱" . number_format($total, 2);
        if ($payment_method == "GCash") {
            $receipt .= "\n\nPlease send payment to: 0992-014-7335\nReference Number: " . rand(100000, 999999);
        } else {
            $receipt .= "\n\nCash on Delivery - Please prepare exact amount.";
        }
?>
    <div class="card">
        <div class="card-body">
            <h3>Order Confirmed!</h3>
            <pre><?php echo $receipt; ?></pre>
            <button class="btn btn-primary" onclick="downloadReceipt(`<?php echo addslashes($receipt); ?>`)">Download Receipt</button>
            <a href="?page=shop" class="btn btn-outline-primary mt-2">Back to Shop</a>
            <?php unset($_SESSION['cart']); // Clear cart after purchase ?>
        </div>
    </div>
<?php else: ?>
    <div class="card">
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Variant</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($_SESSION['cart'] as $cart_key => $item):
                        $product_id = $item['product_id'];
                        $variant_name = $item['variant'];
                        $qty = $item['quantity'];
                        // Find the variant to get the price and description
                        $variant = array_filter($products[$product_id - 1]['variants'], fn($v) => $v['name'] === $variant_name);
                        $variant = reset($variant); // Get the first matching variant
                        $price = $variant['price'] ?? 0;
                        $variant_desc = $variant['desc'] ?? $variant_name;
                        $subtotal = $price * $qty;
                        $total += $subtotal;
                    ?>
                    <tr>
                        <td><?php echo $products[$product_id - 1]['name'] ?></td>
                        <td><?php echo $variant_desc ?></td>
                        <td>₱<?php echo number_format($price, 2) ?></td>
                        <td><?php echo $qty ?></td>
                        <td>₱<?php echo number_format($subtotal, 2) ?></td>
                        <td>
                        <form method="post" style="display:inline;">
                                <input type="hidden" name="cart_key" value="<?php echo $cart_key ?>">
                                <button type="submit" name="add_quantity" class="btn btn-danger btn-sm">+</button>
                            </form>
                            <form method="post" style="display:inline;">
                                <input type="hidden" name="cart_key" value="<?php echo $cart_key ?>">
                                <button type="submit" name="remove_from_cart" class="btn btn-danger btn-sm">-</button>
                            </form>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                    <tr>
                        <td colspan="5"><strong>Total</strong></td>
                        <td><strong>₱<?php echo number_format($total, 2) ?></strong></td>
                    </tr>
                </tbody>
            </table>
            <a href="?page=shop" class="btn btn-outline-primary">Continue Shopping</a>
            <button class="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#buyNowModal">Buy Now</button>
        </div>
    </div>

    <!-- Buy Now Modal -->
    <div class="modal fade" id="buyNowModal" tabindex="-1" aria-labelledby="buyNowModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="buyNowModalLabel">Select Payment Method</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form method="post">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="payment_method" id="cod" value="COD" checked>
                            <label class="form-check-label" for="cod">Cash on Delivery</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="payment_method" id="gcash" value="GCash">
                            <label class="form-check-label" for="gcash">GCash</label>
                        </div>
                        <button type="submit" name="buy_now" class="btn btn-primary mt-3">Confirm Purchase</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
<?php endif; ?>
<?php endif; ?>

<script>
    function downloadReceipt(receiptText) {
        const blob = new Blob([receiptText], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'receipt.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }
</script>