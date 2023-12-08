// Fonction pour effectuer une requête AJAX
async function fetchData(url: string): Promise<any> {
    const response = await fetch(url);
    return await response.json();
  }
  
// Fonction pour fusionner et injecter les données dans le DOM
function renderData(users: any[], posts: any[]): void {
    // Exemple de logique de fusion : concaténation des noms des utilisateurs et des titres des messages
    const mergedData = users.map((user, index) => {
      return `${user.name} - ${posts[index].title}`;
    }).join('<br>');
  
    // Injectez les données dans le DOM
    const appContainer = document.getElementById('app');
    if (appContainer) {
      appContainer.innerHTML = mergedData;
    }
  }
  
  // Fonction pour filtrer les résultats
  function filterResults(keyword: string): void {
    // Implémentez la logique de filtrage ici
  }
  
  // Appel des requêtes AJAX
  async function loadData(): Promise<void> {
    try {
      const users = await fetchData('https://jsonplaceholder.typicode.com/users');
      const posts = await fetchData('https://jsonplaceholder.typicode.com/posts');
  
      renderData(users, posts);
    } catch (error) {
      console.error('Erreur lors du chargement des données :', error);
    }
  }
  
  // Appel de la fonction loadData au chargement de la page
  document.addEventListener('DOMContentLoaded', () => {
    loadData();
  });
  
  // Écouteur d'événement pour le bouton de recherche
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.id === 'searchButton') {
      const searchInput = document.getElementById('searchInput') as HTMLInputElement;
      const keyword = searchInput.value.trim().toLowerCase();
      filterResults(keyword);
    }
  });