/**
 * Exemplos de implementações de Proxy para entender o conceito.
 * Imagine que esse arquivo roda no servidor (BFF/Next.js Server Side).
 */

type ProxyResponse = {
  data: any;
  status: number;
  message?: string;
};

// 1. PROXY SIMPLES (Transparent Proxy)
// Apenas repassa a requisição e a resposta sem mexer em nada.
async function simpleProxy(targetUrl: string) {
  console.log('Proxy Simples: Repassando requisição...');
  const response = await fetch(targetUrl);
  return response.json();
}

// 2. PROXY COM AUTENTICAÇÃO (Secure Proxy)
// O front não tem a chave da API, o Proxy adiciona ela no servidor.
async function secureProxy(targetUrl: string) {
  const API_KEY = 'secret_key_12345'; // Fica seguro no servidor
  
  console.log('Proxy Seguro: Adicionando credenciais...');
  const response = await fetch(targetUrl, {
    headers: {
      'X-Api-Key': API_KEY,
      'Content-Type': 'application/json',
    },
  });
  
  return response.json();
}

// 3. PROXY DE TRANSFORMAÇÃO (Data Shaping/BFF Pattern)
// O backend retorna 50 campos, mas o front só precisa de 2.
async function transformationProxy(targetUrl: string) {
  console.log('Proxy Transformação: Limpando dados...');
  const response = await fetch(targetUrl);
  const fullData = await response.json();
  
  // Filtra apenas o essencial para o frontend
  return {
    id: fullData.id,
    name: fullData.product_name_full,
    price: fullData.price_formatted,
  };
}

// 4. PROXY COM TRATAMENTO de ERRO (Resilient Proxy)
// Se o backend cair, o proxy retorna algo amigável em vez de um erro 500 bruto.
async function resilientProxy(targetUrl: string): Promise<ProxyResponse> {
  try {
    console.log('Proxy Resiliente: Tentando conexão...');
    const response = await fetch(targetUrl);
    
    if (!response.ok) throw new Error('Backend falhou');
    
    const data = await response.json();
    return { data, status: 200 };
  } catch (error) {
    console.error('Erro no Proxy:', error);
    return { 
      data: null, 
      status: 503, 
      message: 'O serviço está temporariamente instável. Tente mais tarde.' 
    };
  }
}

// --- TESTES ---
async function runTests() {
  const TEST_URL = 'https://jsonplaceholder.typicode.com/posts/1';

  console.log('\n--- Testando Simple Proxy ---');
  console.log(await simpleProxy(TEST_URL));

  console.log('\n--- Testando Secure Proxy ---');
  console.log(await secureProxy(TEST_URL));

  console.log('\n--- Testando Transformation Proxy ---');
  console.log(await transformationProxy(TEST_URL));

  console.log('\n--- Testando Resilient Proxy (Sucesso) ---');
  console.log(await resilientProxy(TEST_URL));

  console.log('\n--- Testando Resilient Proxy (Erro) ---');
  console.log(await resilientProxy('https://url-que-nao-existe.com'));
}

runTests();
