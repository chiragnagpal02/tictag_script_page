-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 12, 2020 at 02:17 AM
-- Server version: 5.7.19
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tictag_data`
--

CREATE DATABASE IF NOT EXISTS `tictag` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `tictag_scripts`;

-- --------------------------------------------------------

--
-- Table structure for table `tictag`
--

DROP TABLE IF EXISTS `tictag_scripts`;
CREATE TABLE IF NOT EXISTS `tictag_scripts` (
  `script_id` int(11) NOT NULL AUTO_INCREMENT,
  `script_name` varchar(100) NOT NULL,
  `script_description` varchar(200) NOT NULL DEFAULT 'NEW',
  `script_link` varchar(500) NOT NULL DEFAULT '#',
  `created_by` varchar(50) NOT NULL DEFAULT 'CHIRAG'
  PRIMARY KEY (`script_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order`
--

INSERT INTO `tictag_scripts` VALUES
(1, 1, '9781434474234', 1),
(2, 1, '9781449474212', 1);


