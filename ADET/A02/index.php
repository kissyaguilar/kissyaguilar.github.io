<?php
session_start();

// Killswitch functionality
if (isset($_GET['killswitch']) && $_GET['killswitch'] == "PASSWORDITO") {
    header("Location: WebsiteUnavailable.php");
    exit();
}

// Cart functionality 
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

// Add to cart 
if (isset($_POST['add_to_cart'])) {
    $product_id = $_POST['product_id'];
    $variant = $_POST['variant'];
    $quantity = isset($_POST['quantity']) ? (int) $_POST['quantity'] : 1;
    $cart_key = "$product_id-$variant";
    if (isset($_SESSION['cart'][$cart_key])) {
        $_SESSION['cart'][$cart_key]['quantity'] += $quantity;
    } else {
        $_SESSION['cart'][$cart_key] = ['product_id' => $product_id, 'variant' => $variant, 'quantity' => $quantity];
    }
}

// Remove from cart
if (isset($_POST['remove_from_cart'])) {
    $cart_key = $_POST['cart_key'];
    if (isset($_SESSION['cart'][$cart_key])) {
        $_SESSION['cart'][$cart_key]['quantity']--;
        if ($_SESSION['cart'][$cart_key]['quantity'] <= 0) {
            unset($_SESSION['cart'][$cart_key]);
        }
    }
    header("Location: ?page=cart");
    exit();
}

// Buy now processing
if (isset($_POST['buy_now'])) {
    $payment_method = $_POST['payment_method'];
    $_SESSION['payment_method'] = $payment_method;
    header("Location: ?page=cart&action=receipt");
    exit();
}

// Requirement
$page = "home";
if (isset($_GET['page'])) {
    $page = $_GET['page'];
    switch ($page) {
        case "home":
            $page = "home";
            break;
        case "shop":
            $page = "shop";
            break;
        case "cart":
            $page = "cart";
            break;
        case "about":
            $page = "about";
            break;
        default:
            header("Location: ?page=home");
            break;
    }
} else {
    header("Location: ?page=home");
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="assets/images/kissyLogo.png" type="image/businessLogo">
    <title>Kiss's Prints & Crafts</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
            <a class="navbar-brand" href="?page=home">Kiss's Prints & Crafts</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link <?php echo $page == 'home' ? 'active' : ''; ?>" href="?page=home">
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php echo $page == 'shop' ? 'active' : ''; ?>" href="?page=shop">
                            Shop
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php echo $page == 'cart' ? 'active' : ''; ?>" href="?page=cart"
                            id="cart-link">
                            Cart (<?php echo array_sum(array_column($_SESSION['cart'], 'quantity')); ?>)
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link <?php echo $page == 'about' ? 'active' : ''; ?>" href="?page=about">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container mt-5 pt-5">
        <?php include("shared/" . $page . ".php"); ?>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
    crossorigin="anonymous"></script>
    <script>


        function downloadReceipt(content) {
            const blob = new Blob([content], { type: 'text/plain' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'Kiss_Prints_Crafts_Receipt.txt';
            link.click();
        }

        function updatePrice(productId) {
    const variant = document.querySelector(`#variant-${productId}`).value;
    const prices = {
        1: { 'A5': 60.00, 'A4': 100.00, 'A3': 150.00 },
        2: { 
            'blue-8': 100.00, 
            'blue-10': 130.00, 
            'pink-8': 100.00, 
            'pink-10': 130.00, 
            'purple-8': 100.00, 
            'purple-10': 130.00, 
            'yellow-8': 100.00, 
            'yellow-10': 130.00, 
            'brown-8': 100.00, 
            'brown-10': 130.00 
        },
        3: { 'blue': 50.00, 'pink': 50.00, 'purple': 50.00 },
        4: { 'mini': 50.00, 'wide': 60.00, 'square': 80.00 },
        5: { 
            'graduation chip bag Small': 10.00, 
            'mother\'s day chip bag Small': 10.00, 
            'birth day chip bag Small': 10.00, 
            'graduation chip bag Big': 20.00, 
            'mother\'s day chip bag Big': 20.00, 
            'birth day chip bag Big': 20.00 
        },
        6: { 'birthday loot bag': 35.00 },
        7: { 'customize': 500.00 },
        8: { 'white photo strip': 15.00, 'black photo strip': 15.00 }
    };
    document.querySelector(`#price-${productId}`).textContent = `₱${prices[productId][variant].toFixed(2)}`;
}
    </script>
</body>

</html>