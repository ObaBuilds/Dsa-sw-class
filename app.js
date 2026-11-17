function greet(name) {
    return `Hello, ${name}!`;
}

const names = [
    'Liam', 'Olivia', 'Noah', 'Emma', 'Oliver',
    'Ava', 'Elijah', 'Charlotte', 'James', 'Sophia',
    'William', 'Amelia', 'Benjamin', 'Isla', 'Lucas',
    'Mia', 'Henry', 'Evelyn', 'Theodore', 'Harper',
    'Mateo', 'Luna', 'Daniel', 'Camila', 'Michael',
    'Gianna', 'Alexander', 'Abigail', 'Sebastian', 'Ella',
    'Jack', 'Elizabeth', 'Owen', 'Eleanor', 'Asher',
    'Emily', 'Ezra', 'Avery', 'John', 'Sofia',
    'Hudson', 'Chloe', 'Leo', 'Scarlett', 'Muhammad',
    'Victoria', 'Thomas', 'Aria', 'Charles', 'Grace'
];

names.forEach((name) => console.log(greet(name)));