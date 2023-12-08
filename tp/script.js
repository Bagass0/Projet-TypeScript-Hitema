var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Fonction pour effectuer une requête AJAX
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
// Fonction pour fusionner et injecter les données dans le DOM
function renderData(users, posts) {
    // Exemple de logique de fusion : concaténation des noms des utilisateurs et des titres des messages
    var mergedData = users.map(function (user, index) {
        return "".concat(user.name, " - ").concat(posts[index].title);
    }).join('<br>');
    // Injectez les données dans le DOM
    var appContainer = document.getElementById('app');
    if (appContainer) {
        appContainer.innerHTML = mergedData;
    }
}
// Fonction pour filtrer les résultats
function filterResults(keyword) {
    // Implémentez la logique de filtrage ici
}
// Appel des requêtes AJAX
function loadData() {
    return __awaiter(this, void 0, void 0, function () {
        var users, posts, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetchData('https://jsonplaceholder.typicode.com/users')];
                case 1:
                    users = _a.sent();
                    return [4 /*yield*/, fetchData('https://jsonplaceholder.typicode.com/posts')];
                case 2:
                    posts = _a.sent();
                    renderData(users, posts);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Erreur lors du chargement des données :', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Appel de la fonction loadData au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
    loadData();
});
// Écouteur d'événement pour le bouton de recherche
document.addEventListener('click', function (event) {
    var target = event.target;
    if (target.id === 'searchButton') {
        var searchInput = document.getElementById('searchInput');
        var keyword = searchInput.value.trim().toLowerCase();
        filterResults(keyword);
    }
});
