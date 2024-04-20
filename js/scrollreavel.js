const sr = ScrollReveal({ reset: true });

sr.reveal ('#banner', {
    origin: 'right',
    duration: 2000,
    distance: '20%',
})

sr.reveal('#sobre-container', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

sr.reveal('.card', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

sr.reveal('#registro-container', {
    origin: 'bottom',
    duration: 2000,
    distance: '20%'
});
