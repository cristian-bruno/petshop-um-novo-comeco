/* =========================================================
   Um Novo Começo Petshop — Fase 2 
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
    marcarLinkAtivo();
    montarMenuMobile();
    montarBotaoTopo();
    validarFormularioContato();
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

/* ---------- 4. Validação simples do formulário de contato ---------- */
function validarFormularioContato() {
    var form = document.querySelector('main form');
    if (!form) return; // só existe em contato.html

    // cria a mensagem de sucesso uma vez
    var sucesso = document.createElement('p');
    sucesso.className = 'form-sucesso';
    sucesso.textContent = 'Mensagem enviada! Em breve entraremos em contato.';
    form.appendChild(sucesso);

    form.addEventListener('submit', function (evento) {
        var valido = true;
        var camposObrigatorios = form.querySelectorAll('[required]');

        camposObrigatorios.forEach(function (campo) {
            limparErro(campo);

            if (!campo.value.trim()) {
                mostrarErro(campo, 'Este campo é obrigatório.');
                valido = false;
            } else if (campo.type === 'email' && !emailValido(campo.value)) {
                mostrarErro(campo, 'Digite um e-mail válido.');
                valido = false;
            }
        });

        if (!valido) {
            evento.preventDefault();
            sucesso.classList.remove('visivel');
            return;
        }

        // Fase 2 ainda não tem back-end: por enquanto só mostramos
        // a mensagem de sucesso e evitamos recarregar a página.
        // Quando houver envio real, é só remover o preventDefault.
        evento.preventDefault();
        sucesso.classList.add('visivel');
        form.reset();
    });
}

function mostrarErro(campo, texto) {
    campo.classList.add('campo-invalido');

    var erro = document.createElement('span');
    erro.className = 'mensagem-erro';
    erro.textContent = texto;
    campo.insertAdjacentElement('afterend', erro);
}

function limparErro(campo) {
    campo.classList.remove('campo-invalido');
    var proximo = campo.nextElementSibling;
    if (proximo && proximo.classList.contains('mensagem-erro')) {
        proximo.remove();
    }
}

function emailValido(valor) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}
