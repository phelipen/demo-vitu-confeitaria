"use client";
import { useState } from "react";

const flavors = ["Banoffe", "Limão", "Crocante", "Alemã", "Cheesecake", "Chocolate 50%", "Morangoffe", "Nozes"];
export default function Choose() {
  const [flavor, setFlavor] = useState("Banoffe");
  const [format, setFormat] = useState("Fatia");
  const message = `Olá, Vitu! Gostaria de consultar a disponibilidade de ${format.toLocaleLowerCase("pt-BR")} de ${flavor}. Podem me informar as opções e os valores?`;
  return <div className="choose-box"><div className="choose-form"><fieldset><legend>Primeiro, seu sabor</legend><div className="flavors">{flavors.map(item => <label key={item} className={flavor === item ? "option active" : "option"}><input type="radio" name="sabor" value={item} checked={flavor === item} onChange={() => setFlavor(item)}/><span>{item}</span></label>)}</div></fieldset><fieldset className="format"><legend>Qual é o tamanho da vontade?</legend>{["Fatia", "Torta inteira"].map(item => <label key={item}><input type="radio" name="formato" value={item} checked={format === item} onChange={() => setFormat(item)}/><span>{item}</span></label>)}</fieldset></div><div className="order-note"><p className="note-label">Sua próxima consulta</p><p className="order-flavor" aria-live="polite">{format}<br/>de {flavor}</p><p>Os valores, sabores do dia e opções de retirada ou entrega são confirmados pela Vitu.</p><a className="button chocolate" href={`https://wa.me/5521978706868?text=${encodeURIComponent(message)}`}>Consultar pelo WhatsApp <span aria-hidden="true">↗</span></a><small>Esta demonstração não realiza nem confirma pedidos.</small></div></div>;
}
