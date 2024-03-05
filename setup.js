// Função para abrir o menu
$("#openMenu").click(function () {
    $("#overlay").show();
    $("#menu").show();
});

// Função para fechar o menu ao clicar na tela escura
$("#overlay").click(function () {
    $("#overlay").hide();
    $("#menu").hide();
});
