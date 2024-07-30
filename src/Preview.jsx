import React from 'react';

import { SnackbarProvider, useSnackbar } from './Snackbar';

const tests = [
    {
        label: "Simple message",
        message: "This is a snackbar"
    },
    {
        label: "Alert Success",
        message: "Hello World!",
        severity: "success"
    },
    {
        label: "Alert Info",
        message: "Hello World.",
        severity: "info"
    },
    {
        label: "Alert Warning",
        message: "Hello World?",
        severity: "warning"
    },
    {
        label: "Alert Error",
        message: "Hello World...",
        severity: "error"
    },
    {
        label: "A filled alert style",
        message: "With optional properties",
        severity: "info",
        options: {
            alertProps: {
                variant: "filled"
            }
        }
    },
    {
        label: "A alert with title",
        message: "More optional properties, only with alert snackbar style",
        severity: "success",
        options: {
            alertProps: {
                title: "Hey, look out"
            }
        }
    },
    {
        label: "On top right",
        message: "This is a snackbar on top right.",
        options: {
            anchorOrigin: { vertical: "top", horizontal: "right" }
        }
    },
    {
        label: "On bottom right",
        message: "This is a snackbar on bottom right.",
        options: {
            anchorOrigin: { vertical: "bottom", horizontal: "right" }
        }
    },
    {
        label: "A message with a huge text",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        label: "A *alert* message with a huge text",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        severity: "warning"
    }
];

const others = [
    {
        label: "A filled alert with global style on provider",
        message: "With global properties to outline",
        severity: "info"
    },
    {
        label: "Alert Success with global style on provider",
        message: "Hello World! see provider options to set global scope of context",
        severity: "success"
    },
]

function Preview({ title, items }) {
    const { setSnackbar } = useSnackbar();

    return (
        <div style={{ padding: "100px", paddingBottom: "0px" }}>
            <h1>Snackbar Utils {title}</h1>
            {
                items.map((content, key) =>
                    <div key={key}>
                        <button onClick={() => setSnackbar(content?.message, content?.severity, content?.options)}>
                            {content?.label}
                        </button>
                        <br />
                        <hr />
                    </div>
                )
            }
        </div>
    )
}

function Dummy () {
    const { setSnackbar } = useSnackbar();

    React.useEffect(() => {
        if(setSnackbar)
            setSnackbar("Render Test!");
    }, [setSnackbar]);

    return null;
};

export default function PreviewProvider() {

    return (
        <SnackbarProvider>
            <Dummy />
            <Preview items={tests} />
            <SnackbarProvider options={{
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "center"
                },
                alertProps: {
                    variant: "outlined",
                    sx:{ bgcolor: 'background.paper' }
                }
            }}>
                <Preview items={others} title="with Global Context Options" />
                <SnackbarProvider>
                    <Preview items={others} title="Just chained!" />
                    <SnackbarProvider options={{ anchorOrigin: { vertical: "top" }}} >
                        <Preview items={others} title="keeping chained but with TOP!" />
                    </SnackbarProvider>
                </SnackbarProvider>
            </SnackbarProvider>
        </SnackbarProvider>
    );
}

