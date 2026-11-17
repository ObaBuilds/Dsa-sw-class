function greet(name) {
    return `Hello, ${name}!`;
}

const names = [
    'Liam', 'Olivia', 'Noah', 'Emma', 'Oliver',
    'Ava', 'Elijah', 'Charlotte', 'James', 'Sophia',
];

names.forEach((name) => console.log(greet(name)));