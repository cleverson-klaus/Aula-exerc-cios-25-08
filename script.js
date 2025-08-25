// Seleciona o botão
const btnTopo = document.getElementById("btnTopo");

// Mostrar/ocultar botão conforme a rolagem
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

// Ação do botão: voltar suavemente ao topo
btnTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
