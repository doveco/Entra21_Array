let list = [];

for (let i = 100; i <= 600; i += 100) {
  list.push(i);
}

for (let i = 0; i < list.length; i++) {
  console.log(`Índice: ${i}, Número: ${list[i]}`);
}