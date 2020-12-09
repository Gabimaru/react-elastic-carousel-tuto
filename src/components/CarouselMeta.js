import React from 'react';
import Carousel from "react-elastic-carousel"

import Metamask1 from "./img/MetaMask11.png"
import Metamask2 from "./img/MetaMask22.png"
import Metamask3 from "./img/MetaMask44.png"
import Metamask4 from "./img/MetaMask55.png"

import browser1 from "./img/browserFirefox.png"
import browser2 from "./img/browserchrome.png"
import browser3 from "./img/browserBrave.png"
import browser4 from "./img/browserEdge.png"


function CarouselMeta() {
  return (
    <div className="container" >
      <Carousel >

          <div style={{position:"relative"}}>
              <img className="card-title1" src={Metamask1} alt="Prérequis à l'utilisation de la blockchain" />
              <div style={{position:"absolute", top:"50px", left:"550px", width:"600px", height:"400px", fontSize:"200%"}}>
                <p><b>Avant d'utiliser la blockchain, il nous faudra palier au coût généré par cette interaction.
                   Pour cela nous allons utiliser ce qu'on appelle un portefeuille numérique (wallet).</b></p>
                
                <p><b>Ce wallet nous permettra donc d'y stocker une monnaie numérique (crypto monnaie) avec laquelle 
                  nous pourrons nous affranchir de la compensation nécessaire à l'utilisation du réseau Ethereum.</b></p>
              </div> 
          </div>

          <div style={{position:"relative"}}>
              <img className="card-title2" src={Metamask2} alt="Le wallet MetaMask"/>
              <div style={{position:"absolute", top:"150px", left:"650px", width:"500px", height:"400px", fontSize:"200%"}}>
                <p><b>Pour nos premiers pas dans la blockchain, nous utiliserons le wallet sécurisé et respectueux des données privées : MetaMask.</b></p>
                
                <p><b>Nous reviendrons en détail sur son principe de fonctionnement plustard. Installons le sans plus attendre.</b></p>
              </div>
          </div>

          <div style={{position:"relative"}}>
              <img className="card-title4" src={Metamask3} alt="Se procurer des ETH de test"/>
              <div style={{position:"absolute", top:"190px", left:"675px", width:"525px", height:"400px", fontSize:"200%"}}>
                <p><b>Il nous suffit de l'ajouter en cliquant sur l'une des icônes suivantes en fonction du navigateur utilisé.</b></p>

                <div>
                  <img src={browser1} alt="icône de firefox"/>
                </div>
            </div>
          </div>

          <div style={{position:"relative"}}>
              <img className="card-title4" src={Metamask4} alt="Se procurer des ETH de test"/>
              <div style={{position:"absolute", top:"190px", left:"650px", width:"500px", height:"400px", fontSize:"200%"}}>
                <p><b>Ce qui est génial avec MetaMask c'est qu'il s'intègre dans votre navigateur web très facilement.</b></p>

                <p><b>Il nous suffit de l'ajouter en cliquant sur l'une des icônes suivantes en fonction du navigateur utilisé.</b></p>
            </div>
          </div>

    </Carousel>
    </div>
  );
}

export default CarouselMeta;