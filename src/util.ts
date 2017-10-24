export function query(selector: string): Element[] {
  return Array.from(document.querySelectorAll(selector));
}

export function getOvserber(): IntersectionObserver {
  const ovserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio <= 0) return;
      console.log('Show Element')
      entry.target.classList.add('is-active');
      ovserver.unobserve(entry.target);
    });
  }, /*{ rootMargin: "200px 0px" }*/);
  return ovserver;
}
