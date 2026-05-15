// Teste de Integração Simples
async function testarAPI() {
    console.log("Iniciando teste de integração com OpenFDA...");
    try {
        const response = await fetch('https://api.fda.gov/drug/label.json?search=brand_name:advil&limit=1');
        if (response.status === 200) {
            console.log("✅ TESTE PASSOU: API respondendo corretamente (Status 200).");
        } else {
            console.log("❌ TESTE FALHOU: Status diferente de 200.");
        }
    } catch (error) {
        console.log("❌ TESTE FALHOU: Erro na conexão.");
    }
}

testarAPI();