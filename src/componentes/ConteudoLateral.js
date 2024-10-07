import logo from "../imagens/instalogoclean.png";
import ListItem from "./ListItem";
// Importações de icones
// Sempre que for utilizar um ícone, tem que importar ele aqui.
import { FaRegHeart } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { BsChatLeftFill } from "react-icons/bs";
import { TiUser } from "react-icons/ti";
import { FaGear } from "react-icons/fa6";

export default function ConteudoLateral() {
  return (
    <div className="ConteudoLateral">
      <img src={logo} alt="Logo" className="logo" />
      <div>
        <ul className="MenuLateral">
          <ListItem text="Home" icon={<MdHomeFilled style={{ color: "red"}} />}/>
          <ListItem text="Pesquisar" icon={<FaSearch />} />
          <ListItem text="Explorar" icon={<FaCompass />} />
          <ListItem text="Mensagens" icon={<BsChatLeftFill />} />
          <ListItem text="Curtidos" icon={<FaRegHeart />} />
          <ListItem text="Perfil" icon={<TiUser />} />
          <ListItem text="Configurações" icon={<FaGear />} />
        </ul>
      </div>
    </div>
  );
}

/* icones baixados por: https://www.npmjs.com/package/react-icons 
            utilizando comando: npm install react-icons --save
            esse comando permite baixar o react-icons e salvar no projeto
            e para utilizar é só importar o ícone desejado e utilizar como componente.

            para remover o pacote é só utilizar o comando: npm uninstall react-icons
          */

/* Utilizando o ícone do react-icons.
           Pra usarmos temos que utilizar a estrutura:
            {<NomeDoIcone />} e ter o import dele la em cima*/
