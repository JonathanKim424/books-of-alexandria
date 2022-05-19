const { Book } = require('../models');

const bookData = [
    {
        book_title: '1984',
        author: 'George Orwell',
        isbn: '978-0451524935',
        genre_id: [1],
        price: 9.99,
        stock: 10,
        book_img: "https://images-na.ssl-images-amazon.com/images/I/51sdWhtHOwL.jpg",
        onSale: false
    },
    {
        book_title: 'A Brief History of Time',
        author: 'Stephen Hawking',
        isbn: '978-0553380163',
        genre_id: [7],
        price: 9.99,
        stock: 10,
        book_img: "https://images-na.ssl-images-amazon.com/images/I/A1xkFZX5k-L.jpg",
        onSale: false
    },
    {
        book_title: 'Dune',
        author: 'Frank Herbert',
        isbn: '978-0441013593',
        genre_id: [1],
        price: 14.99,
        stock: 10,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/91OoNH1+MHL.jpg',
        onSale: true
    },
    {
        book_title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        isbn: '978-1451673319',
        genre_id: [1],
        price: 9.99,
        stock: 10,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/71OFqSRFDgL.jpg',
        onSale: true
    },
    {
        book_title: 'The Road',
        author: 'Cormac McCarthy',
        isbn: '978-0307387899',
        genre_id: [1],
        price: 14.99,
        stock: 10,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/71IJ1HC2a3L.jpg',
        onSale: false
    },
    {
        book_title: `The Southern Book Club's Guide to Slaying Vampires`,
        author: 'Grady Hendrix',
        isbn: '446543215',
        genre_id: [3],
        price: 9.99,
        stock: 2,
        book_img: 'https://m.media-amazon.com/images/I/516HVDpIskL.jpg',
        onSale: false
    },
    {
        book_title: `Mother of Learning Arc 2: Mother of Learning, Book 2`,
        author: 'nobody103',
        isbn: '46523165123',
        genre_id: [3],
        price: 41.99,
        stock: 3,
        book_img: 'https://m.media-amazon.com/images/I/51cY0mVVk-L.jpg',
        onSale: false
    },
    {
        book_title: `Winterset Hollow`,
        author: 'Jonathan Edward Durham ',
        isbn: '89923215',
        genre_id: [3],
        price: 4.79,
        stock: 5,
        book_img: 'https://m.media-amazon.com/images/I/41+w3cHqEXL.jpg',
        onSale: true
    },
    {
        book_title: `Berserk Deluxe Volume 1 Hardcover  Illustrated`,
        author: 'Kentaro Miura',
        isbn: '13216541',
        genre_id: [3],
        price: 29.99,
        stock: 3,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/41r2OneNJhL._SX328_BO1,204,203,200_.jpg',
        onSale: false
    },
    {
        book_title: 'The Stand',
        author: 'Stephen King',
        isbn: '5649846',
        genre_id: [3],
        price: 7.90,
        stock: 6,
        book_img: 'https://m.media-amazon.com/images/I/51vksp09TJL.jpg',
        onSale: false
    },
    {
        book_title: 'Book of Night',
        author: 'Holly Black',
        isbn: '31612',
        genre_id: [3],
        price: 17.12,
        stock: 2,
        book_img: 'https://m.media-amazon.com/images/I/51zcGXjurvL.jpg',
        onSale: false
    },
    {
        book_title: `World War Z: The Complete Edition: An Oral History of the Zombie War`,
        author: 'Max Brooks',
        isbn: '564165423',
        genre_id: [3],
        price: 23.98,
        stock: 3,
        book_img: 'https://m.media-amazon.com/images/I/618Q7oM+rUL.jpg',
        onSale: false
    },
    {
        book_title: `The 7 1/2 Deaths of Evelyn Hardcastle`,
        author: 'Stuart Turton',
        isbn: '3126532',
        genre_id: [3],
        price: 10.34,
        stock: 6,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/51cY5RgbpOL._SX331_BO1,204,203,200_.jpg',
        onSale: false
    },
    {
        book_title: 'House of Leaves Paperback',
        author: 'Mark Z. Danielewski',
        isbn: '44821321',
        genre_id: [3],
        price: 21.94,
        stock: 3,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/41jpemUkbEL._SX369_BO1,204,203,200_.jpg',
        onSale: true
    },
    {
        book_title: 'The Shining ',
        author: 'Stephen King',
        isbn: '513165',
        genre_id: [3],
        price: 10.73,
        stock: 4,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/41ksNxnzTIL._SX322_BO1,204,203,200_.jpg',
        onSale: false
    },
    {
        book_title: 'Hidden Pictures',
        author: ' Jason Rekulak ',
        isbn: '11615632',
        genre_id: [3],
        price: 17.63,
        stock: 6,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/51pfwFKNgRL._SX329_BO1,204,203,200_.jpg',
        onSale: false
    },
    {
        book_title: 'The Lincoln Highway: A Novel',
        author: 'Amor Towles',
        isbn: '161651',
        genre_id: [4],
        price: 18.00,
        stock: 8,
        book_img: 'https://m.media-amazon.com/images/I/51ogRspA80L.jpg',
        onSale: false
    },
    {
        book_title: `The Dictionary of Lost Words`,
        author: 'Pip Williams',
        isbn: '6123165',
        genre_id: [4],
        price: 17.00,
        stock: 5,
        book_img: 'https://m.media-amazon.com/images/I/51gnGJrTPuL.jpg',
        onSale: false
    },
    {
        book_title: `The Song of Achilles`,
        author: 'Madeline Miller',
        isbn: '1316532',
        genre_id: [4],
        price: 10.99,
        stock: 2,
        book_img: 'https://m.media-amazon.com/images/I/61DfFK65gwL.jpg',
        onSale: true 
    },
    {
        book_title: `Pachinko`,
        author: 'Min Jin Lee',
        isbn: '321216',
        genre_id: [4],
        price: 11.99,
        stock: 2,
        book_img: 'https://m.media-amazon.com/images/I/81VQZ83eGfL._AC_UY218_.jpg',
        onSale: false
    },
    {
        book_title: `Ulrich: Barbarians of Rome Book One`,
        author: 'James Walker',
        isbn: '865498',
        genre_id: [4],
        price: 10.99,
        stock: 5,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/51vYn8be92L._SX331_BO1,204,203,200_.jpg',
        onSale: true
    },
    {
        book_title: `Trust`,
        author: 'Hernan Diaz, Edoardo Ballerini, et al.',
        isbn: '131651',
        genre_id: [4],
        price: 25.20,
        stock: 4,
        book_img: 'https://m.media-amazon.com/images/I/914flIXRHsL._AC_UY218_.jpg',
        onSale: false
    },
    {
        book_title: 'The Stranger in the Lifeboat',
        author: 'Mitch Albom',
        isbn: '23138521',
        genre_id: [4],
        price: 11.33,
        stock: 2,
        book_img: 'https://m.media-amazon.com/images/I/41b0gavs7mL.jpg',
        onSale: false
    },
    {
        book_title: 'A Gentleman in Moscow',
        author: 'Amor Towles, Nicholas Guy Smith, et al',
        isbn: '5132156',
        genre_id: [4],
        price: 9.99,
        stock: 5,
        book_img: 'https://m.media-amazon.com/images/I/811X9S6lDzL._AC_UY218_.jpg',
        onSale: true
    },
    {
        book_title: 'Circe',
        author: 'Madeline Miller, Perdita Weeks, et al.',
        isbn: '13215',
        genre_id: [4],
        price: 11.99,
        stock: 6,
        book_img: 'https://m.media-amazon.com/images/I/91AnXd9k-jL._AC_UY218_.jpg',
        onSale: false
    },
    {
        book_title: `The Invisible Life of Addie LaRue`,
        author: `V. E. Schwab, Julia Whelan, et al.`,
        isbn: '21318',
        genre_id: [4],
        price: 14.99,
        stock: 2,
        book_img: 'https://m.media-amazon.com/images/I/91mvfiYVPQL._AC_UY218_.jpg',
        onSale: false
    },
    {
        book_title: `The Last Green Valley`,
        author: 'Mark Sullivan',
        isbn: '498456',
        genre_id: [5],
        price: 5.99,
        stock: 10,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/91uyXpTwqkL._UX300__PJprime-reading,TopRight,0,-50_AC_UL604_SR604,400_.jpg',
        onSale: true
    },
    {
        book_title: 'War and Peace',
        author: ' Leo Tolstoy ',
        isbn: '123585',
        genre_id: [5],
        price: 17.99,
        stock: 5,
        book_img: 'https://m.media-amazon.com/images/I/51fyqN7woLL.jpg',
        onSale: false
    },
    {
        book_title: `The Paris Bookseller`,
        author: 'Kerri Maher',
        isbn: '78564',
        genre_id: [5],
        price: 5.99,
        stock: 5,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/91HNn6GVLaL._AC_UL604_SR604,400_.jpg',
        onSale: true
    },
    {
        book_title: `Beneath a Scarlet Sky`,
        author: 'Mark Sullivan',
        isbn: '56423',
        genre_id: [5],
        price: 5.99,
        stock: 2,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/81wRnKbEwlL._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL604_SR604,400_.jpg',
        onSale: false
    },
    {
        book_title: `The Second Mrs. Astor`,
        author: 'Shana Abe',
        isbn: '4561321',
        genre_id: [5],
        price: 11.98,
        stock: 6,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/717ejnxdbyL._AC_UL604_SR604,400_.jpg',
        onSale: false 
    },
    {
        book_title: 'All Quiet on the Western Front',
        author: 'Erich Maria Remarque',
        isbn: '32165',
        genre_id: [5],
        price: 6.99,
        stock: 4,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/81W6FVnN-gL._AC_UL302_SR302,200_.jpg',
        onSale: false
    },
    {
        book_title: 'The Pistoleer',
        author: 'James Carlos Blake',
        isbn: '4216523',
        genre_id: [5],
        price: 1.99,
        stock: 10,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/81+L4TVNw3L._AC_UL604_SR604,400_.jpg',
        onSale: true
    },
    {
        book_title: 'Surviving The Forest',
        author: 'Adiva Geffen',
        isbn: '6541123156',
        genre_id: [5],
        price: 16.99,
        stock: 5,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/61mT9WGanIL._AC_UL604_SR604,400_.jpg',
        onSale: true
    },
    {
        book_title: `My Daughter’s Keeper`,
        author: 'Adiva Geffen',
        isbn: '564654',
        genre_id: [5],
        price: 16.99,
        stock: 4,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/61U3xY4FORL._AC_UL604_SR604,400_.jpg',
        onSale: false
    },
    {
        book_title: 'Musashi',
        author: 'Eiji Yoshikawa',
        isbn: '4921645',
        genre_id: [5],
        price: 10.99,
        stock: 5,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/91Mwvs+y6NL._AC_UL604_SR604,400_.jpg',
        onSale: false
    },
    {
        book_title: 'The Picture of Dorian Gray',
        author: ' Oscar Wilde, Tony Walker, et al.',
        isbn: '421651',
        genre_id: [6],
        price: 8.99,
        stock: 5,
        book_img: 'https://m.media-amazon.com/images/I/81GvP6neg-L._AC_UY218_.jpg',
        onSale: false
    },
    {
        book_title: `Brideshead Revisited`,
        author: 'Evelyn Waugh, Jeremy Irons, et al.',
        isbn: '43215',
        genre_id: [6],
        price: 3.99,
        stock: 8,
        book_img: 'https://m.media-amazon.com/images/I/81ZejmFirmL._AC_UY218_.jpg',
        onSale: false
    },
    {
        book_title: `Carmilla`,
        author: ' Joseph Sheridan Lefanu and Carmen Maria Machado',
        isbn: '81312',
        genre_id: [6],
        price: 12.99,
        stock: 4,
        book_img: 'https://m.media-amazon.com/images/I/71Q7e2emUpL._AC_UY218_.jpg',
        onSale: false
    },
    {
        book_title: 'Another Country',
        author: 'James Baldwin, Dion Graham, et al.',
        isbn: '7865468',
        genre_id: [6],
        price: 11.99,
        stock: 6,
        book_img: 'https://m.media-amazon.com/images/I/91UVtBW9jdL._AC_UY218_.jpg',
        onSale: false
    },
    {
        book_title: `The Price of Salt`,
        author: ' Patricia Highsmith ',
        isbn: '465456',
        genre_id: [6],
        price: 5.95,
        stock: 6,
        book_img: 'https://m.media-amazon.com/images/I/616kheYoHvL._AC_UY218_.jpg',
        onSale: false
    },
    {
        book_title: 'The Well of Loneliness',
        author: 'Radclyffe Hall, Ell Potter, et al.',
        isbn: '87654',
        genre_id: [6],
        price: 7.99,
        stock: 5,
        book_img: 'https://m.media-amazon.com/images/I/A1iaxKpiBNL._AC_UY218_.jpg',
        onSale: false
    },
    {
        book_title: `Nightwood`,
        author: 'Djuna Barnes, Gemma Dawson, et al.',
        isbn: '896216',
        genre_id: [6],
        price: 9.99,
        stock: 6,
        book_img: 'https://m.media-amazon.com/images/I/A1xX7mAAIlL._AC_UY218_.jpg',
        onSale: true
    },
    {
        book_title: `The Berlin Stories`,
        author: 'Christopher Isherwood, Michael York, et al.',
        isbn: '432165',
        genre_id: [6],
        price: 10.18,
        stock: 8,
        book_img: 'https://m.media-amazon.com/images/I/61dtDkRABIL._AC_UY218_.jpg',
        onSale: false
    },
    {
        book_title: 'The Importance of Being Earnest',
        author: 'Oscar Wilde',
        isbn: '842165',
        genre_id: [6],
        price: 5.99,
        stock: 4,
        book_img: 'https://m.media-amazon.com/images/I/71w7lHEVzyL._AC_UY218_.jpg',
        onSale: true
    },
    {
        book_title: 'The Coddling of the American Mind',
        author: 'Greg Lukianoff and Jonathan Haidt',
        isbn: '645654',
        genre_id: [7],
        price: 18.00,
        stock: 7,
        book_img: 'https://m.media-amazon.com/images/I/71ux2n5KSIL._AC_UL320_.jpg',
        onSale: false 
    },
    {
        book_title: 'Supply Chain Foundations:',
        author: 'Eddie Davila',
        isbn: '874654',
        genre_id: [7],
        price: 45.00,
        stock: 4,
        book_img: 'https://m.media-amazon.com/images/I/71fN0urK5rL._AC_UL320_.jpg',
        onSale: false
    },
    {
        book_title: 'Who Gets In and Why: A Year Inside College Admissions',
        author: 'Jeffrey J. Selingo',
        isbn: '5132165',
        genre_id: [7],
        price: 14.99,
        stock: 4,
        book_img: 'https://m.media-amazon.com/images/I/71maieKxYXL._AC_UL320_.jpg',
        onSale: false
    },
    {
        book_title: 'Adult Learning: Linking Theory and Practice',
        author: 'Sharan B. Merriam and Laura L. Bierema',
        isbn: '8954321',
        genre_id: [7],
        price: 40.00,
        stock: 8,
        book_img: 'https://m.media-amazon.com/images/I/51VabBhEgML._AC_UL320_.jpg',
        onSale: true
    },
    {
        book_title: 'Qualitative Research: A Guide to Design and Implementation',
        author: ' Sharan B. Merriam and Elizabeth J. Tisdell',
        isbn: '789546',
        genre_id: [7],
        price: 40.00,
        stock: 9,
        book_img: 'https://m.media-amazon.com/images/I/51ivKNzOjfL._AC_UY218_.jpg',
        onSale: false
    },
    {
        book_title: 'The Price You Pay for College',
        author: 'Ron Lieber ',
        isbn: '7823165',
        genre_id: [7],
        price: 12.99,
        stock: 5,
        book_img: 'https://m.media-amazon.com/images/I/71-5LA2smxL._AC_UY218_.jpg',
        onSale: false
    },
    {
        book_title: 'Rescuing Socrates',
        author: 'Roosevelt Montás ',
        isbn: '85163',
        genre_id: [7],
        price: 9.48,
        stock: 5,
        book_img: 'https://m.media-amazon.com/images/I/71RQKexTOxS._AC_UY218_.jpg',
        onSale: true
    },
    {
        book_title: 'The Great Upheaval',
        author: 'Arthur Levine and Scott J. Van Pelt ',
        isbn: '72318',
        genre_id: [7],
        price: 22.49,
        stock: 6,
        book_img: 'https://m.media-amazon.com/images/I/8147O6jNyfL._AC_UY218_.jpg',
        onSale: false
    },
    {
        book_title: 'The Law of Higher Education',
        author: 'William A. Kaplin , Barbara A. Lee, et al.',
        isbn: '463215',
        genre_id: [7],
        price: 79.99,
        stock: 5,
        book_img: 'https://m.media-amazon.com/images/I/4169gpkp7hL._AC_UY218_.jpg',
        onSale: false
    },
    {
        book_title: `Tom's Park`,
        author: 'Thomas Campbell',
        isbn: '4216354',
        genre_id: [7],
        price: 79.99,
        stock: 5,
        book_img: 'https://m.media-amazon.com/images/I/71mAuVOz2oL._AC_UY218_.jpg',
        onSale: false
    },
    {
        book_title: 'The Girl Who Thought in Pictures',
        author: 'Dr. Temple Grandin',
        isbn: '765454',
        genre_id: [8],
        price: 17.99,
        stock: 4,
        book_img: 'https://m.media-amazon.com/images/I/517grQ5mG2L._AC_SY164_.jpg',
        onSale: false
    },
    {
        book_title: 'Inventions: A Visual Encyclopedia',
        author: 'John Doe',
        isbn: '436215',
        genre_id: [8],
        price: 29.99,
        stock: 8,
        book_img: 'https://m.media-amazon.com/images/I/51c4rtmHT9L._AC_SY164_.jpg',
        onSale: false
    },
    {
        book_title: 'Tell Me, Tree: All About Trees for Kids',
        author: 'John Doe',
        isbn: '73215',
        genre_id: [8],
        price: 14.99,
        stock: 4,
        book_img: 'https://m.media-amazon.com/images/I/51IceR5RtJL._AC_SY164_.jpg',
        onSale: false 
    },
    {
        book_title: 'Hello, Molly!: A Memoir',
        author: 'Molly Shannon',
        isbn: '4153215',
        genre_id: [9],
        price: 18.18,
        stock: 5,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/7146MOOZkYL._AC_UL604_SR604,400_.jpg',
        onSale: false
    },
    {
        book_title: `I'll Show Myself Out`,
        author: 'Jessi Klein',
        isbn: '456321',
        genre_id: [9],
        price: 18.56,
        stock: 9,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/714vv1T7weL._AC_UL604_SR604,400_.jpg',
        onSale: false
    },
    {
        book_title: 'Bossypants',
        author: 'Tina Fey',
        isbn: '73215',
        genre_id: [9],
        price: 5.95,
        stock: 7,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/81bV+0EMkBL._AC_UL604_SR604,400_.jpg',
        onSale: false
    },
    {
        book_title: 'Comedy Comedy Comedy Drama: A Memoir',
        author: 'Bob Odenkirk',
        isbn: '5482315',
        genre_id: [9],
        price: 23.99,
        stock: 6,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/91iUZ3FiAML._AC_UL604_SR604,400_.jpg',
        onSale: false
    },
    {
        book_title: `Born Standing Up: A Comic's Life`,
        author: 'Steve Martin',
        isbn: '4656523',
        genre_id: [9],
        price: 5.99,
        stock: 9,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/819m99BJmPL._AC_UL604_SR604,400_.jpg',
        onSale: false
    },
    {
        book_title: 'Failure Is an Option: An Attempted Memoir',
        author: 'H. Jon Benjamin',
        isbn: '625656',
        genre_id: [9],
        price: 8.99,
        stock: 2,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/91vFZ8BsYHL._AC_UL604_SR604,400_.jpg',
        onSale: true
    },
    {
        book_title: 'Is Everyone Hanging Out Without Me?',
        author: 'Mindy Kaling',
        isbn: '78616510',
        genre_id: [9],
        price: 6.99,
        stock: 8,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/91Y+96Afv7L._AC_UL604_SR604,400_.jpg',
        onSale: false
    },
    {
        book_title: 'Is This Anything?',
        author: 'Jerry Seinfeld ',
        isbn: '51326351',
        genre_id: [9],
        price: 13.99,
        stock: 8,
        book_img: 'https://m.media-amazon.com/images/I/41CrgJ90GsL.jpg',
        onSale: false
    },
    {
        book_title: 'The Bassoon King',
        author: 'Rainn Wilson',
        isbn: '5621',
        genre_id: [9],
        price: 10.99,
        stock: 8,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/81gRzJgAQbL._AC_UL604_SR604,400_.jpg',
        onSale: true 
    },
    {
        book_title: 'Almost Interesting: The Memoir',
        author: 'David Spade',
        isbn: '1318651',
        genre_id: [9],
        price: 12.49,
        stock: 6,
        book_img: 'https://m.media-amazon.com/images/I/51IvRxnA5rL.jpg',
        onSale: false
    },
    {
        book_title: 'Sicker in the Head',
        author: 'Judd Apatow',
        isbn: '41821465',
        genre_id: [9],
        price: 13.99,
        stock: 4,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/71kBRo6p6QL._AC_UL302_SR302,200_.jpg',
        onSale: false
    },
    {
        book_title: 'Last Words',
        author: 'George Carlin ',
        isbn: '54632153',
        genre_id: [9],
        price: 14.99,
        stock: 8,
        book_img: 'https://m.media-amazon.com/images/I/51iuy0PLgEL.jpg',
        onSale: false
    },
    {
        book_title: `Book Lovers`,
        author: 'Emily Henry, Julia Whelan, et al.',
        isbn: '45621621',
        genre_id: [2],
        price: 7.99,
        stock: 5,
        book_img: 'https://m.media-amazon.com/images/I/71ExdzwqeFL._AC_UL320_.jpg',
        onSale: false
    },
    {
        book_title: 'Dreamland: A Novel',
        author: ' Nicholas Sparks',
        isbn: '1354215',
        genre_id: [2],
        price: 10.99,
        stock: 8,
        book_img: 'https://m.media-amazon.com/images/I/911jGYInhCL._AC_UL320_.jpg',
        onSale: false
    },
    {
        book_title: 'Mr. Wrong Number',
        author: 'Lynn Painter, Callie Dalton, et al.',
        isbn: '42182313',
        genre_id: [2],
        price: 3.99,
        stock: 8,
        book_img: 'https://m.media-amazon.com/images/I/711viICUL5L._AC_UL320_.jpg',
        onSale: true
    },
    {
        book_title: 'Butterfly in Frost',
        author: 'Sylvia Day, Emma Wilder, et al.',
        isbn: '421523',
        genre_id: [2],
        price: 10.99,
        stock: 2,
        book_img: 'https://m.media-amazon.com/images/I/81brNR8zh+L._AC_UL320_.jpg',
        onSale: false
    },
    {
        book_title: 'Animal Farm',
        author: 'George Orwell ',
        isbn: '4321822',
        genre_id: [10],
        price: 7.99,
        stock: 5,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/41NzDuSdIfL._SX277_BO1,204,203,200_.jpg',
        onSale: false
    },
    {
        book_title: 'My Year of Rest and Relaxation',
        author: 'Ottessa Moshfegh',
        isbn: '7321352',
        genre_id: [10],
        price: 12.75,
        stock: 6,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/81ocyjjpE1L._AC_UL604_SR604,400_.jpg',
        onSale: false
    },
    {
        book_title: 'Living Your Best Life',
        author: 'Maxine Morrey',
        isbn: '8432135',
        genre_id: [10],
        price: 1.99,
        stock: 5,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/71Ttd0NU1-L._UX300__PJprime-reading,TopRight,0,-50_AC_UL604_SR604,400_.jpg',
        onSale: true 
    },
    {
        book_title: 'Slaughterhouse-Five',
        author: 'Kurt Vonnegut',
        isbn: '45132153',
        genre_id: [10],
        price: 14.98,
        stock: 9,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/71QcX1DbklL._AC_UL604_SR604,400_.jpg',
        onSale: false
    },
    {
        book_title: `You're Only Old Once!`,
        author: 'Dr. Seuss',
        isbn: '4343215',
        genre_id: [10],
        price: 9.99,
        stock: 7,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/51H-vtMAuYL._SX364_BO1,204,203,200_.jpg',
        onSale: false
    },
    {
        book_title: 'The Midnight Library:',
        author: 'Matt Haig, Carey Mulligan, et al.',
        isbn: '4321568',
        genre_id: [1],
        price: 8.99,
        stock: 5,
        book_img: 'https://m.media-amazon.com/images/I/81n7pLRZ2LL._AC_UY218_.jpg',
        onSale: false
    },
    {
        book_title: 'Sea of Tranquility',
        author: ' Emily St. John Mandel, John Lee, et al.',
        isbn: '4563215',
        genre_id: [1],
        price: 11.99,
        stock: 5,
        book_img: 'https://m.media-amazon.com/images/I/A1E6Y5CoCsL._AC_UY218_.jpg',
        onSale: false
    },
    {
        book_title: `The Handmaid's Tale`,
        author: 'Margaret Atwood, Claire Danes, et al.',
        isbn: '862168',
        genre_id: [1],
        price: 5.99,
        stock: 10,
        book_img: 'https://m.media-amazon.com/images/I/91MYe32UWmL._AC_UY218_.jpg',
        onSale: false
    },
    {
        book_title: 'Project Hail Mary',
        author: 'Andy Weir, Ray Porter, et al.',
        isbn: '8961562',
        genre_id: [1],
        price: 14.99,
        stock: 8,
        book_img: 'https://m.media-amazon.com/images/I/91vS2L5YfEL._AC_UY218_.jpg',
        onSale: true
    },
    {
        book_title: 'The Great Gatsby: The Original 1925 Edition',
        author: 'F. Scott Fitzgerald',
        isbn: '4021320',
        genre_id: [1],
        price: 6.55,
        stock: 8,
        book_img: 'https://m.media-amazon.com/images/I/61z0MrB6qOS._AC_UY218_.jpg',
        onSale: false
    },


];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;