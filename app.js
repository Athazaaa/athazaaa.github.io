fetch('sites.json')
    .then(response => response.json())
    .then(sites => {
        const linksContainer = document.getElementById('links-container');

        sites.forEach(site => {
            const { name, link, image } = site;

            const linkItem = document.createElement('li');
            const linkAnchor = document.createElement('a');
            linkAnchor.href = link;
            linkAnchor.textContent = name;

            const faviconUrl = `/images/${image}`;
            const img = new Image();
            img.src = faviconUrl;

            img.onload = function() {
                linkAnchor.style.backgroundImage = `url(${img.src})`;
            };

            img.onerror = function() {
                linkAnchor.style.backgroundImage = 'url(red-x.png)'; // Fallback to red X image
                linkAnchor.style.backgroundSize = 'contain';
                linkAnchor.style.backgroundRepeat = 'no-repeat';
                linkAnchor.style.backgroundPosition = 'center';
            };

            linkItem.appendChild(linkAnchor);
            linksContainer.appendChild(linkItem);
        });
    })
    .catch(error => {
        console.error('Error loading sites:', error);
    });
