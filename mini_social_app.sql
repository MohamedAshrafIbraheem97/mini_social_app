-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 17, 2026 at 08:03 PM
-- Server version: 8.0.44
-- PHP Version: 8.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mini_social_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `Comments`
--

CREATE TABLE `Comments` (
  `id` int NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  `postId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Comments`
--

INSERT INTO `Comments` (`id`, `content`, `createdAt`, `updatedAt`, `userId`, `postId`) VALUES
(1, 'updated', '2026-10-17 12:50:30', '2026-10-17 18:44:27', 1, 4),
(2, 'second comment', '2026-10-17 12:51:06', '2026-10-17 12:51:06', 1, 4),
(8, 'comment 1', '2026-10-17 18:25:51', '2026-10-17 18:25:51', 1, 4),
(9, 'comment 2', '2026-10-17 18:25:51', '2026-10-17 18:25:51', 1, 4),
(10, 'comment 3', '2026-10-17 18:25:51', '2026-10-17 18:25:51', 1, 4),
(11, 'comment 11', '2026-10-17 18:25:54', '2026-10-17 18:25:54', 1, 4),
(12, 'comment 22', '2026-10-17 18:25:54', '2026-10-17 18:25:54', 1, 4),
(13, 'comment 33', '2026-10-17 18:25:54', '2026-10-17 18:25:54', 1, 4),
(14, 'comment 111', '2026-10-17 18:26:27', '2026-10-17 18:26:27', 1, 4),
(15, 'comment 222', '2026-10-17 18:26:27', '2026-10-17 18:26:27', 1, 4),
(16, 'comment 333', '2026-10-17 18:26:27', '2026-10-17 18:26:27', 1, 4),
(17, 'commentttttt', '2026-10-17 19:01:01', '2026-10-17 19:01:01', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Posts`
--

CREATE TABLE `Posts` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `userId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Posts`
--

INSERT INTO `Posts` (`id`, `title`, `content`, `createdAt`, `updatedAt`, `deletedAt`, `userId`) VALUES
(1, 'this is the new post', 'thiasdkj aksjd kajsd kasj dkjas kjd kajsd', '2026-10-17 12:16:27', '2026-10-17 12:44:43', NULL, 1),
(2, 'this is the new post', 'thiasdkj aksjd kajsd kasj dkjas kjd kajsd', '2026-10-17 12:45:48', '2026-10-17 12:46:03', '2026-10-17 12:46:03', 1),
(3, 'this is the new post', 'thiasdkj aksjd kajsd kasj dkjas kjd kajsd', '2026-10-17 12:45:49', '2026-10-17 12:47:08', '2026-10-17 12:47:08', 1),
(4, 'this is the new post', 'thiasdkj aksjd kajsd kasj dkjas kjd kajsd', '2026-10-17 12:45:49', '2026-10-17 12:45:49', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` enum('user','admin') DEFAULT 'user',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'Mohamed ashraf', 'mohamed@email.com', '123456', 'user', '2026-10-16 21:16:46', '2026-10-16 21:16:46'),
(2, 'Mohamed ashraf', 'mohamed1@email.com', '12345', 'user', '2026-10-16 21:19:19', '2026-10-16 21:19:19'),
(3, 'Mohamed ashraf', 'mohamed11@email.com', '1234', 'user', '2026-10-16 21:19:28', '2026-10-16 21:19:28'),
(4, 'mo', 'mohamesd11@email.com', '123456', 'user', '2026-10-16 22:04:38', '2026-10-16 22:20:22'),
(10, 'mohamed ashraf', 'mohamesd1@email.com', '123456', 'user', '2026-10-16 22:20:36', '2026-10-16 22:20:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Comments`
--
ALTER TABLE `Comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `postId` (`postId`);

--
-- Indexes for table `Posts`
--
ALTER TABLE `Posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Comments`
--
ALTER TABLE `Comments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `Posts`
--
ALTER TABLE `Posts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Comments`
--
ALTER TABLE `Comments`
  ADD CONSTRAINT `comments_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_4` FOREIGN KEY (`postId`) REFERENCES `Posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Posts`
--
ALTER TABLE `Posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
