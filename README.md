# Snackbar Utils
Esse pacote oferece funções auxiliares para disparar notificações em snackbar, usando o componente [Snackbar](https://mui.com/material-ui/react-snackbar/). A base da ideia é encapsular toda a regra de estados em uma API de Contexto do React, para ser usada em qualquer lugar.

## Instalação
Use o link do próprio repositório para instalar o modulo, no seu projeto, execute o seguinte comando:
```shell
npm install mui-snackbar-utils 
```

## Importação
No seu projeto react, após a instalação, basta usar:
```jsx
import { SnackbarProvider, useSnackbar } from 'mui-snackbar-utils';
```

## Demonstração
Inicie o projeto e acesse a pagina inicial que contém [exemplos](./src/Preview.jsx).
```
npm run dev
```

## Funções
Abaixo a lista de funções disponíveis, exemplos completos voce pode encontrar no arquivo [`Preview.jsx`](./src/Preview.jsx).

### setSnackbar (message, severity, options)
Dispara um snackbar com uma mensagem, caso envie um valor de 'severity' será disparado um [modelo de alerta](https://mui.com/material-ui/react-snackbar/#customization), e em 'options' você pode enviar qualquer propriedade da lib oficial do snackbar.  

> Você também pode enviar { 'alertProps': { ... } } dentro de 'options' para atribuir propriedades ao component [Alert](https://mui.com/material-ui/react-alert/)

```jsx
function Test() {
	const { setSnackbar } = useSnackbar();

	const handleClick = (severity) => {
		setSnackbar("Hello World Message", severity);
	};

	return (
		<button onClick={() => setSnackbar("Hello world message")}>
			Show message
		</button>
		<button onClick={() => setSnackbar("Hey a success message", "success")}>
			Show success message
		</button>
		<button onClick={() => setSnackbar("On top right message with info alert", "info", {
            anchorOrigin: { vertical: "top", horizontal: "right" }
		})}>
			Show a top right message info
		</button>
	);
}
```

Você também pode definir opções "globais" para o contexto via ´provider´
```jsx
function Test() {
	const { setSnackbar } = useSnackbar();

	const handleClick = (severity) => {
		setSnackbar("Hello World Message", severity);
	};

	return (
		<button onClick={() => setSnackbar("Hello world message")}>
			Show message
		</button>
	)
};

function App(){
	return (
		<SnackbarProvider options={{
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "right"
			},
			alertProps: {
				variant: "outlined"
			}
		}}>
			<Test />
		</SnackbarProvider>
	)
}
```
> Qualquer chamada de `setSnackbar` terá as opções definidas no provider.

## Contribuir
Esse modulo foi construído com base no artigo abaixo que mostra como distribuir seu projeto como modulo npm.
- Fonte: [Building and publishing a react component](https://dev.to/bieefilled/building-and-publishing-a-react-component-with-vite-and-npm-1npd)