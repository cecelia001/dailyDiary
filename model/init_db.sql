DROP TABLE IF EXISTS diary;

DROP TABLE IF EXISTS days;

CREATE TABLE `days` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    `date` VARCHAR(255),
    `entry` VARCHAR(255),
    `accomplish` VARCHAR(255)
); 
INSERT INTO `days` (`date`, `entry`, `accomplish`)
    VALUES ('12-21-2022', 'I felt ready to take on the day this morning. Drank some tea and got started on the job hunt. Taking advice from leaders in the field and working on creating new projects.', 'finish Christmas shopping, do laundry'), 
    ('12-22-2022', 'Rewatched some videos on React and Vue today. Its crazy how much you can pick up the second time around, when you are more comfortable with the topic. Excited to relax and wrap some Christmas presents tomorrow morning.', 'watch lessons, visit the library'),
    ('12-23-2022', 'Finally got in the holiday spirit. Christmas music playing, wrapping gifts, hot chocolate all made the perfect morning.', 'wrap presents');