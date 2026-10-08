  const kort = document.querySelectorAll(".tjeneste");
            const observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("synlig");
                    }
                });
            }, { threshold: 0.2 });
            kort.forEach(function (k) {
                observer.observe(k);
            });