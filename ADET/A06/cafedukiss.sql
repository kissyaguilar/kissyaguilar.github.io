-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2025 at 03:40 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cafedukiss`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cartID` int(11) NOT NULL,
  `productID` int(11) DEFAULT NULL,
  `sizeID` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT 1,
  `addedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(11) NOT NULL,
  `categoryName` varchar(50) NOT NULL,
  `picture` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `categoryName`, `picture`) VALUES
(1, 'ALL MENU', 'assets/img/all_menu.png'),
(2, 'Frappuccino', 'assets/img/frappuccino.png'),
(3, 'Tea', 'assets/img/tea.png'),
(4, 'Juice', 'assets/img/juice.png'),
(5, 'Pastry', 'assets/img/pastry.png'),
(6, 'Pasta', 'assets/img/pasta.png');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderID` int(11) NOT NULL,
  `billNumber` int(11) NOT NULL,
  `orderDate` date NOT NULL,
  `subtotal` decimal(10,2) DEFAULT 0.00,
  `discount` decimal(10,2) DEFAULT 0.00,
  `tax` decimal(10,2) DEFAULT 0.00,
  `total` decimal(10,2) DEFAULT 0.00,
  `paymentMethod` varchar(50) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `orderItemID` int(11) NOT NULL,
  `orderID` int(11) DEFAULT NULL,
  `productID` int(11) DEFAULT NULL,
  `sizeID` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(11) NOT NULL,
  `categoryID` int(11) DEFAULT NULL,
  `productName` varchar(100) NOT NULL,
  `code` varchar(10) NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `isAvailable` tinyint(1) DEFAULT 1,
  `basePrice` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `categoryID`, `productName`, `code`, `picture`, `isAvailable`, `basePrice`) VALUES
(1, 2, 'Caramel Frappuccino', 'CF', 'assets/img/frappuccino/caramel_frappuccino.png', 1, 185.00),
(2, 2, 'Java Chip Frappuccino', 'JCF', 'assets/img/frappuccino/java_chip_frappuccino.png', 1, 200.00),
(3, 2, 'Coffee Jelly Frappuccino', 'CJF', 'assets/img/frappuccino/coffee_jelly_frappuccino.png', 1, 195.00),
(4, 2, 'Mocha Jelly Frappuccino', 'MJF', 'assets/img/frappuccino/mocha_jelly_frappuccino.png', 1, 195.00),
(5, 2, 'Vanilla Latte Frappuccino', 'VLF', 'assets/img/frappuccino/vanilla_latte_frappuccino.png', 1, 190.00),
(6, 2, 'Hazelnut Frappuccino', 'HF', 'assets/img/frappuccino/hazelnut_mocha_frappuccino.png', 1, 195.00),
(7, 2, 'Espresso Frappuccino', 'EF', 'assets/img/frappuccino/espresso_frappuccino.png', 1, 185.00),
(8, 2, 'Cinnamon Frappuccino', 'CF2', 'assets/img/frappuccino/cinnamon_coffee_frappuccino.png', 1, 190.00),
(9, 3, 'Matcha Green Tea', 'MGT', 'assets/img/tea/matcha_green_tea.png', 1, 195.00),
(10, 3, 'Thai Tea', 'THT', 'assets/img/tea/thai_tea.png', 1, 195.00),
(11, 3, 'Lemon Tea', 'LT', 'assets/img/tea/lemon_frappuccino.png', 1, 200.00),
(12, 3, 'Milk Tea', 'MT', 'assets/img/tea/milk_tea.png', 1, 195.00),
(13, 3, 'Strawberry Tea', 'ST', 'assets/img/tea/strawberry_tea.png', 1, 195.00),
(14, 3, 'Blue Lemonade Tea', 'BLT', 'assets/img/tea/blue_lemonade_tea.png', 1, 195.00),
(15, 3, 'Hibiscus Tea', 'HT', 'assets/img/tea/hibiscus_tea.png', 1, 195.00),
(16, 3, 'Blueberry Tea', 'BBT', 'assets/img/tea/blue_berry_tea.png', 1, 195.00),
(17, 4, 'Orange Juice', 'OJ', 'assets/img/juice/orange_juice.png', 1, 150.00),
(18, 4, 'Strawberry Juice', 'SJ', 'assets/img/juice/strawberry_juice.png', 1, 150.00),
(19, 4, 'Apple Juice', 'AJ', 'assets/img/juice/apple_juice.png', 1, 155.00),
(20, 4, 'Grape Juice', 'GJ', 'assets/img/juice/grape_juice.png', 1, 160.00),
(21, 4, 'Blue Mojito Juice', 'BMJ', 'assets/img/juice/blue_mojito_juice.png', 1, 150.00),
(22, 4, 'Pine Apple Juice', 'PAJ', 'assets/img/juice/pine_apple_juice.png', 1, 155.00),
(23, 4, 'Kiwi Juice', 'KJ', 'assets/img/juice/kiwi_juice.png', 1, 150.00),
(24, 4, 'Mango Juice', 'MJ', 'assets/img/juice/mango_juice.png', 1, 160.00),
(25, 5, 'Egg Pie', 'EP', 'assets/img/pastry/egg_pie.png', 1, 80.00),
(26, 5, 'Croissant', 'CRO', 'assets/img/pastry/croissant.png', 1, 80.00),
(27, 5, 'Doughnut', 'DOU', 'assets/img/pastry/doughnut.png', 1, 90.00),
(28, 5, 'Empanada', 'EMP', 'assets/img/pastry/empanada.png', 1, 100.00),
(29, 5, 'Cinnamon Roll', 'CR', 'assets/img/pastry/cinnamon_roll.png', 1, 110.00),
(30, 5, 'Custard Tart', 'CT', 'assets/img/pastry/custard_tart.png', 1, 110.00),
(31, 5, 'Churros', 'PFR', 'assets/img/pastry/churros.png', 1, 90.00),
(32, 5, 'Bibingka', 'BB', 'assets/img/pastry/bibingka.png', 1, 90.00),
(33, 6, 'Spaghetti Pasta', 'SPAG', 'assets/img/pasta/spaghetti.png', 1, 100.00),
(34, 6, 'Carbonara Pasta', 'CARB', 'assets/img/pasta/carbonara.png', 1, 110.00),
(35, 6, 'Tomato Pasta', 'TOM', 'assets/img/pasta/tomato_pasta.png', 1, 100.00),
(36, 6, 'Mushroom Pasta', 'MUS', 'assets/img/pasta/mushroom_pasta.png', 1, 110.00),
(37, 6, 'Shrimp Pasta', 'SHR', 'assets/img/pasta/shrimp_pasta.png', 1, 100.00),
(38, 6, 'Pesto Pasta', 'PES', 'assets/img/pasta/pesto_pasta.png', 1, 110.00),
(39, 6, 'Spinach Pasta', 'SPI', 'assets/img/pasta/spinach_pasta.png', 1, 120.00),
(40, 6, 'Lasagna Pasta', 'LAS', 'assets/img/pasta/lasagna_pasta.png', 1, 100.00);

-- --------------------------------------------------------

--
-- Table structure for table `product_sizes`
--

CREATE TABLE `product_sizes` (
  `sizeID` int(11) NOT NULL,
  `productID` int(11) DEFAULT NULL,
  `size` varchar(20) NOT NULL,
  `sizeCode` char(1) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_sizes`
--

INSERT INTO `product_sizes` (`sizeID`, `productID`, `size`, `sizeCode`, `price`) VALUES
(1, 1, 'small', 'S', 185.00),
(2, 1, 'medium', 'M', 195.00),
(3, 1, 'large', 'L', 205.00),
(4, 2, 'small', 'S', 200.00),
(5, 2, 'medium', 'M', 210.00),
(6, 2, 'large', 'L', 220.00),
(7, 3, 'small', 'S', 195.00),
(8, 3, 'medium', 'M', 200.00),
(9, 3, 'large', 'L', 205.00),
(10, 4, 'small', 'S', 195.00),
(11, 4, 'medium', 'M', 200.00),
(12, 4, 'large', 'L', 205.00),
(13, 5, 'small', 'S', 190.00),
(14, 5, 'medium', 'M', 200.00),
(15, 5, 'large', 'L', 210.00),
(16, 6, 'small', 'S', 195.00),
(17, 6, 'medium', 'M', 205.00),
(18, 6, 'large', 'L', 215.00),
(19, 7, 'small', 'S', 185.00),
(20, 7, 'medium', 'M', 195.00),
(21, 7, 'large', 'L', 205.00),
(22, 8, 'small', 'S', 190.00),
(23, 8, 'medium', 'M', 200.00),
(24, 8, 'large', 'L', 210.00),
(25, 9, 'small', 'S', 195.00),
(26, 9, 'medium', 'M', 205.00),
(27, 9, 'large', 'L', 215.00),
(28, 10, 'small', 'S', 195.00),
(29, 10, 'medium', 'M', 205.00),
(30, 10, 'large', 'L', 215.00),
(31, 11, 'small', 'S', 200.00),
(32, 11, 'medium', 'M', 210.00),
(33, 11, 'large', 'L', 220.00),
(34, 12, 'small', 'S', 195.00),
(35, 12, 'medium', 'M', 205.00),
(36, 12, 'large', 'L', 215.00),
(37, 13, 'small', 'S', 195.00),
(38, 13, 'medium', 'M', 205.00),
(39, 13, 'large', 'L', 215.00),
(40, 14, 'small', 'S', 195.00),
(41, 14, 'medium', 'M', 205.00),
(42, 14, 'large', 'L', 215.00),
(43, 15, 'small', 'S', 195.00),
(44, 15, 'medium', 'M', 205.00),
(45, 15, 'large', 'L', 215.00),
(46, 16, 'small', 'S', 195.00),
(47, 16, 'medium', 'M', 205.00),
(48, 16, 'large', 'L', 215.00),
(49, 17, 'small', 'S', 150.00),
(50, 17, 'medium', 'M', 160.00),
(51, 17, 'large', 'L', 170.00),
(52, 18, 'small', 'S', 150.00),
(53, 18, 'medium', 'M', 160.00),
(54, 18, 'large', 'L', 170.00),
(55, 19, 'small', 'S', 155.00),
(56, 19, 'medium', 'M', 165.00),
(57, 19, 'large', 'L', 175.00),
(58, 20, 'small', 'S', 160.00),
(59, 20, 'medium', 'M', 170.00),
(60, 20, 'large', 'L', 180.00),
(61, 21, 'small', 'S', 150.00),
(62, 21, 'medium', 'M', 160.00),
(63, 21, 'large', 'L', 170.00),
(64, 22, 'small', 'S', 155.00),
(65, 22, 'medium', 'M', 165.00),
(66, 22, 'large', 'L', 175.00),
(67, 23, 'small', 'S', 150.00),
(68, 23, 'medium', 'M', 160.00),
(69, 23, 'large', 'L', 170.00),
(70, 24, 'small', 'S', 160.00),
(71, 24, 'medium', 'M', 170.00),
(72, 24, 'large', 'L', 180.00),
(73, 25, 'small', 'S', 80.00),
(74, 25, 'medium', 'M', 100.00),
(75, 25, 'large', 'L', 120.00),
(76, 26, 'small', 'S', 80.00),
(77, 26, 'medium', 'M', 100.00),
(78, 26, 'large', 'L', 120.00),
(79, 27, 'small', 'S', 90.00),
(80, 27, 'medium', 'M', 110.00),
(81, 27, 'large', 'L', 130.00),
(82, 28, 'small', 'S', 100.00),
(83, 28, 'medium', 'M', 120.00),
(84, 28, 'large', 'L', 140.00),
(85, 29, 'small', 'S', 110.00),
(86, 29, 'medium', 'M', 130.00),
(87, 29, 'large', 'L', 150.00),
(88, 30, 'small', 'S', 110.00),
(89, 30, 'medium', 'M', 130.00),
(90, 30, 'large', 'L', 150.00),
(91, 31, 'small', 'S', 90.00),
(92, 31, 'medium', 'M', 110.00),
(93, 31, 'large', 'L', 130.00),
(94, 32, 'small', 'S', 90.00),
(95, 32, 'medium', 'M', 110.00),
(96, 32, 'large', 'L', 130.00),
(97, 33, 'small', 'S', 100.00),
(98, 33, 'medium', 'M', 120.00),
(99, 33, 'large', 'L', 150.00),
(100, 34, 'small', 'S', 110.00),
(101, 34, 'medium', 'M', 130.00),
(102, 34, 'large', 'L', 160.00),
(103, 35, 'small', 'S', 100.00),
(104, 35, 'medium', 'M', 120.00),
(105, 35, 'large', 'L', 150.00),
(106, 36, 'small', 'S', 110.00),
(107, 36, 'medium', 'M', 130.00),
(108, 36, 'large', 'L', 160.00),
(109, 37, 'small', 'S', 100.00),
(110, 37, 'medium', 'M', 120.00),
(111, 37, 'large', 'L', 150.00),
(112, 38, 'small', 'S', 110.00),
(113, 38, 'medium', 'M', 130.00),
(114, 38, 'large', 'L', 160.00),
(115, 39, 'small', 'S', 120.00),
(116, 39, 'medium', 'M', 140.00),
(117, 39, 'large', 'L', 170.00),
(118, 40, 'small', 'S', 100.00),
(119, 40, 'medium', 'M', 120.00),
(120, 40, 'large', 'L', 150.00);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cartID`),
  ADD KEY `product_id` (`productID`),
  ADD KEY `size_id` (`sizeID`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`),
  ADD UNIQUE KEY `NAME` (`categoryName`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderID`),
  ADD UNIQUE KEY `bill_number` (`billNumber`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`orderItemID`),
  ADD KEY `order_id` (`orderID`),
  ADD KEY `product_id` (`productID`),
  ADD KEY `size_id` (`sizeID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`),
  ADD UNIQUE KEY `CODE` (`code`),
  ADD KEY `category_id` (`categoryID`);

--
-- Indexes for table `product_sizes`
--
ALTER TABLE `product_sizes`
  ADD PRIMARY KEY (`sizeID`),
  ADD UNIQUE KEY `product_id` (`productID`,`sizeCode`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cartID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `orderItemID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `product_sizes`
--
ALTER TABLE `product_sizes`
  MODIFY `sizeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=233;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`productID`) REFERENCES `products` (`productID`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`sizeID`) REFERENCES `product_sizes` (`sizeID`);

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`orderID`) REFERENCES `orders` (`orderID`),
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`productID`) REFERENCES `products` (`productID`),
  ADD CONSTRAINT `order_items_ibfk_3` FOREIGN KEY (`sizeID`) REFERENCES `product_sizes` (`sizeID`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryID`) REFERENCES `categories` (`categoryID`);

--
-- Constraints for table `product_sizes`
--
ALTER TABLE `product_sizes`
  ADD CONSTRAINT `product_sizes_ibfk_1` FOREIGN KEY (`productID`) REFERENCES `products` (`productID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
