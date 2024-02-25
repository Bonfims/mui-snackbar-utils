import React from 'react';

const SnackbarContext = React.createContext({
    /**
     * Envia uma notificação via snack bar na parte inferior da tela. 
     * @param {string} message Mensagem do dialogo
     * @param {string} type Tipo da mensagem que pode ser `error`, `info`, `success`, `warning` e `default`
     * @param {options} options Dados adicionais
     * @returns {void}
     */
    setSnackbar: (message, type, options) => console.error("Snackbar context not initialized", message, type),
    initialized: false
});

export default SnackbarContext;