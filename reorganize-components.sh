#!/bin/bash
# Rodar a partir da raiz do projeto frontend (onde fica o package.json).
# Usa `git mv` (não `mv`) pra o Git entender como renomeação, não
# apagar+criar — mantém o histórico do arquivo intacto.
set -e

cd src/components

for name in Badge Button Input Sidebar TopBar StatCard BromeliadCard; do
  mkdir -p "$name"
  git mv "${name}.jsx" "$name/${name}.jsx"
  git mv "${name}.css" "$name/${name}.css"
done

cd ../..

# Corrige os imports que apontavam pro caminho antigo
sed -i 's#from "\./Badge"#from "../Badge/Badge"#' src/components/BromeliadCard/BromeliadCard.jsx
sed -i 's#from "\./Button"#from "../Button/Button"#' src/components/TopBar/TopBar.jsx
sed -i 's#components/Sidebar"#components/Sidebar/Sidebar"#' src/App.jsx
sed -i 's#components/TopBar"#components/TopBar/TopBar"#' src/App.jsx
sed -i 's#components/StatCard"#components/StatCard/StatCard"#' src/pages/Dashboard.jsx
sed -i 's#components/BromeliadCard"#components/BromeliadCard/BromeliadCard"#' src/pages/Dashboard.jsx
sed -i 's#components/Input"#components/Input/Input"#' src/pages/Login.jsx src/pages/NewBromeliad.jsx
sed -i 's#components/Button"#components/Button/Button"#' src/pages/Login.jsx src/pages/NewBromeliad.jsx

echo "Reorganização concluída. Rode 'npm run dev' pra conferir se subiu sem erro."
