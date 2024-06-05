CREATE TABLE `bookings` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `movie` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(10) NOT NULL,
    `date` DATE NOT NULL,
    `time` VARCHAR(10) NOT NULL,
    `seats` VARCHAR(255) NOT NULL,
    `total_price` DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;