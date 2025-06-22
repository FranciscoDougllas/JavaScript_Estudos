
/*
 * ASYNC/AWAIT - Exemplo Completo
 * 
 * Async/Await é uma forma mais moderna e legível de trabalhar com Promises.
 * Permite escrever código assíncrono de forma síncrona, tornando-o mais fácil de entender.
 * 
 * - async: Declara uma função assíncrona que sempre retorna uma Promise
 * - await: Pausa a execução da função até que a Promise seja resolvida
 */

// ========================================
// EXEMPLO 1: Função básica com async/await
// ========================================

async function buscarUsuario() {
    try {
        console.log('Iniciando busca do usuário...');
        
        // await pausa a execução até a Promise ser resolvida
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        
        // Verifica se a requisição foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        
        const usuario = await response.json();
        console.log('Usuário encontrado:', usuario);
        
        return usuario;
    } catch (erro) {
        console.error('Erro ao buscar usuário:', erro);
        throw erro; // Re-lança o erro para ser tratado por quem chamou a função
    }
}

// ========================================
// EXEMPLO 2: Múltiplas requisições sequenciais
// ========================================

async function buscarDadosCompletos() {
    try {
        console.log('=== Buscando dados completos ===');
        
        // Busca usuário primeiro
        const usuario = await buscarUsuario();
        console.log('1. Usuário carregado');
        
        // Busca posts do usuário
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${usuario.id}`);
        const posts = await postsResponse.json();
        console.log('2. Posts carregados:', posts.length, 'posts');
        
        // Busca comentários dos posts
        const comentariosResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`);
        const comentarios = await comentariosResponse.json();
        console.log('3. Comentários carregados:', comentarios.length, 'comentários');
        
        return {
            usuario,
            posts,
            comentarios
        };
    } catch (erro) {
        console.error('Erro ao buscar dados completos:', erro);
        throw erro;
    }
}

// ========================================
// EXEMPLO 3: Requisições paralelas com Promise.all()
// ========================================

async function buscarDadosParalelos() {
    try {
        console.log('=== Buscando dados em paralelo ===');
        
        // Executa múltiplas requisições simultaneamente
        const [usuarios, posts, comentarios] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
        ]);
        
        console.log('Todos os dados carregados simultaneamente:');
        console.log('- Usuários:', usuarios.length);
        console.log('- Posts:', posts.length);
        console.log('- Comentários:', comentarios.length);
        
        return { usuarios, posts, comentarios };
    } catch (erro) {
        console.error('Erro ao buscar dados paralelos:', erro);
        throw erro;
    }
}

// ========================================
// EXEMPLO 4: Função com timeout personalizado
// ========================================

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function buscarComTimeout(url, timeoutMs = 5000) {
    try {
        console.log(`Buscando ${url} com timeout de ${timeoutMs}ms`);
        
        // Cria uma Promise que rejeita após o timeout
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Timeout da requisição')), timeoutMs);
        });
        
        // Competição entre a requisição e o timeout
        const response = await Promise.race([
            fetch(url),
            timeoutPromise
        ]);
        
        return await response.json();
    } catch (erro) {
        console.error('Erro na requisição:', erro.message);
        throw erro;
    }
}

// ========================================
// EXEMPLO 5: Função que simula processamento
// ========================================

async function processarDados(dados) {
    console.log('Iniciando processamento...');
    
    // Simula processamento demorado
    await delay(2000);
    
    const resultado = dados.map(item => ({
        ...item,
        processado: true,
        timestamp: new Date().toISOString()
    }));
    
    console.log('Processamento concluído!');
    return resultado;
}

// ========================================
// EXEMPLO 6: Função principal que demonstra tudo
// ========================================

async function demonstrarAsyncAwait() {
    try {
        console.log('🚀 INICIANDO DEMONSTRAÇÃO ASYNC/AWAIT 🚀\n');
        
        // Exemplo 1: Busca simples
        console.log('--- EXEMPLO 1: Busca simples ---');
        await buscarUsuario();
        console.log('');
        
        // Exemplo 2: Busca sequencial
        console.log('--- EXEMPLO 2: Busca sequencial ---');
        const dadosCompletos = await buscarDadosCompletos();
        console.log('Dados completos obtidos com sucesso!\n');
        
        // Exemplo 3: Busca paralela
        console.log('--- EXEMPLO 3: Busca paralela ---');
        const dadosParalelos = await buscarDadosParalelos();
        console.log('Dados paralelos obtidos com sucesso!\n');
        
        // Exemplo 4: Com timeout
        console.log('--- EXEMPLO 4: Busca com timeout ---');
        const dadosComTimeout = await buscarComTimeout('https://jsonplaceholder.typicode.com/users/1', 3000);
        console.log('Dados com timeout obtidos:', dadosComTimeout.name, '\n');
        
        // Exemplo 5: Processamento
        console.log('--- EXEMPLO 5: Processamento ---');
        const dadosProcessados = await processarDados(dadosCompletos.posts.slice(0, 3));
        console.log('Dados processados:', dadosProcessados.length, 'itens\n');
        
        console.log('✅ DEMONSTRAÇÃO CONCLUÍDA COM SUCESSO! ✅');
        
    } catch (erro) {
        console.error('❌ Erro na demonstração:', erro);
    }
}

// ========================================
// EXEMPLO 7: Tratamento de erros avançado
// ========================================

async function exemploTratamentoErros() {
    try {
        // Simula diferentes tipos de erro
        const resultados = await Promise.allSettled([
            buscarComTimeout('https://jsonplaceholder.typicode.com/users/1', 1000), // Sucesso
            buscarComTimeout('https://url-inexistente.com', 1000), // Erro de rede
            buscarComTimeout('https://jsonplaceholder.typicode.com/users/999', 1000) // 404
        ]);
        
        console.log('Resultados com Promise.allSettled:');
        resultados.forEach((resultado, index) => {
            if (resultado.status === 'fulfilled') {
                console.log(`✅ Requisição ${index + 1}: Sucesso`);
            } else {
                console.log(`❌ Requisição ${index + 1}: ${resultado.reason.message}`);
            }
        });
        
    } catch (erro) {
        console.error('Erro geral:', erro);
    }
}

// ========================================
// EXECUÇÃO DOS EXEMPLOS
// ========================================

// Descomente as linhas abaixo para executar os exemplos:

// demonstrarAsyncAwait();
// exemploTratamentoErros();

// Para executar exemplos individuais:
// buscarUsuario();
// buscarDadosCompletos();
// buscarDadosParalelos();

console.log('📚 Exemplos de Async/Await carregados!');
console.log('Descomente as funções no final do arquivo para executar os exemplos.');

