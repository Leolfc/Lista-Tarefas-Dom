const BotaoDeleta = () => {
  const botaoDeleta = document.createElement("button");
  botaoDeleta.innerHTML = "Deletar";
  botaoDeleta.classList.add("check-button");
  botaoDeleta.addEventListener("click", deletarTarefa);
  return botaoDeleta;
};
const deletarTarefa = (evento) => {
  const botaoDeleta = evento.target;
  const tarefaCompleta = botaoDeleta.parentElement;
  tarefaCompleta.remove();
};
export default BotaoDeleta;
