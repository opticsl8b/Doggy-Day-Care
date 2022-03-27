INSERT INTO user (first_name, last_name, phone_number, address, email, password)
VALUES
    
    ("John", "Smith", "0491-570-006", "67 Glen William Road, Jaggan", "john@msn.com", "$10$7D0ebLWLtsaBcmZnAzFQs.ImQ5flFicKCwGSoszG2sCP4ixnFwLXq"),
    ("James", "Smith", "0456-789-045", "8 Begley Street, Boogan", "Jmes@live.com", "eHekPc3UTIBgWc5"),
    ("Robert", "Williams", "0491-570-156", "645 Isaac Road, Welshpool", "kddailey@msn.com","jwNyQDGRS4OeMMP"),
    ("Momoko", "Brown", "0491-570-157", "36 Frouds Road, Tarin Rock", "Mom@icloud.com", "37cdaiZCVRxaTjq"),
    ("Juan", "Garcia", "0491-570-158", "917 Balonne Street, Orton Park", "mbsn@gmail.com", "b2dadaByZhP4BFz"),
    ("Jennifer", "Jones", "0491-570-160", "43 Garden Place Road, Buckrabanyule", "Jenni@optonline.net", "gMtDxbBJxAgVhce"),
    ("George", "Miller", "0491-570-161", "764 Roseda Road, Splinter Creek", "George@live.com", "vuoLfpFrHcwDUIm"),
    ("Michael", "Davis", "0491-570-162", "92 Noalimba Avenue, Rollingstone", "Michael@yahoo.ca", "RDmnaFblxhXyH7M"),
    ("Kishan", "Rodriguez", "0491-570-163", "14 Ocean Parade, Warwick Dc", "Kishan@comcast.net", "j3bQv1csgp1oApK"),
    ("Mayra", "Walters", "0491-570-164", "26 Hodgson St, Bendemeer", "Mayra@live.com", "YXLFFDPS41usZ1S"),
    ("Luca", "Wilson", "0491-570-165", "95 Norton Street, Kadina", "luca@msn.com", "m0goiNUwtVLs5dr"),
    ("Oliver", "Moore", "0491-570-166", "82 Farnell Street, Gosnells", "Oli@icloud.com", "uQ9lU6nSUNG6Wsu");



INSERT INTO dog (dog_name, gender, breed, age, size, user_id, note)
VALUES

    ("Aspen", "male", "labrador retriever", 1,"large", 1, "vaccines up to date"),
    ("Athena", "female", "bulldog", 4,"large", 2,"Allergic to peanuts" ),
    ("Bailey", "male", "german shepherd", 2, "extra-large", 3, "allergic to fish"),
    ("Coco", "female", "poodle", 3, "small", 4, "desexed in Feb 2022. Allergic to peanuts"),
    ("Daisy", "female", "golden retriever", 1, "large", 5, "No allergies"),
    ("Bear", "male", "chihuahua", 3, "small", 6, "Affraid of lightning and thunders. Special diet."),
    ("Edie", "male", "french bulldog", 2, "medium", 7, "Rescued with history of neglection"),
    ("Greta", "female", "afghan hound", 5, "large", 8, "pending proof of complete vaccination status"),
    ("Izzy", "female", "great dane", 1, "extra-large", 9, "Izzy needs encouragment to eat. loosing weight rapidly in the last 2 weeks."),
    ("Kona", "male", "terrier", 2, "medium", 10, "presenting separation anxiety behaviours since last week"),
    ("Lola", "female", "siberian husky", 3, "large", 11, "affraid of motorcycles. allergic to wheat"),
    ("Basil", "male", "pug", 2, "small", 12, "Basil is booked to stay for two weeks in Agust2022. Pending dates confirmation");


INSERT INTO booking (session_datetime, name, created_at, updated_at)
VALUES

    ('2022-03-25 14:00:00', "Obedience Training Level 1", sysdate(), sysdate()),
    ('022-03-25 14:00:00', "Obedience Training Level 2", sysdate(), sysdate()),
    ('2022-03-25 11:00:00', "Grooming", sysdate(), sysdate()),
    ('2022-03-28 10:00:00', "Obedience Training Level 1", sysdate(), sysdate()),
    ('2022-03-28 14:00:00', "Obedience Training Level 2", sysdate(), sysdate()),
    ('2022-03-30 14:00:00', "Grooming", sysdate(), sysdate()),
    ('2022-03-30 14:00:00', "Obedience Training Level 1", sysdate(), sysdate()),
    ('2022-04-01 14:00:00', "Obedience Training Level 2", sysdate(), sysdate()),
    ('2022-04-01 10:00:00', "Obedience Training Begginer", sysdate(), sysdate()),npm run session_datetime
    ('2022-04-01 14:00:00', "Grooming", sysdate(), sysdate());
   


INSERT INTO activity (dog_id, booking_id)
VALUES

    (1, 1),
    (2, 1),
    (3, 1),
    (4, 2),
    (5, 2),
    (6, 2),
    (7, 3),
    (8, 3),
    (9, 3),
    (10, 1);


INSERT INTO Message (title, message_content, created_at, updated_at, user_id)
VALUES

    ("Booking request for Basil", "Hi, I was wondering if you have any spots available for grooming next...", sysdate(), sysdate(), 4),
    ("Booking cancellation", "Hi, I just wanted to let you know that unfortunately, I am not going to be able to...", sysdate(), sysdate(), 7),
    ("Checking availability for accommodation", "Hi, we are planning to go on a holiday to Bali ...", sysdate(), sysdate(), 3),
    ("Obedience training", "Hi, I just wwondering when does the period for enrolment starts? ...", sysdate(), sysdate(), 5),
    ("Feedback", "Hi, I would like to thank...", sysdate(), sysdate(), 2),
    ("Enquiry", "Hi, Do you have spots for more puppies in daycare on Mondays?...", sysdate(), sysdate(), 1),
    ("This Friday event's", "Hi, is it possible to buy more tickets for...", sysdate(), sysdate(), 8),
    ("Grooming next week", "Hi, I woudl like to book a session for my dog Bear...", sysdate(), sysdate(), 9),
    ("Extra day of day care", "Hi, on the 13 of May I am going to be working late ...", sysdate(), sysdate(), 12),
    ("Change session", "Hi, is it possible to attent a session in the morning instead of...", sysdate(), sysdate(), 10);
    



