class Usuario {
    constructor(nome, email, senha) {
      this._nome = nome;
      this._login = email;
      this._senha = senha;
    }
  
   
    get nome() {
      return this._nome;
    }
    get email() {
      return this._email;
    }
    get senha() {
      return this._senha;
    }
  
    
    set nome(novoNome) {
      this._nome = novoNome;
    }
    set email(novoemail) {
      this._email = novoemail;
    }
  
    set senha(novaSenha) {
      this._senha = novaSenha;
    }
  }