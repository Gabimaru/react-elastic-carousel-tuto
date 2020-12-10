import React from 'react';
import Carousel from "react-elastic-carousel"

// Import des slides qui composent le carousel depuis le dossier local "img"
import Metamask1 from "./../img/MetaMask11.png"
import Metamask2 from "./../img/MetaMask22.png"
import Metamask3 from "./../img/MetaMask44.png"
import Metamask4 from "./../img/MetaMask55.png"

// Import des icônes qui composent la 3ème slide du carousel depuis le dossier local "img"
import browser1 from "./../img/browserFirefox.png"
import browser2 from "./../img/browserchrome.png"
import browser3 from "./../img/browserBrave.png"
import browser4 from "./../img/browserEdge.png"

// Seul et unique fonction fléchée du compoent 'CarouselMeta'
const CarouselMeta = () => {
  return (
    <div className="container">
        <Carousel >
{/*Paragraphe de code de la 1ère slide*/}
          <div style={{position:"relative"}}>
              <img className="card-title1 img-fluid" src={Metamask1} alt="Prérequis à l'utilisation de la blockchain" />
              <div style={{position:"absolute", top:"50px", left:"550px", width:"600px", height:"400px", fontSize:"200%"}}>
                <p><b>Avant d'utiliser la blockchain, il nous faudra palier au coût généré par cette interaction.
                   Pour cela nous allons utiliser ce qu'on appelle un portefeuille numérique (wallet).</b></p>                
                <p><b>Ce wallet nous permettra donc d'y stocker une monnaie numérique (crypto monnaie) avec laquelle 
                  nous pourrons nous affranchir de la compensation nécessaire à l'utilisation du réseau Ethereum.</b></p>
              </div> 
          </div>

{/*Paragraphe de code de la 2ème slide*/}
          <div style={{position:"relative"}}>
              <img className="card-title2 img-fluid" src={Metamask2} alt="Le wallet MetaMask"/>
              <div style={{position:"absolute", top:"150px", left:"650px", width:"500px", height:"400px", fontSize:"200%"}}>
                <p><b>Pour nos premiers pas dans la blockchain, nous utiliserons le wallet : MetaMask.</b></p>                
                <p><b>Nous reviendrons en détail sur son principe de fonctionnement plus tard. Installons le sans plus attendre.</b></p>
              </div>
          </div>

{/*Paragraphe de code de la 3ème slide*/}
          <div style={{position:"relative"}}>
              <img className="card-title3 img-fluid" src={Metamask3} alt="Se procurer des ETH de test"/>
              <div style={{position:"absolute", top:"30px", left:"220px", width:"525px", height:"400px", fontSize:"300%"}}>
                <p className="pb-5"><b>METAMASK</b></p>
              </div>
              <div style={{position:"absolute", top:"150px", left:"675px", width:"525px", height:"400px", fontSize:"200%"}}>
                <p><b>MetaMask s'intègre dans votre navigateur web très facilement.</b></p>
              </div>
              <div style={{position:"absolute", top:"300px", left:"675px", width:"525px", height:"400px", fontSize:"200%"}}>
                <p className="pb-4"><b>Il nous suffit de l'ajouter en cliquant sur l'une des icônes suivantes en fonction du navigateur utilisé.</b></p>
{/*Paragraphe des icônes cliquables de la 3ème slide*/}                
                <div className="container py-4">
                  <a href="https://addons.mozilla.org/fr/firefox/addon/ether-metamask/" target="_blank" rel="noreferrer">
                    <img src={browser1} alt="icône de firefox" className="mx-2" />
                  </a>
                  <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=fr" target="_blank" rel="noreferrer">
                    <img src={browser2} alt="icône de crome" />
                  </a>                    
                  <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=fr" target="_blank" rel="noreferrer">
                    <img src={browser3} alt="icône de brave" width="105px" className="mx-2" />
                  </a>                      
                  <a href="https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm?hl=fr" target="_blank" rel="noreferrer">
                    <img src={browser4} alt="icône de edge" width="100px" />
                  </a>
                </div>
            </div>
          </div>

{/*Paragraphe de code de la 4ème slide*/}
          <div style={{position:"relative"}}>
              <img className="card-title4 img-fluid" src={Metamask4} alt="Se procurer des ETH de test"/>
              <div style={{position:"absolute", top:"190px", left:"650px", width:"500px", height:"400px", fontSize:"200%"}}>
                <p><b>Partie à venir</b></p>
                <p><b>Partie à venir</b></p>
            </div>
          </div>
        </Carousel>
      </div>
  );
}

export default CarouselMeta;