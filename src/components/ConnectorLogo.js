import React from 'react';

const svgLogos = {
    closeio: require('../../docs/img/connectors/logos/closeio-icon.svg'),
    customerio: require('../../docs/img/connectors/logos/customerio-icon.svg'),
    discord: require('../../docs/img/connectors/logos/discord-icon.svg'),
    hubspot: require('../../docs/img/connectors/logos/hubspot-icon.svg'),
    loops: require('../../docs/img/connectors/logos/loops-icon.svg'),
    'microsoft-teams': require('../../docs/img/connectors/logos/microsoft-teams-icon.svg'),
    resend: require('../../docs/img/connectors/logos/resend-icon.svg'),
    sendgrid: require('../../docs/img/connectors/logos/sendgrid-icon.svg'),
    segment: require('../../docs/img/connectors/logos/segment-icon.svg'),
    slack: require('../../docs/img/connectors/logos/slack-icon.svg'),
    windmill: require('../../docs/img/connectors/logos/windmill-icon.svg'),
    zapier: require('../../docs/img/connectors/logos/zapier-icon.svg'),
};

const pngLogos = {
    inngest: require('../../docs/img/connectors/logos/inngest-icon.png').default,
};

export default function ConnectorLogo({ name }) {
    let Logo = svgLogos[name.toLowerCase()]?.default;

    const src = pngLogos[name.toLowerCase()];
    if (src) {
        Logo = () => <img src={src} alt={name} style={{ border: "none", boxShadow: "none", objectFit: "contain" }} />;
    }

    if (!Logo) return null;

    return (
        <div style={{
            display: "inline-block",
            width: "1em",
            height: "1em",
            objectFit: "contain",
            verticalAlign: "middle",
            marginRight: "0.2em",
            marginBottom: "4px"
        }}>
            <Logo width="100%" height="100%" />
        </div>
    );
} 