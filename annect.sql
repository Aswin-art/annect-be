-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 27, 2024 at 07:04 PM
-- Server version: 10.6.18-MariaDB-0ubuntu0.22.04.1
-- PHP Version: 8.1.2-1ubuntu2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `annect`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` varchar(191) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
('ck9x1rp7v000001mqerfg8lck', 'Technology', '2024-08-23 12:00:00.000', '2024-08-23 12:00:00.000'),
('ck9x1rp7v000002mqebdgw9xt', 'Gaming', '2024-08-23 12:05:00.000', '2024-08-23 12:05:00.000'),
('ck9x1rp7v000003mqjlchfbvn', 'Health & Wellness', '2024-08-23 12:10:00.000', '2024-08-23 12:10:00.000'),
('cm06i1kzi0000f4ingchcehvh', 'HANDPHONE', '2024-08-23 09:18:34.113', '2024-08-23 09:18:45.321');

-- --------------------------------------------------------

--
-- Table structure for table `channels`
--

CREATE TABLE `channels` (
  `id` varchar(191) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL,
  `no_rek` varchar(255) NOT NULL,
  `nik` varchar(255) NOT NULL,
  `ktp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `channels`
--

INSERT INTO `channels` (`id`, `user_id`, `name`, `description`, `image`, `created_at`, `updated_at`, `no_rek`, `nik`, `ktp`) VALUES
('ck9wz8q7v000001mqcn64htz8', 'ck9wz1p7v000001mqcgjd3v29', 'Tech Talks', 'A channel for discussing the latest in technology.', 'tech_talks.jpg', '2024-08-23 11:00:00.000', '2024-08-23 11:00:00.000', '3', '2', '1'),
('ck9wz8q7v000002mqcpjq6gxm', 'ck9wz1p7v000002mqy5jk7gtl', 'Gaming Hub', 'All about the latest games and gaming trends.', 'gaming_hub.jpg', '2024-08-23 11:05:00.000', '2024-08-23 11:05:00.000', '3', '2', '1'),
('ck9wz8q7v000003mqa1khqvxs', 'ck9wz1p7v000003mqflht9thx', 'Healthy Living', 'Tips and discussions on maintaining a healthy lifestyle.', 'healthy_living.jpg', '2024-08-23 11:10:00.000', '2024-08-23 11:10:00.000', '3', '2', '1'),
('cm06h980g00009gingr8geaqz', 'ck9wz1p7v000001mqcgjd3v29', 'delvi', 'PROPLAYER', '1724403479386-CLUB (1).jpg', '2024-08-23 08:56:30.931', '2024-08-23 08:57:59.410', '3', '2', '1');

-- --------------------------------------------------------

--
-- Table structure for table `chats`
--

CREATE TABLE `chats` (
  `id` varchar(191) NOT NULL,
  `discussion_room_id` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `chats`
--

INSERT INTO `chats` (`id`, `discussion_room_id`, `user_id`, `message`, `created_at`, `updated_at`) VALUES
('cm0c9z6my00080clbbs3x56qu', 'cm0c9qtz800060clb0tnaff5a', 'ck9wz1p7v000003mqflht9thx', 'Hello', '2024-08-27 18:30:28.901', '2024-11-01 10:28:19.000'),
('cm0c9z6my00090clb5psq0gpg', 'cm0c9qtz800060clb0tnaff5a', 'ck9wz1p7v000002mqy5jk7gtl', 'Coding is fun', '2024-08-27 18:30:28.879', '2025-01-11 13:55:14.000'),
('cm0c9z6my000a0clb69m469zo', 'cm0c9qtz800060clb0tnaf424', 'ck9wz1p7v000003mqflht9thx', 'I love coding', '2024-08-27 18:30:28.868', '2024-06-18 20:36:31.000'),
('cm0c9z6my000a0clb69m46spg', 'cm0c9qtz800060clb0tnafa2w', 'ck9wz1p7v000001mqcgjd3v29', 'Slava Ukraine! Slava ZOV! Slava Wagnar', '2024-08-27 18:30:28.889', '2024-10-21 03:47:36.000'),
('cm0c9z6my030b0clbfdv2s145', 'cm0c9qtz700030clb23kgg4d1', 'ck9wz1p7v000002mqy5jk7gtl', 'The quick brown fox jumps over the lazy dog', '2024-08-27 18:30:28.852', '2025-01-14 01:25:22.000');

-- --------------------------------------------------------

--
-- Table structure for table `discussion_rooms`
--

CREATE TABLE `discussion_rooms` (
  `id` varchar(191) NOT NULL,
  `event_id` varchar(255) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `discussion_rooms`
--

INSERT INTO `discussion_rooms` (`id`, `event_id`, `created_at`, `updated_at`) VALUES
('cm0c9qtz700030clb23kgg4d1', 'ck9x7vb7v000002mqxyz456e', '2024-08-27 18:17:04.276', '2024-12-13 18:37:06.000'),
('cm0c9qtz700040clb61nrat5h', 'ck9x7vb7v000001mqabc123d', '2024-08-27 18:17:04.297', '2024-10-04 00:40:30.000'),
('cm0c9qtz800060clb0tnaf424', 'ck9x7vb7v000003mqfgh789f', '2024-08-27 18:17:04.287', '2024-09-26 09:47:43.000'),
('cm0c9qtz800060clb0tnafa2w', 'ck9x7vb7v000004mqijk321g', '2024-08-27 18:17:04.259', '2024-08-28 18:23:53.000'),
('cm0c9qtz800060clb0tnaff5a', 'ck9x7vb7v000006mqopq987i', '2024-08-27 18:17:04.305', '2024-08-29 18:00:23.000');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` varchar(191) NOT NULL,
  `channel_id` varchar(255) DEFAULT NULL,
  `category_id` varchar(255) DEFAULT NULL,
  `tag_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `tf_image` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `is_paid` tinyint(1) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `status` enum('DONE','PENDING','ONGOING') DEFAULT NULL,
  `link_group` varchar(255) NOT NULL,
  `event_date` datetime DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `channel_id`, `category_id`, `tag_id`, `name`, `description`, `image`, `tf_image`, `location`, `is_paid`, `price`, `status`, `link_group`, `event_date`, `created_at`, `updated_at`) VALUES
('ck9x7vb7v000001mqabc123d', 'ck9wz8q7v000001mqcn64htz8', 'ck9x1rp7v000001mqerfg8lck', 'ck9x3sl7v000001mqjc4pqvtg', 'Tech Expo 2024', 'Explore the latest in tech innovations.', 'tech_expo.jpg', 'tech_expo_tf.jpg', 'Jakarta Convention Center', 1, 500000, 'ONGOING', 't.me/msib_batch_7', '2024-09-15 10:00:00', '2024-08-23 14:00:00.000', '2024-08-23 14:00:00.000'),
('ck9x7vb7v000002mqxyz456e', 'ck9wz8q7v000002mqcpjq6gxm', 'ck9x1rp7v000002mqebdgw9xt', 'ck9x3sl7v000002mqkvrjtybg', 'Esports Tournament 2024', 'Compete with the best in the gaming world.', 'esports_tournament.jpg', 'esports_tournament_tf.jpg', 'Surabaya Convention Hall', 1, 300000, 'PENDING', 't.me/msib_batch_7', '2024-10-05 09:00:00', '2024-08-23 14:05:00.000', '2024-08-23 14:05:00.000'),
('ck9x7vb7v000003mqfgh789f', 'ck9wz8q7v000003mqa1khqvxs', 'ck9x1rp7v000003mqjlchfbvn', 'ck9x3sl7v000003mq84vcxkfp', 'Wellness Workshop', 'Learn the secrets to a healthy lifestyle.', 'wellness_workshop.jpg', 'wellness_workshop_tf.jpg', 'Bali Retreat Center', 0, NULL, 'ONGOING', 't.me/msib_batch_7', '2024-09-20 08:30:00', '2024-08-23 14:10:00.000', '2024-08-23 14:10:00.000'),
('ck9x7vb7v000004mqijk321g', 'ck9wz8q7v000001mqcn64htz8', 'ck9x1rp7v000001mqerfg8lck', 'ck9x3sl7v000001mqjc4pqvtg', 'AI Conference 2024', 'Join industry leaders discussing the future of AI.', 'ai_conference.jpg', 'ai_conference_tf.jpg', 'Bandung Convention Center', 1, 750000, 'PENDING', 't.me/msib_batch_7', '2024-11-12 09:00:00', '2024-08-23 14:15:00.000', '2024-08-23 14:15:00.000'),
('ck9x7vb7v000005mqlmn654h', 'ck9wz8q7v000002mqcpjq6gxm', 'ck9x1rp7v000002mqebdgw9xt', 'ck9x3sl7v000002mqkvrjtybg', 'Game Dev Meetup', 'Network with game developers from across the country.', 'game_dev_meetup.jpg', 'game_dev_meetup_tf.jpg', 'Yogyakarta Tech Hub', 0, NULL, 'DONE', 't.me/msib_batch_7', '2024-08-01 14:00:00', '2024-08-23 14:20:00.000', '2024-08-23 14:20:00.000'),
('ck9x7vb7v000006mqopq987i', 'ck9wz8q7v000003mqa1khqvxs', 'ck9x1rp7v000003mqjlchfbvn', 'ck9x3sl7v000003mq84vcxkfp', 'Yoga Retreat', 'Rejuvenate your mind and body with our expert instructors.', 'yoga_retreat.jpg', 'yoga_retreat_tf.jpg', 'Ubud Wellness Center', 1, 400000, 'PENDING', 't.me/msib_batch_7', '2024-12-01 07:00:00', '2024-08-23 14:25:00.000', '2024-08-23 14:25:00.000'),
('ck9x7vb7v000007mqrtu543j', 'ck9wz8q7v000001mqcn64htz8', 'ck9x1rp7v000001mqerfg8lck', 'ck9x3sl7v000001mqjc4pqvtg', 'Cybersecurity Summit', 'Stay ahead of the latest threats and solutions.', 'cybersecurity_summit.jpg', 'cybersecurity_summit_tf.jpg', 'Jakarta Tech Park', 1, 650000, 'ONGOING', 't.me/msib_batch_7', '2024-09-25 10:00:00', '2024-08-23 14:30:00.000', '2024-08-23 14:30:00.000'),
('ck9x7vb7v000008mqstu876k', 'ck9wz8q7v000002mqcpjq6gxm', 'ck9x1rp7v000002mqebdgw9xt', 'ck9x3sl7v000002mqkvrjtybg', 'Indie Game Fest', 'Celebrate indie game development with fellow enthusiasts.', 'indie_game_fest.jpg', 'indie_game_fest_tf.jpg', 'Bali Indie Arena', 1, 200000, 'DONE', 't.me/msib_batch_7', '2024-07-15 09:00:00', '2024-08-23 14:35:00.000', '2024-08-23 14:35:00.000'),
('ck9x7vb7v000009mquvw210l', 'ck9wz8q7v000003mqa1khqvxs', 'ck9x1rp7v000003mqjlchfbvn', 'ck9x3sl7v000003mq84vcxkfp', 'Healthy Cooking Class', 'Master the art of healthy cooking.', 'healthy_cooking_class.jpg', 'healthy_cooking_class_tf.jpg', 'Jakarta Culinary School', 0, NULL, 'PENDING', 't.me/msib_batch_7', '2024-10-18 10:00:00', '2024-08-23 14:40:00.000', '2024-08-23 14:40:00.000'),
('ck9x7vb7v000010mqxyz432m', 'ck9wz8q7v000001mqcn64htz8', 'ck9x1rp7v000001mqerfg8lck', 'ck9x3sl7v000001mqjc4pqvtg', 'Blockchain Summit', 'Explore the future of decentralized technologies.', 'blockchain_summit.jpg', 'blockchain_summit_tf.jpg', 'Jakarta Blockchain Hub', 1, 800000, 'ONGOING', 't.me/msib_batch_7', '2024-10-22 09:30:00', '2024-08-23 14:45:00.000', '2024-08-23 14:45:00.000');

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` varchar(191) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `event_id` varchar(255) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`id`, `user_id`, `event_id`, `created_at`, `updated_at`) VALUES
('cm0cafjqa000a0cl3bzaw2otp', 'ck9wz1p7v000003mqflht9thx', 'ck9x7vb7v000003mqfgh789f', '2024-08-27 18:37:54.083', '2024-03-01 11:51:20.000'),
('cm0cafjqa000a0cl3bzaw5otp', 'ck9wz1p7v000001mqcgjd3v29', 'ck9x7vb7v000004mqijk321g', '2024-08-27 18:37:54.043', '2024-09-02 10:02:42.000'),
('cm0cafjqa000b0cl32xwg6byi', 'ck9wz1p7v000002mqy5jk7gtl', 'ck9x7vb7v000003mqfgh789f', '2024-08-27 18:37:54.032', '2023-12-06 11:50:40.000'),
('cm0cafjqa000c0cl34lg80z58', 'ck9wz1p7v000001mqcgjd3v29', 'ck9x7vb7v000006mqopq987i', '2024-08-27 18:37:54.053', '2023-09-25 17:31:03.000'),
('cm0cafjqa000c0cl34lg80z67', 'ck9wz1p7v000003mqflht9thx', 'ck9x7vb7v000002mqxyz456e', '2024-08-27 18:37:54.074', '2023-12-17 19:53:30.000'),
('cm0cafjqa000c0cl34lg80z71', 'ck9wz1p7v000001mqcgjd3v29', 'ck9x7vb7v000007mqrtu543j', '2024-08-27 18:37:53.992', '2024-01-12 22:19:23.000'),
('cm0cafjqa000c0cl34lgB0z24', 'ck9wz1p7v000002mqy5jk7gtl', 'ck9x7vb7v000004mqijk321g', '2024-08-27 18:37:54.063', '2024-07-20 00:11:15.000'),
('cm0cafjqa000e0cl36ggp2zup', 'ck9wz1p7v000003mqflht9thx', 'ck9x7vb7v000006mqopq987i', '2024-08-27 18:37:54.007', '2024-10-17 11:34:54.000'),
('cm0cafjqa000e0cl36ggp43up', 'ck9wz1p7v000003mqflht9thx', 'ck9x7vb7v000001mqabc123d', '2024-08-27 18:37:54.015', '2024-09-13 16:33:12.000');

-- --------------------------------------------------------

--
-- Table structure for table `follows`
--

CREATE TABLE `follows` (
  `id` varchar(191) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `channel_id` varchar(255) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `follows`
--

INSERT INTO `follows` (`id`, `user_id`, `channel_id`, `created_at`, `updated_at`) VALUES
('ck9x5ua7v000001mq5xdl9kmp', 'ck9wz1p7v000002mqy5jk7gtl', 'ck9wz8q7v000001mqcn64htz8', '2024-08-23 13:00:00.000', '2024-08-23 13:00:00.000'),
('ck9x5ua7v000002mqavtxrjgr', 'ck9wz1p7v000003mqflht9thx', 'ck9wz8q7v000002mqcpjq6gxm', '2024-08-23 13:05:00.000', '2024-08-23 13:05:00.000'),
('ck9x5ua7v000003mqshftvdsj', 'ck9wz1p7v000001mqcgjd3v29', 'ck9wz8q7v000003mqa1khqvxs', '2024-08-23 13:10:00.000', '2024-08-23 13:10:00.000'),
('ck9x5ua7v000004mqkldzbcsm', 'ck9wz1p7v000003mqflht9thx', 'ck9wz8q7v000001mqcn64htz8', '2024-08-23 13:15:00.000', '2024-08-23 13:15:00.000'),
('ck9x5ua7v000005mqwdfmhbqx', 'ck9wz1p7v000002mqy5jk7gtl', 'ck9wz8q7v000003mqa1khqvxs', '2024-08-23 13:20:00.000', '2024-08-23 13:20:00.000');

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` varchar(191) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `name`, `created_at`, `updated_at`) VALUES
('ck9x3sl7v000001mqjc4pqvtg', 'Innovation', '2024-08-23 12:30:00.000', '2024-08-23 12:30:00.000'),
('ck9x3sl7v000002mqkvrjtybg', 'Esports', '2024-08-23 12:35:00.000', '2024-08-23 12:35:00.000'),
('ck9x3sl7v000003mq84vcxkfp', 'Nutrition', '2024-08-23 12:40:00.000', '2024-08-23 12:40:00.000'),
('cm06i8u1s0000mkincse25lx3', 'JARI', '2024-08-23 09:24:12.450', '2024-08-23 09:24:28.192');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(191) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `role` enum('ADMIN','USER') DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `image`, `role`, `created_at`, `updated_at`) VALUES
('ck9wz1p7v000001mqcgjd3v29', 'Alice Johnson', 'alice.johnson@example.com', 'alice.jpg', 'ADMIN', '2024-08-23 10:30:00.000', '2024-08-23 10:30:00.000'),
('ck9wz1p7v000002mqy5jk7gtl', 'Bob Smith', 'bob.smith@example.com', 'bob.jpg', 'USER', '2024-08-23 10:35:00.000', '2024-08-23 10:35:00.000'),
('ck9wz1p7v000003mqflht9thx', 'Charlie Brown', 'charlie.brown@example.com', 'charlie.jpg', 'USER', '2024-08-23 10:40:00.000', '2024-08-23 10:40:00.000');

-- --------------------------------------------------------

--
-- Table structure for table `user_events`
--

CREATE TABLE `user_events` (
  `id` varchar(191) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `event_id` varchar(255) DEFAULT NULL,
  `tf_image` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('05891b61-960e-43fc-804d-5a5f9b97bffb', '0a646bd7ea514ceaa9278a1144ef9afbb520e8494dcabc208888cda713b603da', '2024-08-26 10:24:09.294', '20240826102409_added_fart_field', NULL, NULL, '2024-08-26 10:24:09.287', 1),
('6d2bcc35-c33d-4f5c-afd8-42aef42dfdcd', '8fa3a8df42fb28cfdfdcb4e1cf96af5629385ceff87c46952838aaf2ece24d07', '2024-08-26 10:22:39.069', '0_init', NULL, NULL, '2024-08-26 10:22:38.863', 1),
('c67a4145-6f6d-45f9-9df5-2a6c87fa12f5', 'aaa55fecd608ed05b70d22a53222b54d608fca70bb76c0f7ce9e1175b4774faa', '2024-08-26 10:24:26.043', '20240826102426_added_fart_field', NULL, NULL, '2024-08-26 10:24:26.034', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `channels`
--
ALTER TABLE `channels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `discussion_room_id` (`discussion_room_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `discussion_rooms`
--
ALTER TABLE `discussion_rooms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `event_id` (`event_id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `channel_id` (`channel_id`),
  ADD KEY `tag_id` (`tag_id`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `event_id` (`event_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `follows`
--
ALTER TABLE `follows`
  ADD PRIMARY KEY (`id`),
  ADD KEY `channel_id` (`channel_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_events`
--
ALTER TABLE `user_events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `event_id` (`event_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `channels`
--
ALTER TABLE `channels`
  ADD CONSTRAINT `channels_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `chats`
--
ALTER TABLE `chats`
  ADD CONSTRAINT `chats_ibfk_1` FOREIGN KEY (`discussion_room_id`) REFERENCES `discussion_rooms` (`id`),
  ADD CONSTRAINT `chats_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `discussion_rooms`
--
ALTER TABLE `discussion_rooms`
  ADD CONSTRAINT `discussion_rooms_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`);

--
-- Constraints for table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `events_ibfk_1` FOREIGN KEY (`channel_id`) REFERENCES `channels` (`id`),
  ADD CONSTRAINT `events_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `events_ibfk_3` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`);

--
-- Constraints for table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `favorites_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`);

--
-- Constraints for table `follows`
--
ALTER TABLE `follows`
  ADD CONSTRAINT `follows_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `follows_ibfk_2` FOREIGN KEY (`channel_id`) REFERENCES `channels` (`id`);

--
-- Constraints for table `user_events`
--
ALTER TABLE `user_events`
  ADD CONSTRAINT `user_events_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_events_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
