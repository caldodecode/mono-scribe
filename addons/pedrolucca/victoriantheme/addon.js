export default async function() {
    
    function loadTheme() {
        const filename = import.meta.url;
        const dirpath = filename.substring(0, filename.lastIndexOf("/"));
        const link = document.createElement('link');

        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = `${dirpath}/css/main.css`;
        
        document.head.appendChild(link);
    }

    loadTheme();
}
