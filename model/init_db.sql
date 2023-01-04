DROP TABLE IF EXISTS diary;

DROP TABLE IF EXISTS days;

CREATE TABLE `days` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    `date` VARCHAR(255),
    `entry` VARCHAR(255),
    `accomplish` VARCHAR(255)
); 
INSERT INTO `days` (`date`, `entry`, `accomplish`)
    VALUES ('12-21-2022', 'I finished Christmas shopping today', 'finish Christmas shopping, do laundry'), ('12-22-2022', 'I was feeling productive today', 'watch lessons, visit the library');