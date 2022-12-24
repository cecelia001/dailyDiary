DROP TABLE IF EXISTS diary;
CREATE TABLE `days` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    `date` DATE,
    `entry` VARCHAR(1500),
    `accomplish` VARCHAR(255),
); 
INSERT INTO `days` (date, entry, accomplish)
    VALUES ('2022-12-21', 'I finished Christmas shopping today', 'finish Christmas shopping, do laundry'), ('2022-12-22', 'I was feeling productive today', 'watch lessons, visit the library');