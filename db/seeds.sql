INSERT INTO user (first_name, last_name, phone_number, address, email, password)
VALUES
    
    ("Mary", "Johnson", "0491-570-006", "67 Glen William Road, Jaggan", "shang@msn.com", "sKCN4uE98t9mrVw"),
    ("James", "Smith", "0456-789-045", "8 Begley Street, Boogan", "dwendlan@live.com", "eHekPc3UTIBgWc5"),
    ("Robert", "Williams", "0491-570-156", "645 Isaac Road, Welshpool", "kiddailey@msn.com","jwNyQDGRS4OeMMP"),
    ("Momoko", "Brown", "0491-570-157", "36 Frouds Road, Tarin Rock", "grady@icloud.com", "37cdaiZCVRxaTjq"),
    ("John", "Garcia", "0491-570-158", "917 Balonne Street, Orton Park", "mbswan@gmail.com", "b2dadaByZhP4BFz"),
    ("Jennifer", "Jones", "0491-570-160", "43 Garden Place Road, Buckrabanyule", "druschel@optonline.net", "gMtDxbBJxAgVhce"),
    ("George", "Miller", "0491-570-161", "764 Roseda Road, Splinter Creek", "sjmuir@live.com", "vuoLfpFrHcwDUIm"),
    ("Michael", "Davis", "0491-570-162", "92 Noalimba Avenue, Rollingstone", "delpino@yahoo.ca", "RDmnaFblxhXyH7M"),
    ("Kishan", "Rodriguez", "0491-570-163", "14 Ocean Parade, Warwick Dc", "dowdy@comcast.net", "j3bQv1csgp1oApK"),
    ("Mayra", "Walters", "0491-570-164", "26 Hodgson St, Bendemeer", "themer@live.com", "YXLFFDPS41usZ1S"),
    ("Luca", "Wilson", "0491-570-165", "95 Norton Street, Kadina", "lukka@msn.com", "m0goiNUwtVLs5dr"),
    ("Oliver", "Moore", "0491-570-166", "82 Farnell Street, Gosnells", "dmbkiwi@icloud.com", "uQ9lU6nSUNG6Wsu");



INSERT INTO dog (user_name, dog_name, gender, breed, age, size, user_id, note)
VALUES

    ("Mary Johnson", "Aspen", "male", "labrador retriever", 1,"large", 1, "vaccines up to date"),
    ("James Smith", "Athena", "female", "bulldog", 4,"large",2,"Allergic to peanuts" ),
    ("Robert Williams", "Bailey", "male", "german shepherd", 2, "extra-large", 3, "allergic to fish"),
    ("Momoko Brown", "Coco", "female", "poodle", 3, "small", "", "desexed in Feb 2022. Allergic to peanuts"),
    ("John Gracia", "Daisy", "female", "golden retriever", 1, "large", "", "No allergies"),
    ("Jennifer Jones", "Bear", "male", "chihuahua", 3, "small", "", "Affraid of lightning and thunders. Special diet."),
    ("George Miller", "Edie", "male", "french bulldog", 2, "medium", "", "Rescued with history of neglection"),
    ("Michael Davis", "Greta", "female", "afghan hound", 5, "large", "", "pending proof of complete vaccination status"),
    ("Kishan Rodriguez", "Izzy", "female", "great dane", 1, "extra-large", "", "Izzy needs encouragment to eat. loosing weight rapidly in the last 2 weeks."),
    ("Mayra Walters", "Kona", "male", "terrier", 2, "medium", "", "presenting separation anxiety behaviours since last week"),
    ("Luca Wilson", "Lola", "female", "siberian husky", 3, "large", "", "affraid of motorcycles. allergic to wheat"),
    ("OLiver Moore", "Basil", "male", "pug", 2, "small", "", "Basil is booked to stay for two weeks in Agust2022. Pending dates confirmation");


INSERT INTO booking (date, session_time, name)
VALUES

    (25/03/2022, '10:00:00', "Aspen, Athena and Bailey"),
    (25/03/2022, '14:00:00', "Coco, Daisy and Bear"),
    (30/03/2022, '10:00:00', "Edie, Greta and Izzy"),
    (30/03/2022, '14:00:00', "Kona, Lola and Basil"),
    (01/04/2022, '10:00:00', "Aspen, Athena and Bailey"),
    (01/04/2022, '14:00:00', "Coco, Daisy and Bear"),
    (06/04/2022, '10:00:00', "Edie, Greta and Izzy"),
    (06/04/2022, '14:00:00', "Kona, Lola and Basil"),
    (08/04/2022, '10:00:00', "Aspen, Athena and Bailey"),
    (08/04/2022, '14:00:00', "Coco, Daisy and Bear");


INSERT INTO Activity (dog_id, booking_id)
VALUES

    (000, 111),
    (001, 112),
    (002, 113),
    (003, 114),
    (004, 115),
    (005, 116),
    (006, 117),
    (007, 118),
    (008, 119),
    (009, 120),
    (010, 121),
    (011, 122);



