interface Administrateur {
    nom: string;
    email: string;
    ip: string;
    dt_connexion: Date;
    login: string;
    password: string;
  }
  
  interface UtilisateurAnonyme extends Omit<Partial<Administrateur>, 'email' | 'dt_connexion' | 'login' | 'password'> {
    ip: string;
  }
  
    const utilisateurAnonyme: UtilisateurAnonyme = {
        ip: '192.168.1.1'
    };
  