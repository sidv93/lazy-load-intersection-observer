if(!!window.IntersectionObserver) {
    let observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    console.log('in function');
                    entry.target.src = entry.target.dataset.src;
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3, rootMargin: "0px 0px 0px 0px" }
    );
    document.querySelectorAll("img").forEach(img => { 
        observer.observe(img)
    });
}

