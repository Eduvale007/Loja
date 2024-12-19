window.addEventListener('scroll', () => {
    const progress = document.getElementById('progress');
    const header = document.getElementById('header');
    const titleProjects = document.querySelector('.title__projects');
  
    // Retângulo de posição do elemento titleProjects
    const titleRect = titleProjects.getBoundingClientRect();

    // Calcula se o elemento está na posição de 30% da altura da viewport
    const viewportHeight = window.innerHeight; // Altura da viewport
    const targetPosition = viewportHeight * 0.1; // 30% da altura

    if (titleRect.top <= targetPosition) {
        // Header desaparece e barra de progresso é completada
        progress.style.width = '100%';
        header.style.transition = 'opacity 0.5s ease-out';
        header.style.opacity = '0';
        header.style.pointerEvents = 'none'; // Evita interações com o header
    } else {
        // Header volta a aparecer e a barra acompanha o scroll
        const scrollTop = window.scrollY; // Pixels rolados
        const docHeight = document.body.scrollHeight; // Altura total do documento
        const scrollPercentage = (scrollTop / (docHeight - viewportHeight)) * 100;
        
        progress.style.width = `${scrollPercentage}%`;
        header.style.opacity = '1';
        header.style.pointerEvents = 'auto'; // Reativa interações com o header
    }
});
