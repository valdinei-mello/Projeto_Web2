
import { Oferta } from "./shared/oferta.model"

export class OfertasServices {

    public ofertas: Array<Oferta> =
        [
            {
                id: 1,
                categoria: "restaurante",
                titulo: "Super Burger",
                descricao_oferta: "RodÃ­zio de Mini-hambÃºrger com opÃ§Ã£o de entrada.",
                anunciante: "Original Burger",
                valor: 29.90,
                destaque: true,
                imagens: [
                    { url: "/assets/ofertas/1/img1.jpg" },
                    { url: "/assets/ofertas/1/img2.jpg" },
                    { url: "/assets/ofertas/1/img3.jpg" },
                    { url: "/assets/ofertas/1/img4.jpg" }
                ]
            },
            {
                id: 2,
                categoria: "restaurante",
                titulo: "Cozinha Mexicana",
                descricao_oferta: "AlmoÃ§o ou Jantar com RodÃ­zio Mexicano delicioso.",
                anunciante: "Mexicana",
                valor: 32.90,
                destaque: true,
                imagens: [
                    { url: "/assets/ofertas/2/img1.jpg" },
                    { url: "/assets/ofertas/2/img2.jpg" },
                    { url: "/assets/ofertas/2/img3.jpg" },
                    { url: "/assets/ofertas/2/img4.jpg" }
                ]

            },
            {
                id: 4,
                categoria: "diversao",
                titulo: "EstÃ¢ncia das Ã¡guas",
                descricao_oferta: "DiversÃ£o garantida com piscinas, trilhas e muito mais.",
                anunciante: "EstÃ¢ncia das Ã¡guas",
                valor: 31.90,
                destaque: true,
                imagens: [
                    { url: "/assets/ofertas/3/img1.jpg" },
                    { url: "/assets/ofertas/3/img2.jpg" },
                    { url: "/assets/ofertas/3/img3.jpg" },
                    { url: "/assets/ofertas/3/img4.jpg" },
                    { url: "/assets/ofertas/3/img5.jpg" },
                    { url: "/assets/ofertas/3/img6.jpg" }
                ]
            }
        ]

    public getOfertas(): Array<Oferta> {
        return this.ofertas
    }

    
    public getOfertas2(): Promise<Oferta[]> {
        return new Promise((resolve, rejects) => {
            //algum tipo de processamento, que ao finalizar, chama a função resolve ou rejeitar
            let deu_certo = false

            if(deu_certo){
                resolve(this.ofertas)
            }else{
                rejects({codigo_erro:4004, mensagem_erro:"Servidor indisponivel...."})
            }
            
        })
    }

}