// Initialize AOS animations
AOS.init({
  duration: 1000,
  once: true,
});

// Simultaneously animate the hero in
anime
  .timeline({ easing: "easeOutExpo", delay: 300 })
  .add({
    targets: ".hero",
    opacity: [0, 1],
    scale: [1.05, 1],
    duration: 1000,
  })
  .add(
    {
      targets: ".hero h1",
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 700,
    },
    "-=600",
  )
  .add(
    {
      targets: ".reveal-line",
      width: ["0%", "60%"],
      duration: 600,
    },
    "-=500",
  )
  .add(
    {
      targets: ".hero p",
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
    },
    "-=400",
  );
