import React from "react";
import "./Cardápio.css"

export default function Cardápio() {
    const pizzas = [
        {
            nome: "Calabresa",
            descricao: "Molho de tomate, mussarela, calabresa e cebola.",
            preco: "R$ 39,90"
        },
        {
            nome: "Mussarela",
            descricao: "Molho de tomate, mussarela, tomate e orégano.",
            preco: "R$ 36,90"
        },
        {
            nome: "Frango com Catupiry",
            descricao: "Molho de tomate, frango desfiado, mussarela e catupiry.",
            preco: "R$ 44,90"
        },
        {
            nome: "Portuguesa",
            descricao: "Mussarela, presunto, ovos, cebola, ervilha e azeitona.",
            preco: "R$ 46,90"
        },
        {
            nome: "Quatro Queijos",
            descricao: "Mussarela, provolone, parmesão e catupiry.",
            preco: "R$ 49,90"
        },
        {
            nome: "Pepperoni",
            descricao: "Molho de tomate, mussarela e pepperoni.",
            preco: "R$ 45,90"
        }
    ];

    const bebidas = [
        {
            nome: "Coca-Cola Lata",
            descricao: "350 ml",
            preco: "R$ 6,00"
        },
        {
            nome: "Guaraná Lata",
            descricao: "350 ml",
            preco: "R$ 6,00"
        },
        {
            nome: "Coca-Cola 2 Litros",
            descricao: "2 litros",
            preco: "R$ 12,00"
        },
        {
            nome: "Água Mineral",
            descricao: "500 ml",
            preco: "R$ 4,00"
        }
    ];

    return (
        <main>

            <section>
                <h2>🍕 Pizzas</h2>

                {pizzas.map((pizza, index) => (
                    <article key={index}>
                        <h3>{pizza.nome}</h3>

                        <p>{pizza.descricao}</p>

                        <strong>{pizza.preco}</strong>

                        <br />

                        <button>
                            Adicionar ao pedido
                        </button>
                    </article>
                ))}
            </section>

            <section>
                <h2>🥤 Bebidas</h2>

                {bebidas.map((bebida, index) => (
                    <article key={index}>
                        <h3>{bebida.nome}</h3>

                        <p>{bebida.descricao}</p>

                        <strong>{bebida.preco}</strong>

                        <br />

                        <button>
                            Adicionar ao pedido
                        </button>
                    </article>
                ))}
            </section>
        </main>
    );
}



