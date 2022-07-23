export class LoginUsuario {
    subscribe(arg0: (data: any) => void, arg1: (err: any) => void): LoginUsuario {
      throw new Error('Method not implemented.');
    }
    nombreUsuario: string;
    password: string;

    constructor(nombreUsuario: string, password:string){
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
}
