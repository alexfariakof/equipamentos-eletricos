function Open-Report-Coverage {
  # Encontra o diretório mais recente se ele existir
  $latestDir = Get-ChildItem -Directory -Path $reportPath | Sort-Object LastWriteTime -Descending | Select-Object -First 1

  # Verifica se encontrou um diretório e, em caso afirmativo, obtém o nome do diretório (GUID)
  if ($null -ne $latestDir) {
    # Abre a página index.html no navegador padrão do sistema operacional
    Invoke-Item $reportPath\index.html
  }
  else {
    Write-Host "Nenhum diretório de resultados encontrado."
  }
}

# Path onde é gerado o relatório coverage
$reportPath = ".\coverage\lcov-report"

# Executa os testes unitários e gera o relátorio
npm run test

Open-Report-Coverage
