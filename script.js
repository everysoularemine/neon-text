const text = "С⠀днём⠀рождения!❤";
const neonText = document.getElementById("neon-text");

text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.className = 'letter';
    span.textContent = char;
    neonText.appendChild(span);
    
    // Задержка анимации для каждой буквы
    span.style.animation = `draw 0.5s forwards ${index * 150}ms`;
});
