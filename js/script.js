/* =========================================================
   Um Novo Começo Petshop — Fase 2
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
    marcarLinkAtivo();
    montarMenuMobile();
    montarBotaoTopo();
    configurarEnvioFormularios();
    definirDataMinimaAgendamento();
    iniciarCarrossel();
    atualizarStatusLoja();
});

/* ---------- 1. Marca o link do menu correspondente à página atual ---------- */
function marcarLinkAtivo() {
    var paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('header nav a');

    links.forEach(function (link) {
        var destino = link.getAttribute('href');
        if (destino === paginaAtual) {
            link.classList.add('ativo');
            link.setAttribute('aria-current', 'page');
        }
    });
}

/* ---------- 2. Menu mobile (hambúrguer) ---------- */
function montarMenuMobile() {
    var navPrincipal = document.querySelector('header nav');
    if (!navPrincipal) return;

    var lista = navPrincipal.querySelector('ul');
    if (!lista) return;

    var botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'nav-toggle';
    botao.setAttribute('aria-expanded', 'false');
    botao.textContent = '☰ Menu';

    // insere o botão logo antes da lista de links
    lista.parentNode.insertBefore(botao, lista);

    botao.addEventListener('click', function () {
        var aberto = lista.classList.toggle('aberto');
        botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
        botao.textContent = aberto ? '✕ Fechar' : '☰ Menu';
    });
}

/* ---------- 3. Botão "voltar ao topo" ---------- */
function montarBotaoTopo() {
    var botao = document.createElement('button');
    botao.id = 'btn-topo';
    botao.type = 'button';
    botao.setAttribute('aria-label', 'Voltar ao topo da página');
    botao.textContent = '↑';
    document.body.appendChild(botao);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 400) {
            botao.classList.add('visivel');
        } else {
            botao.classList.remove('visivel');
        }
    });

    botao.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ---------- 4. Envio dos formulários (contato e cadastro/agendamento) ----------
   O site ainda não tem back-end nesta fase, então o envio real dos dados
   não acontece. Por isso aproveitamos a validação nativa do HTML5 (atributos
   required, type, pattern, min) através de checkValidity()/reportValidity():
   se o formulário estiver válido, mostramos uma mensagem de sucesso e
   limpamos os campos; caso contrário, o próprio navegador aponta o que falta
   corrigir. Como há mais de um formulário em algumas páginas, a função
   percorre todos eles. */
function configurarEnvioFormularios() {
    var formularios = document.querySelectorAll('main form');

    formularios.forEach(function (form) {
        var sucesso = document.createElement('p');
        sucesso.className = 'form-sucesso';
        sucesso.textContent = form.dataset.mensagemSucesso || 'Enviado com sucesso!';
        form.appendChild(sucesso);

        form.addEventListener('submit', function (evento) {
            evento.preventDefault();

            if (!form.checkValidity()) {
                form.reportValidity();
                sucesso.classList.remove('visivel');
                return;
            }

            sucesso.classList.add('visivel');
            form.reset();
        });
    });
}

/* ---------- 5. Data mínima do agendamento ----------
   Função temporal: usa a data atual do navegador (new Date()) para impedir
   que o campo de agendamento aceite um dia que já passou. */
function definirDataMinimaAgendamento() {
    var campoData = document.getElementById('data-agendamento');
    if (!campoData) return;

    var hoje = new Date();
    var ano = hoje.getFullYear();
    var mes = String(hoje.getMonth() + 1).padStart(2, '0');
    var dia = String(hoje.getDate()).padStart(2, '0');

    campoData.min = ano + '-' + mes + '-' + dia;
}

/* ---------- 6. Indicador "aberto agora" / "fechado agora" ----------
   Outra função temporal: compara o horário atual do visitante com a tabela
   de horários de atendimento (segunda a sexta, sábado, domingo/feriado). */
function atualizarStatusLoja() {
    var elemento = document.getElementById('status-loja');
    if (!elemento) return;

    var agora = new Date();
    var diaSemana = agora.getDay(); // 0 = domingo ... 6 = sábado
    var horaDecimal = agora.getHours() + agora.getMinutes() / 60;

    var aberto = false;
    if (diaSemana >= 1 && diaSemana <= 5) {
        aberto = horaDecimal >= 8 && horaDecimal < 19;
    } else if (diaSemana === 6) {
        aberto = horaDecimal >= 8 && horaDecimal < 14;
    }

    elemento.textContent = aberto
        ? 'Estamos abertos agora'
        : 'Estamos fechados no momento';
    elemento.classList.toggle('status-aberto', aberto);
    elemento.classList.toggle('status-fechado', !aberto);
}

/* ---------- 7. Carrossel de destaques (index.html) ---------- */
function iniciarCarrossel() {
    var carrossel = document.getElementById('carrossel-principal');
    if (!carrossel) return;

    var trilho = carrossel.querySelector('.carrossel-trilho');
    var slides = carrossel.querySelectorAll('.carrossel-slide');
    var pontos = carrossel.querySelectorAll('.carrossel-ponto');
    var indiceAtual = 0;
    var temporizador = null;

    function irPara(indice) {
        indiceAtual = (indice + slides.length) % slides.length;
        trilho.style.transform = 'translateX(-' + (indiceAtual * 100) + '%)';

        pontos.forEach(function (ponto, i) {
            ponto.classList.toggle('ativo', i === indiceAtual);
        });
    }

    function iniciarAutoAvanco() {
        temporizador = window.setInterval(function () {
            irPara(indiceAtual + 1);
        }, 6000);
    }

    function pararAutoAvanco() {
        window.clearInterval(temporizador);
    }

    carrossel.querySelector('.carrossel-anterior').addEventListener('click', function () {
        irPara(indiceAtual - 1);
    });

    carrossel.querySelector('.carrossel-proximo').addEventListener('click', function () {
        irPara(indiceAtual + 1);
    });

    pontos.forEach(function (ponto, i) {
        ponto.addEventListener('click', function () {
            irPara(i);
        });
    });

    // pausa a troca automática quando o mouse ou o foco do teclado
    // estão sobre o carrossel, e retoma ao sair
    carrossel.addEventListener('mouseenter', pararAutoAvanco);
    carrossel.addEventListener('mouseleave', iniciarAutoAvanco);
    carrossel.addEventListener('focusin', pararAutoAvanco);
    carrossel.addEventListener('focusout', iniciarAutoAvanco);

    irPara(0);
    iniciarAutoAvanco();
}
