import React from 'react';
import SnackbarContext from './SnackbarContext';

import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


function SnackbarWrapper({ content, setContent }) {
    const [open, setOpen] = React.useState(false);
    const [current, setCurrent] = React.useState(null);

    React.useEffect(() => {
        if (content && !current) {
            setCurrent(content); // ... Atribuí o snackbar atual
            setContent(null); // ... Remove do estado
            setOpen(true); // ... Ativa o snackbar
        } else if (content && current && open) {
            // ... Fecha o snack ativo quando um novo é atribuído.
            setOpen(false);
        }
    }, [content, current, open]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleExited = () => {
        setCurrent(null);
    };

    // ... verifica se é do tipo alerta
    const severity = ["error", "info", "success", "warning"].includes(current?.severity);

    const snackbarProps = Object.keys(current?.options || {})
        .filter(e => e != "alertProps")
        .reduce((prop, field) => ({ ...prop, [field]: current?.options?.[field] }), {});

    const alertProps = Object.keys(current?.options?.alertProps || {})
        .filter(e => e != "title")
        .reduce((prop, field) => ({ ...prop, [field]: current?.options?.alertProps?.[field] }), {});

    return (
        <Snackbar
            sx={{ maxWidth: 600, minWidth: 300 }}
            open={open}
            autoHideDuration={4000}
            {...snackbarProps}
            onClose={handleClose}
            TransitionProps={{ onExited: handleExited }}
        >
            {
                severity ?
                    <Alert severity={current.severity} sx={{ width: '100%', '& .MuiAlert-action': { alignItems: "flex-end" } }} elevation={2} {...alertProps} onClose={handleClose}>
                        {current?.options?.alertProps && current.options.alertProps?.title &&
                            <AlertTitle>{current.options.alertProps.title}</AlertTitle>
                        }
                        {current?.message}
                    </Alert> :
                    <SnackbarContent
                        sx={{ width: '100%' }}
                        message={current?.message}
                        action={
                            <IconButton
                                size="small"
                                aria-label="close"
                                color="inherit"
                                onClick={handleClose}
                            >
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        }
                    />
            }
        </Snackbar>
    );
};


export default function SnackbarProvider({ options: globalOptions, children }) {
    const [content, setContent] = React.useState(null);

    const setSnackbar = (message, severity, options) =>
        setContent({ message, severity, options: { ...globalOptions, ...options } });

    return (
        <SnackbarContext.Provider value={{ initialized: true, setSnackbar }}>
            {
                children
            }
            {
                <SnackbarWrapper content={content} setContent={setContent} />
            }
        </SnackbarContext.Provider>
    );
};